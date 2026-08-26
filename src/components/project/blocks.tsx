import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Block, Column, Media, Para } from '../../data/projectPages';
import { useMotion } from '../../hooks/useMotion';
import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardEyebrow,
  MinimalCardTitle,
} from '../ui/minimal-card';

/* i18n `returnObjects` is typed loosely and a missing key returns the key
   string, so both helpers narrow defensively rather than trusting it. */
function asStrings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

interface Item {
  title: string;
  description?: string;
  /** A real interval or phase label the copy already carries. */
  meta?: string;
}

/* Pages disagree on field names for the same thing: `description`/`desc`
   for the body, `period`/`weeks` for an interval, and `phase` as either
   the title or the label depending on whether a `title` sits beside it. */
function asItems(value: unknown): Item[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((v) => {
    if (typeof v !== 'object' || v === null) return [];
    const o = v as Record<string, unknown>;
    const str = (k: string) => (typeof o[k] === 'string' ? (o[k] as string) : undefined);

    const title = str('title') ?? str('phase');
    if (!title) return [];

    return [
      {
        title,
        description: str('description') ?? str('desc'),
        meta: str('period') ?? str('weeks') ?? (str('title') ? str('phase') : undefined),
      },
    ];
  });
}

/* A picture, in the card geometry the rest of the site uses. `contain`
   is for diagrams, which carry their meaning in the whole frame and are
   ruined by a crop; everything else fills. */
export function Figure({
  media,
  className = '',
  aspect = 'aspect-4/3',
  priority = false,
  contain = false,
}: {
  media: Media;
  className?: string;
  aspect?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div className={`cia-figure ${aspect} ${contain ? 'cia-figure-contain' : ''} ${className}`}>
      {media.type === 'video' ? (
        <video
          src={media.src}
          poster={media.poster}
          preload={priority ? 'auto' : 'metadata'}
          autoPlay
          loop
          muted
          playsInline
          aria-label={media.ariaKey ? t(media.ariaKey) : undefined}
        />
      ) : (
        <img
          src={media.src}
          alt={media.altKey ? t(media.altKey) : ''}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
}

/* Section head, at the scale the Projects index uses for a term heading.
   The first pass set every one of these at display size, so a page had
   eight things all shouting at the same volume and no way to tell the
   page's title from its fourth subsection. */
function SectionHead({ titleKey, subtitleKey }: { titleKey?: string; subtitleKey?: string }) {
  const { t } = useTranslation();
  if (!titleKey && !subtitleKey) return null;

  return (
    <div className="mb-6 md:mb-8">
      {subtitleKey && <p className="cia-meta-accent mb-2.5">{t(subtitleKey)}</p>}
      {titleKey && <h2 className="cia-heading-section text-ink">{t(titleKey)}</h2>}
    </div>
  );
}

export function Body({
  keys,
  className = '',
  lead = false,
}: {
  keys: Para[];
  className?: string;
  lead?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <>
      {keys.map((para) => {
        const cls = `font-body leading-relaxed ${lead ? 'text-ink' : 'text-ink-muted'} ${className}`;

        if (typeof para === 'string') {
          return (
            <p key={para} className={cls}>
              {t(para)}
            </p>
          );
        }

        /* Fragments joined back into one sentence. A space between runs is
           right for every case here — the copy was split at word breaks. */
        return (
          <p key={para.runs.map((r) => r.key).join('|')} className={cls}>
            {para.runs.map((run, i) => (
              <Fragment key={run.key}>
                {i > 0 && ' '}
                <span className={run.live ? 'font-semibold text-accent-400' : undefined}>
                  {t(run.key)}
                </span>
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

/* Short values as chips. Light, on the raised surface the cards use. */
function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-rule bg-paper-raised px-3.5 py-1.5 font-body text-sm text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

interface Props {
  block: Block;
}

export default function ProjectBlock({ block }: Props) {
  const { t } = useTranslation();
  const m = useMotion();

  /* Emphasis is a soft tinted panel, not a change of ground. */
  const soft = block.tone === 'invert';
  const pace = block.pace
    ? { tight: 'cia-pace-tight', normal: 'cia-pace', open: 'cia-pace-open' }[block.pace]
    : 'cia-pace';

  const columnItems = (col: Column) =>
    col.items ??
    col.itemKeys?.map((k) => t(k)) ??
    asStrings(t(col.itemsKey ?? '', { returnObjects: true }));

  const head = (
    <SectionHead
      titleKey={'titleKey' in block ? block.titleKey : undefined}
      subtitleKey={'subtitleKey' in block ? block.subtitleKey : undefined}
    />
  );

  /* Sections do not animate on arrival. Every one of them used to carry
     the same viewport fade-up, which meant the page never held still
     while you read down it and the move told you nothing you couldn't
     already see. What survives on a project page is the cover and the
     figures — the places where motion is doing work. */
  const wrap = (children: ReactNode) => (
    <section id={block.id} className={pace}>
      <div className="cia-measure">
        {soft ? <div className="cia-panel-soft">{children}</div> : children}
      </div>
    </section>
  );

  switch (block.kind) {
    /* Prose beside a picture. `flip` alternates the reading direction so
       consecutive sections do not stack into one slab. */
    case 'split':
      return wrap(
        <>
          {head}
          {/* Top-aligned, not centred: a short paragraph centred against a
              16:9 picture floats in the middle of its column with a gap
              above it and no edge to line up with. */}
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div className={`space-y-4 ${block.flip ? 'md:order-2' : ''}`}>
              <Body keys={block.bodyKeys} />
            </div>
            {block.media && (
              <motion.div className={block.flip ? 'md:order-1' : ''} {...m.reveal}>
                {/* 16:9, not 4:3 — the media beside a section is almost
                    always a screen recording or a screenshot, and the
                    taller frame was cropping the sides off them. */}
                <Figure media={block.media} aspect="aspect-video" />
              </motion.div>
            )}
          </div>
        </>
      );

    /* The quiet section. One measured column, nothing beside it. */
    case 'prose':
      return wrap(
        <>
          {head}
          <div className="cia-measure-read space-y-4">
            <Body keys={block.bodyKeys} className="text-lg" lead />
          </div>
        </>
      );

    /* A callout. On a soft panel it needs no second container, so the
       body just sits in the measure. */
    case 'panel':
      return wrap(
        <>
          {head}
          <div className="cia-measure-read space-y-4">
            <Body keys={block.bodyKeys} />
          </div>
          {block.media && (
            <motion.div className="mt-8 max-w-3xl" {...m.reveal}>
              <Figure media={block.media} aspect="aspect-video" />
            </motion.div>
          )}
        </>
      );

    /* Parallel lists, one card each. */
    case 'columns': {
      const cols = block.cols ?? (block.columns.length >= 3 ? 3 : 2);
      return wrap(
        <>
          {head}
          <div className={`grid gap-6 ${cols === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {block.columns.map((col) => {
              const list = (
                <>
                  <p className="cia-meta-accent mb-3">{t(col.titleKey)}</p>
                  <ul className="space-y-2.5">
                    {columnItems(col).map((item) => (
                      <li key={item} className="font-body text-sm leading-relaxed text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              );
              return (
                <div key={col.titleKey}>
                  {/* On a soft panel the columns drop their own card: a
                      panel holding cards holding lists is three nested
                      containers saying one thing. */}
                  {soft ? (
                    list
                  ) : (
                    <MinimalCard marker className="h-full">
                      <MinimalCardContent>{list}</MinimalCardContent>
                    </MinimalCard>
                  )}
                </div>
              );
            })}
          </div>
          {block.bodyKeys && (
            <div className="cia-measure-read mt-6">
              <Body keys={block.bodyKeys} className="text-sm" />
            </div>
          )}
        </>
      );
    }

    /* A picture on its own. Wide, but still inside the measure and still
       carrying the card geometry — a full-bleed band belongs to a
       different, heavier site than this one. */
    case 'plate':
      return wrap(
        <>
          <motion.div {...m.reveal}>
            <Figure
              media={block.media}
              aspect="aspect-video"
              contain={block.figure}
              className="md:aspect-21/9"
            />
          </motion.div>
          {block.captionKey && (
            <p className="mt-3 font-body text-sm text-ink-muted">{t(block.captionKey)}</p>
          )}
        </>
      );

    case 'tags': {
      const items =
        block.items ??
        block.itemKeys?.map((k) => t(k)) ??
        (block.itemsKey ? asStrings(t(block.itemsKey, { returnObjects: true })) : []);
      return wrap(
        <>
          {block.titleKey && <p className="cia-eyebrow-rule cia-meta mb-4">{t(block.titleKey)}</p>}
          <Chips items={items} />
          {block.bodyKeys && (
            <div className="cia-measure-read mt-5">
              <Body keys={block.bodyKeys} className="text-sm" />
            </div>
          )}
        </>
      );
    }

    case 'list': {
      const items = asStrings(t(block.itemsKey, { returnObjects: true }));
      return wrap(
        <>
          {head}
          <div className="max-w-3xl">
            {block.bodyKeys && (
              <div className="mb-6 space-y-4">
                <Body keys={block.bodyKeys} />
              </div>
            )}
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="cia-mono mt-0.5 shrink-0 text-sm font-semibold text-accent-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body leading-relaxed text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }

    /* A sequence. Cards in order, each led by its step number or the real
       interval the copy already names. */
    case 'steps': {
      const items = asItems(t(block.itemsKey, { returnObjects: true }));
      const prefix = block.metaPrefixKey ? t(block.metaPrefixKey) : '';
      return wrap(
        <>
          {head}
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <li key={item.title}>
                <MinimalCard marker className="h-full">
                  <MinimalCardContent>
                    <MinimalCardEyebrow>
                      {item.meta ? `${prefix} ${item.meta}`.trim() : String(i + 1).padStart(2, '0')}
                    </MinimalCardEyebrow>
                    <MinimalCardTitle>{item.title}</MinimalCardTitle>
                    {item.description && (
                      <MinimalCardDescription>{item.description}</MinimalCardDescription>
                    )}
                  </MinimalCardContent>
                </MinimalCard>
              </li>
            ))}
          </ol>
        </>
      );
    }

    case 'cards': {
      const items = block.items
        ? block.items.map((i) => ({
            title: t(i.titleKey),
            description: i.descriptionKey ? t(i.descriptionKey) : undefined,
          }))
        : asItems(t(block.itemsKey ?? '', { returnObjects: true }));
      return wrap(
        <>
          {head}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.title}>
                <MinimalCard marker className="h-full">
                  <MinimalCardContent>
                    <MinimalCardTitle>{item.title}</MinimalCardTitle>
                    {item.description && (
                      <MinimalCardDescription>{item.description}</MinimalCardDescription>
                    )}
                  </MinimalCardContent>
                </MinimalCard>
              </div>
            ))}
          </div>
        </>
      );
    }

    /* Open positions. One card per seat: what it does, what it needs.
       Seats that list required skills need the room; bare ones tile three
       up so a set of three fills its row instead of orphaning one. */
    case 'roles': {
      const dense = block.roles.some((r) => r.skillsKey);
      return wrap(
        <>
          {head}
          <div className={`grid gap-5 sm:grid-cols-2 ${dense ? '' : 'lg:grid-cols-3'}`}>
            {block.roles.map((role) => (
              <div key={role.titleKey}>
                <MinimalCard marker className="h-full">
                  <MinimalCardContent>
                    {role.metaKey && <MinimalCardEyebrow>{t(role.metaKey)}</MinimalCardEyebrow>}
                    <MinimalCardTitle>{t(role.titleKey)}</MinimalCardTitle>
                    {role.descriptionKey && (
                      <MinimalCardDescription>{t(role.descriptionKey)}</MinimalCardDescription>
                    )}
                    {role.skillsKey && (
                      <div className="mt-4">
                        <Chips items={asStrings(t(role.skillsKey, { returnObjects: true }))} />
                      </div>
                    )}
                  </MinimalCardContent>
                </MinimalCard>
              </div>
            ))}
          </div>
        </>
      );
    }

    /* The page's one figure, set large in coral. */
    case 'stat':
      return wrap(
        <>
          {head}
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="cia-mono text-stat font-bold leading-none tracking-tight text-accent-500">
                {t(block.valueKey)}
              </p>
              <p className="cia-meta-accent mt-4">{t(block.labelKey)}</p>
              {block.noteKey && (
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {t(block.noteKey)}
                </p>
              )}
            </div>
            {block.bodyKeys && (
              <div className="space-y-4 md:col-span-7">
                <Body keys={block.bodyKeys} />
              </div>
            )}
          </div>
        </>
      );

    case 'links':
      return wrap(
        <>
          {head}
          <ul className="max-w-3xl space-y-2">
            {block.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 rounded-cut-sm border border-rule bg-paper-raised px-5 py-4 transition-colors hover:border-rule-strong sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 cia-focus-ring"
                >
                  <span className="font-heading font-semibold text-ink transition-colors group-hover:text-accent-400">
                    {t(link.labelKey)}
                  </span>
                  <span className="cia-mono break-all text-xs text-ink-muted">
                    {link.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      );

    /* The roster. One card per person, so every contributor gets the same
       weight — which is the point of printing the names at all. */
    case 'team':
      return wrap(
        <>
          {head}
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {block.members.map((member) => (
              <li key={member.title}>
                <MinimalCard marker className="h-full">
                  <MinimalCardContent>
                    <MinimalCardTitle className="text-lg">{member.title}</MinimalCardTitle>
                    {member.descriptionKey && (
                      <MinimalCardDescription>{t(member.descriptionKey)}</MinimalCardDescription>
                    )}
                  </MinimalCardContent>
                </MinimalCard>
              </li>
            ))}
          </ul>
        </>
      );
  }
}
