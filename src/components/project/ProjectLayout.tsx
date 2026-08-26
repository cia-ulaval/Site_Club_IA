import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { ProjectPageSpec } from '../../data/projectPages';
import { projects } from '../../data/projects';
import { ORG_NAME, SITE } from '../../lib/site';
import DiscordCTA from '../DiscordCTA';
import Seo from '../Seo';
import ProjectBlock from './blocks';
import ProjectCover from './ProjectCover';

interface Props {
  spec: ProjectPageSpec;
}

/* One shell for every project page, inside the same measure as the rest
   of the site. A page's identity comes from its edition — how its
   picture is used — and from the blocks it composes, not from a
   different layout language per project. */
export default function ProjectLayout({ spec }: Props) {
  const { t } = useTranslation();

  const project = projects.find((p) => p.key === spec.key);

  const title = spec.titleKey ? t(spec.titleKey) : (project?.defaultTitle ?? '');
  const seoTitle = spec.seo.titleKey ? t(spec.seo.titleKey) : (spec.seo.title ?? title);
  const seoDescription = spec.seo.descriptionKey
    ? t(spec.seo.descriptionKey)
    : (spec.seo.description ??
      (project ? t(`home.projects.${project.key}.description`, project.defaultDescription) : ''));
  /* `||`, not `??`: a project with no picture carries `image: ''`, and an
     empty string would otherwise pass through as a valid og:image. */
  const seoImage = spec.seo.image || project?.image || '/banner/cia-logo.webp';
  const url = `${SITE}${spec.seo.path}`;

  return (
    <>
      <Seo
        title={`${seoTitle} | CIA ULaval`}
        description={seoDescription}
        path={spec.seo.path}
        image={seoImage}
        socialTitle={seoTitle}
        jsonLd={
          spec.seo.jsonLd ?? {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: seoTitle,
            url,
            description: seoDescription,
            image: `${SITE}${seoImage}`,
            ...(project?.github ? { codeRepository: project.github } : {}),
            author: { '@type': 'Organization', name: ORG_NAME, url: SITE },
          }
        }
      />

      <article className="pb-20 md:pb-28">
        <div className="cia-measure pt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 cia-mono text-xs uppercase tracking-eyebrow text-ink-muted transition-colors hover:text-accent-500 cia-focus-ring"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('common.backToProjects')}
          </Link>
        </div>

        <ProjectCover
          edition={spec.edition}
          title={title}
          bodyKeys={spec.hero.bodyKeys}
          media={spec.hero.media}
          project={project}
        />

        {spec.blocks.map((block, i) => (
          <ProjectBlock key={block.id ?? `${block.kind}-${i}`} block={block} />
        ))}

        {project?.github && (
          <div className="cia-measure cia-pace">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-cut-sm border border-rule bg-paper-raised px-5 py-3.5 font-body text-sm text-ink transition-colors hover:border-rule-strong hover:text-accent-500 cia-focus-ring"
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="cia-mono break-all text-xs">
                {project.github.replace('https://github.com/', '')}
              </span>
            </a>
          </div>
        )}

        {spec.cta && (
          <div className="cia-measure cia-pace">
            <DiscordCTA label={t('joinus.discordButton')}>
              {spec.cta.bodyKeys.map((k) => (
                <span key={k}>
                  {t(k)}
                  <br />
                </span>
              ))}
              {spec.cta.emphasisKey && (
                <span className="font-bold text-accent-500">{t(spec.cta.emphasisKey)}</span>
              )}
            </DiscordCTA>
          </div>
        )}
      </article>
    </>
  );
}
