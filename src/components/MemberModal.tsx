import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Github, Globe, Linkedin, User, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDialog } from '../hooks/useDialog';
import { useMotion } from '../hooks/useMotion';

export interface TeamMember {
  name: string;
  role: string;
  mission?: string;
  imgSrc?: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  additionalDetails?: string;
}

interface Props {
  member: TeamMember;
  onClose: () => void;
}

/* A labelled run in the profile column. Every field on the card is the same
   shape — a mono caption over its value — so it is one component rather than
   the four hand-repeated copies this file used to carry. */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <span className="text-accent-300 text-sm font-medium uppercase tracking-wider">{label}</span>
      {children}
    </div>
  );
}

const PROFILE_LINKS = [
  { key: 'linkedIn', label: 'LinkedIn', Icon: Linkedin, className: 'cia-btn-primary' },
  { key: 'github', label: 'GitHub', Icon: Github, className: 'cia-btn-accent' },
  { key: 'portfolio', label: 'Portfolio', Icon: Globe, className: 'cia-btn-primary' },
] as const;

export default function MemberModal({ member, onClose }: Props) {
  const { t } = useTranslation();
  const m = useMotion();
  const { containerRef, initialFocusRef } = useDialog(onClose);

  const links = PROFILE_LINKS.filter((link) => member[link.key]);
  const hasContent = member.mission || member.additionalDetails || links.length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-name"
      {...m.overlay}
      onClick={onClose}
    >
      <motion.div
        ref={containerRef}
        className="cia-modal flex max-h-dialog w-full max-w-4xl flex-col overflow-hidden rounded-cut shadow-2xl md:max-h-dialog-md md:flex-row"
        {...m.panel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 w-full flex-shrink-0 bg-steel-soft md:h-auto md:w-1/3">
          {member.imgSrc ? (
            <img
              src={member.imgSrc}
              alt={member.name}
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <User className="h-20 w-20 text-steel" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="relative w-full overflow-y-auto p-5 sm:p-7 md:w-2/3 md:p-8">
          <button
            ref={initialFocusRef}
            onClick={onClose}
            type="button"
            className="absolute right-4 top-4 grid min-h-11 min-w-11 place-items-center rounded border border-steel/25 bg-paper-raised text-ink transition-colors hover:bg-steel-soft cia-focus-ring"
            aria-label={t('common.close')}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="space-y-6 pr-8">
            <Field label={t('management.modal.name')}>
              <h2 id="member-modal-name" className="mt-1 pr-12 text-3xl font-bold text-ink">
                {member.name}
              </h2>
            </Field>

            <Field label={t('management.modal.role')}>
              <p className="mt-1 text-xl text-primary-300">{member.role}</p>
            </Field>

            {member.mission && (
              <Field label={t('management.modal.mission')}>
                <p className="mt-1 leading-relaxed text-ink-muted">{member.mission}</p>
              </Field>
            )}

            {member.additionalDetails && (
              <Field label={t('management.modal.aboutMe')}>
                <p className="mt-1 leading-relaxed text-ink-muted">{member.additionalDetails}</p>
              </Field>
            )}

            {links.length > 0 && (
              <Field label={t('management.modal.connect')}>
                <div className="mt-3 flex flex-wrap gap-3">
                  {links.map(({ key, label, Icon, className }) => (
                    <a
                      key={key}
                      href={member[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${className} cia-btn-sm`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </Field>
            )}

            {!hasContent && (
              <p className="text-ink-muted mt-8 italic">{t('management.modal.noDetails')}</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
