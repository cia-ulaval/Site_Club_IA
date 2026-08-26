import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
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
  maxColumns?: number;
}

const SWAP_INTERVAL_MS = 2400;

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

function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function offscreenFrom(items: LogoCarouselItem[], onscreen: LogoCarouselItem[]) {
  return items.filter((item) => !onscreen.some((shown) => shown.src === item.src));
}

const LogoSlot = memo(function LogoSlot({
  item,
  reduce,
}: {
  item: LogoCarouselItem;
  reduce: boolean;
}) {
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
          key={item.src}
          src={encodeURI(item.src)}
          alt=""
          loading="lazy"
          decoding="async"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: DIST.near }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -DIST.near }}
          transition={{ duration: DUR.base, ease: EASE.out }}
          className="max-h-12 w-auto max-w-full object-contain md:max-h-16"
        />
      </AnimatePresence>
    </a>
  );
});

export default function LogoCarousel({
  items,
  label,
  className,
  maxColumns = 6,
}: LogoCarouselProps) {
  const reduce = useReducedMotion() ?? false;
  const columnCount = useVisibleColumns(Math.min(maxColumns, items.length));
  const [onscreen, setOnscreen] = useState(() => shuffle(items).slice(0, columnCount));
  const swapOrder = useRef<number[]>([]);

  useEffect(() => {
    setOnscreen((current) => {
      if (current.length === columnCount) return current;
      swapOrder.current = [];
      if (current.length > columnCount) return current.slice(0, columnCount);
      const incoming = shuffle(offscreenFrom(items, current));
      return [...current, ...incoming.slice(0, columnCount - current.length)];
    });
  }, [items, columnCount]);

  /* Reduced motion drops the movement, not the rotation: the slot crossfades
     in place instead of sliding. */
  const rotates = items.length > columnCount;

  useEffect(() => {
    if (!rotates) return undefined;

    const swap = () =>
      setOnscreen((current) => {
        const offscreen = offscreenFrom(items, current);
        if (offscreen.length === 0) return current;

        if (swapOrder.current.length === 0) {
          swapOrder.current = shuffle(current.map((_, column) => column));
        }
        const column = swapOrder.current.pop() as number;

        const next = [...current];
        next[column] = offscreen[Math.floor(Math.random() * offscreen.length)];
        return next;
      });

    let id = 0;
    const stop = () => window.clearInterval(id);
    const start = () => {
      stop();
      id = window.setInterval(swap, SWAP_INTERVAL_MS);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [rotates, items]);

  return (
    <section className={cn('relative', className)} aria-label={label}>
      <div
        className="grid gap-x-8 gap-y-6"
        style={{ gridTemplateColumns: `repeat(${onscreen.length}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {onscreen.map((item, column) => (
          <LogoSlot key={column} item={item} reduce={reduce} />
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
