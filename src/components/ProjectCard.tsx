import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/projects';
import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardEyebrow,
  MinimalCardImage,
  MinimalCardTitle,
} from './ui/minimal-card';

interface Props {
  project: Project;
}

/* The project unit for grid contexts (Home's teaser, the Projects index):
   a static plate, one image, no hover-swapped preview pane — the same
   MinimalCard system Gallery and Management already use, so every index
   on the site reads as one family of cards. */
function ProjectCard({ project }: Props) {
  const { t } = useTranslation();

  return (
    <Link to={project.link} className="group block h-full cia-focus-ring rounded-cut">
      <MinimalCard interactive marker className="flex h-full flex-col">
        {project.image ? (
          <MinimalCardImage
            src={project.image}
            alt=""
            frameClassName="aspect-4/3"
            className={`group-hover:scale-103 ${project.status === 'shipped' ? 'saturate-35' : ''}`}
          />
        ) : (
          <div className="cia-card-media flex aspect-4/3 items-center justify-center">
            <span className="cia-index">{t('projects.noPreview')}</span>
          </div>
        )}

        <MinimalCardContent className="flex flex-1 flex-col">
          <MinimalCardEyebrow className="mb-0">
            {t(`projects.categories.${project.category}`)}
          </MinimalCardEyebrow>

          <MinimalCardTitle className="mt-2 flex items-center gap-1.5">
            {t(`home.projects.${project.key}.title`, project.defaultTitle)}
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-primary-500 transition-colors group-hover:text-accent-400"
              aria-hidden="true"
            />
          </MinimalCardTitle>

          <MinimalCardDescription className="line-clamp-3 flex-1">
            {t(`home.projects.${project.key}.description`, project.defaultDescription)}
          </MinimalCardDescription>
        </MinimalCardContent>
      </MinimalCard>
    </Link>
  );
}

export default ProjectCard;
