import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { projects, SEMESTERS } from '../data/projects';
import { useMotion } from '../hooks/useMotion';
import { ORGANIZATION_LD, SITE } from '../lib/site';

function Projects() {
  const { t } = useTranslation();
  const m = useMotion();

  return (
    <>
      {/* Named projects are pulled from the live index rather than typed in:
          the previous copy still advertised MangaAI, Lenia and Decision Tree,
          none of which have had a page on the site for some time. */}
      <Seo
        title="Projets IA - Club Intelligence Artificielle Université Laval | CIA ULaval"
        description={`Découvrez les projets innovants du Club IA ULaval : ${projects
          .slice(0, 5)
          .map((p) => p.defaultTitle)
          .join(', ')} et plus. Projets d'intelligence artificielle et machine learning.`}
        keywords={`projets IA, ${projects
          .map((p) => p.defaultTitle)
          .join(', ')}, projets étudiants, machine learning, deep learning, Club IA ULaval`}
        path="/projects"
        image="/project/FlappyBrain.webp"
        socialTitle="Projets IA - Club Intelligence Artificielle Université Laval"
        socialDescription="Découvrez nos projets innovants d'intelligence artificielle et machine learning."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projets IA - Club Intelligence Artificielle Université Laval',
          url: `${SITE}/projects`,
          description: "Collection des projets d'intelligence artificielle du Club IA ULaval",
          mainEntity: ORGANIZATION_LD,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-24">
        <header className="cia-rule-b pb-10 md:pb-14">
          <motion.h1 className="cia-display text-[clamp(3rem,11vw,8.5rem)]" {...m.write}>
            {t('home.projects.title', 'Projects')}
          </motion.h1>
          <motion.p
            className="font-body text-primary-400 text-base md:text-lg max-w-xl mt-8"
            {...m.rise(0.08)}
          >
            {t('home.projectsPage.subtitle')}
          </motion.p>
        </header>

        {/* One section per term. Only one exists today, but a project's
            `semester` is the single thing that needs editing to move it —
            no layout changes required as more terms are added. */}
        {SEMESTERS.map((semester) => {
          const inTerm = projects.filter((project) => project.semester === semester);
          if (inTerm.length === 0) return null;

          return (
            <section key={semester} className="pt-14 first:pt-12">
              <h2 className="cia-heading-section pb-6">{t(`projects.semesters.${semester}`)}</h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {inTerm.map((project) => (
                  <div key={project.key}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
