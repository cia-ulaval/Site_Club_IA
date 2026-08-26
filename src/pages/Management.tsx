import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MemberModal, { type TeamMember } from '../components/MemberModal';
import MemberShiftCard from '../components/MemberShiftCard';
import Seo from '../components/Seo';
import { alumni, LEADERSHIP_LD_NAMES, teamSections, type TeamMemberSource } from '../data/team';
import { useMotion } from '../hooks/useMotion';
import { ORGANIZATION_LD, SITE } from '../lib/site';

function Management() {
  const { t } = useTranslation();
  const m = useMotion();
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const resolve = (member: TeamMemberSource): TeamMember => ({
    name: member.name,
    role: member.roleKey ? t(member.roleKey) : (member.role ?? ''),
    mission: member.missionKey ? t(member.missionKey) : undefined,
    additionalDetails: member.aboutKey ? t(member.aboutKey) : undefined,
    imgSrc: member.imgSrc,
    linkedIn: member.linkedIn,
    github: member.github,
    portfolio: member.portfolio,
  });

  const sections = teamSections.map((section) => ({
    ...section,
    people: section.members.map(resolve),
  }));

  const leadershipLd = useMemo(() => {
    const byName = new Map(
      teamSections.flatMap((s) => s.members).map((member) => [member.name, member])
    );
    return LEADERSHIP_LD_NAMES.flatMap((name) => {
      const member = byName.get(name);
      if (!member) return [];
      return [
        {
          '@type': 'Person',
          name: member.name,
          jobTitle: member.roleKey ? t(member.roleKey) : (member.role ?? ''),
          ...(member.linkedIn ? { sameAs: member.linkedIn } : {}),
        },
      ];
    });
  }, [t]);

  return (
    <>
      <Seo
        title={t('management.pageTitle')}
        description={t('management.pageDescription')}
        keywords={t('management.pageKeywords')}
        path="/management"
        socialTitle={t('management.ogTitle')}
        socialDescription={t('management.ogDescription')}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: t('management.structuredData.name'),
          url: `${SITE}/management`,
          description: t('management.structuredData.description'),
          mainEntity: { ...ORGANIZATION_LD, member: leadershipLd },
        }}
      />

      <AnimatePresence>
        {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <header className="mx-auto w-full max-w-7xl border-b border-steel/25 px-4 pb-16 pt-16 md:px-6 md:pb-20 md:pt-24">
        <motion.h1 className="cia-display text-display" {...m.write}>
          {t('management.heroTitle')}
        </motion.h1>
      </header>

      <div className="pb-16">
        {sections.map(({ titleKey, emphasis, people }) => (
          <section key={titleKey} className="mx-auto max-w-7xl px-4 pt-14 md:px-6">
            <h2
              className={`cia-display pb-5 ${emphasis ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}
            >
              {t(titleKey)}
            </h2>
            <div className="grid grid-cols-2 gap-3 py-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {people.map((member) => (
                <MemberShiftCard
                  key={member.name}
                  member={member}
                  onSelect={setSelected}
                  viewProfileLabel={t('management.viewProfile')}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="mx-auto mt-6 max-w-7xl border-t border-steel/25 px-4 pt-16 md:px-6">
          <h2 className="cia-display pb-6 text-2xl sm:text-3xl">
            {t('management.sections.alumni')}
          </h2>
          <ul className="max-w-2xl">
            {alumni.map((person, i) => (
              <li
                key={person.name}
                className={`flex items-baseline justify-between gap-6 py-3 ${i > 0 ? 'cia-rule' : ''}`}
              >
                <span className="font-heading text-lg font-semibold text-primary-300">
                  {person.name}
                </span>
                <span className="cia-meta shrink-0">{t(person.roleKey)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Management;
