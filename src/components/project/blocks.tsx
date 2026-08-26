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

function asStrings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

interface Item {
  title: string;
  description?: string;
  meta?: string;
}

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

  const wrap = (children: ReactNode) => (
    <section id={block.id} className={pace}>
      <div className="cia-measure">
        {soft ? <div className="cia-panel-soft">{children}</div> : children}
      </div>
    </section>
  );

  switch (block.kind) {
    case 'split':
      return wrap(
        <>
          {head}
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div className={`space-y-4 ${block.flip ? 'md:order-2' : ''}`}>
              <Body keys={block.bodyKeys} />
            </div>
            {block.media && (
              <motion.div className={block.flip ? 'md:order-1' : ''} {...m.reveal}>
                <Figure media={block.media} aspect="aspect-video" />
              </motion.div>
            )}
          </div>
        </>
      );

    case 'prose':
      return wrap(
        <>
          {head}
          <div className="cia-measure-read space-y-4">
            <Body keys={block.bodyKeys} className="text-lg" lead />
          </div>
        </>
      );

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
