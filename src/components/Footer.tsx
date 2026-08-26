import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../lib/site';

const socials = [
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIAL_LINKS.github, label: 'GitHub', Icon: Github },
  { href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: Facebook },
];

interface FooterProps {
  onOpenPrivacyChoices: () => void;
}

function Footer({ onOpenPrivacyChoices }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="cia-footer mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-heading text-xl font-bold tracking-tight text-paper">
              {t('footer.clubName')}
            </h2>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-paper/90">
              {t('footer.slogan')}
            </p>
          </div>

          <div className="md:col-span-6 lg:col-start-9 lg:col-span-4">
            <p className="cia-meta mb-5 !text-paper/90">{t('footer.connect')}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cia-mono text-xs uppercase tracking-eyebrow text-paper/80 hover:text-paper transition-colors cia-focus-ring"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-x-8 gap-y-3 border-t border-paper/20 pt-5 sm:flex-row sm:justify-between">
          <p className="cia-index !text-paper/85">
            © {new Date().getFullYear()} {t('footer.clubShort', 'CIA ULaval')}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link
              to="/privacy"
              className="cia-index !text-paper/85 transition-colors hover:!text-paper cia-focus-ring"
            >
              {t('footer.privacy')}
            </Link>
            <button
              type="button"
              onClick={onOpenPrivacyChoices}
              className="cia-index !text-paper/85 transition-colors hover:!text-paper cia-focus-ring"
            >
              {t('footer.privacyChoices')}
            </button>
            {/* `noopener` without `noreferrer` on purpose: it closes the
                reverse-tabnabbing hole just as well, while still sending the
                Referer so evoweb can see referrals from this site. Link
                equity is unaffected either way — only `nofollow` would
                change that. */}
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              href="https://evoweb.ca"
              target="_blank"
              rel="noopener"
              className="cia-index !text-paper/85 transition-colors hover:!text-paper cia-focus-ring"
            >
              {t('footer.madeBy', 'Made by')} evoweb ↗
            </a>
            <a
              href="https://github.com/cia-ulaval/Site_Club_IA"
              target="_blank"
              rel="noopener noreferrer"
              className="cia-index !text-paper/85 transition-colors hover:!text-paper cia-focus-ring"
            >
              {t('footer.openSource')} ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
