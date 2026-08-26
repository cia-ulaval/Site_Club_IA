import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { memo, useEffect, useMemo, useState } from 'react';
import { DIST, DUR, EASE } from '../../hooks/useMotion';
import { cn } from '../../lib/cn';

export interface LogoCarouselItem {
  src: string;
  href: string;
  alt: string;
}

interface LogoCarouselProps {
  items: LogoCarouselItem[];
  label: string;
  className?: string;
  /** Column count at the widest breakpoint; narrower ones show fewer. */
  maxColumns?: number;
}

const CYCLE_DURATION = 2400; // ms a column holds one logo before rotating
const CLOCK_TICK = 100; // ms between clock advances
const COLUMN_STAGGER = 260; // ms each column trails the one before it

/* The wall gains a column at each breakpoint rather than reflowing what is
   already on screen. Distribution reads the *measured* count, so no logo is
   ever bucketed into a column the current viewport does not render. */
const BREAKPOINTS = [
  { query: '(min-width: 1280px)', columns: 6 },
  { query: '(min-width: 1024px)', columns: 5 },
  { query: '(min-width: 768px)', columns: 4 },
  { query: '(min-width: 640px)', columns: 3 },
] as const;
const NARROW_COLUMNS = 2;

function measureColumns(): number {
  if (typeof window === 'undefined') return NARROW_COLUMNS;
  return BREAKPOINTS.find((b) => window.matchMedia(b.query).matches)?.columns ?? NARROW_COLUMNS;
}

function useVisibleColumns(max: number): number {
  const [columns, setColumns] = useState(measureColumns);

  useEffect(() => {
    const lists = BREAKPOINTS.map((b) => window.matchMedia(b.query));
    const update = () => setColumns(measureColumns());
    lists.forEach((list) => list.addEventListener('change', update));
    update();
    return () => lists.forEach((list) => list.removeEventListener('change', update));
  }, []);

  return Math.max(1, Math.min(columns, max));
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* Round-robin the shuffled items into `columnCount` buckets. Bucket lengths
   differ by at most one and are deliberately left ragged: padding them to a
   common length meant repeating logos, which could put the same mark on the
   wall twice at once. A column simply cycles its own run. */
function distribute(items: LogoCarouselItem[], columnCount: number): LogoCarouselItem[][] {
  const columns: LogoCarouselItem[][] = Array.from({ length: columnCount }, () => []);
  shuffle(items).forEach((item, i) => columns[i % columnCount].push(item));
  return columns.filter((column) => column.length > 0);
}

const LogoColumn = memo(function LogoColumn({
  logos,
  index,
  currentTime,
  reduce,
}: {
  logos: LogoCarouselItem[];
  index: number;
  currentTime: number;
  reduce: boolean;
}) {
  /* Every column reads the same clock, offset by its own position, so each
     one crosses its rotation boundary at a different real moment — the row
     cascades one logo at a time instead of swapping in lockstep. */
  const offset = (currentTime + index * COLUMN_STAGGER) % (logos.length * CYCLE_DURATION);
  const currentIndex = Math.floor(offset / CYCLE_DURATION);
  const item = logos[currentIndex];
  if (!item) return null;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden="true"
      tabIndex={-1}
      className="flex h-16 items-center justify-center overflow-hidden md:h-20"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={`${item.src}-${currentIndex}`}
          src={encodeURI(item.src)}
          alt=""
          loading="lazy"
          decoding="async"
          initial={reduce ? false : { opacity: 0, y: DIST.near }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -DIST.near }}
          transition={{ duration: reduce ? 0 : DUR.base, ease: EASE.out }}
          className="max-h-12 w-auto max-w-full object-contain md:max-h-16"
        />
      </AnimatePresence>
    </a>
  );
});

/**
 * Cult UI's LogoCarousel, adapted to the CIA design system.
 * https://www.cult-ui.com/docs/components/logo-carousel
 *
 * Same mechanism as the original: the shuffled set is distributed round-
 * robin across columns, a single shared clock advances on one interval, and
 * each column derives its own frame from that clock offset by its index.
 * Columns therefore rotate independently and asynchronously — never all at
 * once — without needing a separate timer per column. The animated grid is
 * `aria-hidden`; every logo also lives in a plain, always-present link
 * below, so partners stay reachable regardless of what the row is
 * currently showing.
 */
export default function LogoCarousel({
  items,
  label,
  className,
  maxColumns = 6,
}: LogoCarouselProps) {
  const reduce = useReducedMotion() ?? false;
  const visibleColumns = useVisibleColumns(maxColumns);
  const columns = useMemo(() => distribute(items, visibleColumns), [items, visibleColumns]);
  const [currentTime, setCurrentTime] = useState(0);

  /* Nothing to rotate when every column holds a single logo, and nothing
     *should* rotate under reduced motion — the clock drives a hard cut, not
     just the crossfade, so leaving it running would keep swapping logos with
     the animation stripped off. Either way the interval is never started, so
     the rail stops re-rendering ten times a second. */
  const rotates = !reduce && columns.some((column) => column.length > 1);

  useEffect(() => {
    if (!rotates) return undefined;
    let id = 0;
    const start = () => {
      id = window.setInterval(() => setCurrentTime((t) => t + CLOCK_TICK), CLOCK_TICK);
    };
    const stop = () => window.clearInterval(id);
    /* A backgrounded tab animates nothing anyone can see. */
    const onVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [rotates]);

  return (
    <section className={cn('relative', className)} aria-label={label}>
      <div
        className="grid gap-x-8 gap-y-6"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {columns.map((logos, i) => (
          <LogoColumn key={i} logos={logos} index={i} currentTime={currentTime} reduce={reduce} />
        ))}
      </div>

      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.src}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.alt}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
