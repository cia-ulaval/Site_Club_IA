import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-base border-t theme-border-soft py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Club info */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-primary-400 to-primary-300 bg-clip-text text-transparent mb-3 tracking-tight">
              {t('footer.clubName')}
            </h3>
            <p className="text-primary-300 text-sm leading-relaxed mb-4">{t('footer.slogan')}</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full"></div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold theme-text-accent mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ciaulaval/"
                className="group relative cursor-pointer p-2.5 rounded-full !bg-accent-500/10 hover:!bg-accent-300/20 !border !border-accent-500/60 hover:!border-accent-300/80 transition-all duration-300 hover:scale-105 cia-focus-ring"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-accent-300 group-hover:text-accent-500 transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/cia-ulaval/"
                className="group relative cursor-pointer p-2.5 rounded-full !bg-accent-500/10 hover:!bg-accent-300/20 !border !border-accent-500/60 hover:!border-accent-300/80 transition-all duration-300 hover:scale-105 cia-focus-ring"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-accent-300 group-hover:text-accent-500 transition-colors duration-300" />
              </a>

              <a
                href="https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                className="group relative cursor-pointer p-2.5 rounded-full !bg-accent-500/10 hover:!bg-accent-300/20 !border !border-accent-500/60 hover:!border-accent-300/80 transition-all duration-300 hover:scale-105 cia-focus-ring"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-accent-300 group-hover:text-accent-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t theme-border-soft">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div className="flex flex-col space-y-1">
              <p className="text-neutral-500 text-xs text-center md:text-left">
                {t('footer.copyright')}
              </p>
              <a
                href="https://github.com/cia-ulaval/Site_Club_IA"
                className="text-neutral-500 theme-hover-text-accent text-xs text-center md:text-left transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.openSource')}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-1.5">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
