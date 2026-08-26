import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Edition, Media, Para } from '../../data/projectPages';
import type { Project } from '../../data/projects';
import { useMotion } from '../../hooks/useMotion';
import { Body, Figure } from './blocks';

interface Props {
  edition: Edition;
  title: string;
  bodyKeys: Para[];
  media?: Media;
  project?: Project;
}

function Facts({ project }: { project?: Project }) {
  const { t } = useTranslation();
  if (!project) return null;

  const rows = [
    {
      label: t('projects.field.status', 'État'),
      value: t(`projects.status.${project.status}`),
      live: project.status === 'active',
    },
    {
      label: t('projects.field.domain', 'Domaine'),
      value: t(`projects.categories.${project.category}`),
    },
    { label: t('projects.term', 'Session'), value: t(`projects.semesters.${project.semester}`) },
    ...(project.partner
      ? [{ label: t('projects.field.partner', 'Partenaire'), value: project.partner }]
      : []),
  ];

  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-5 sm:gap-x-14">
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="cia-meta">{row.label}</dt>
          <dd
            className={`mt-1 font-heading text-lg font-semibold ${
              row.live ? 'text-accent-500' : 'text-ink'
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProjectCover({ edition, title, bodyKeys, media, project }: Props) {
  const m = useMotion();

  const heading = (
    <motion.h1 className="cia-display text-display-sm" {...m.write}>
      {title}
    </motion.h1>
  );

  const lede = (
    <motion.div className="cia-measure-read space-y-4" {...m.rise(0.1)}>
      <Body keys={bodyKeys} className="text-base md:text-lg" lead />
    </motion.div>
  );

  const facts = (
    <motion.div {...m.rise(0.18)}>
      <Facts project={project} />
    </motion.div>
  );

  const intro = (
    <div className="mt-7 grid gap-8 md:mt-9 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-7">{lede}</div>
      <div className="md:col-span-5 md:pt-1">{facts}</div>
    </div>
  );

  if (edition === 'field' && media) {
    return (
      <header className="cia-measure cia-rule-b pb-12 pt-10 md:pb-16 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            {heading}
            <div className="mt-7 md:mt-9">{lede}</div>
            <div className="mt-8 md:mt-10">{facts}</div>
          </div>
          <motion.div className="md:col-span-5" {...m.rise(0.24)}>
            <Figure media={media} priority aspect="aspect-4/3" />
          </motion.div>
        </div>
      </header>
    );
  }

  if (edition === 'readout' || !media) {
    return (
      <header className="cia-measure cia-rule-b pb-12 pt-10 md:pb-16 md:pt-16">
        {heading}
        {intro}
      </header>
    );
  }

  return (
    <header className="cia-measure pb-2 pt-10 md:pt-16">
      {heading}
      {intro}
      <motion.div className="mt-10 md:mt-14" {...m.rise(0.24)}>
        <Figure
          media={media}
          priority
          aspect={edition === 'plate' ? 'aspect-video md:aspect-21/9' : 'aspect-video'}
        />
      </motion.div>
    </header>
  );
}
