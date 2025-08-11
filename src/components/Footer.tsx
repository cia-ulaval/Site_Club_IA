import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-t from-red-950 via-red-900/10 to-black border-t border-red-500/30 py-12 mt-20 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-red-500/25 to-rose-500/25 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 right-16 w-12 h-12 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Club info */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-red-300 bg-clip-text text-transparent mb-3 tracking-tight">
              {t("footer.clubName")}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.slogan")}
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full"></div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              {t("footer.connect")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ciaulaval/"
                className="group relative p-2 rounded-full bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-red-300 transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/cia-ulaval/"
                className="group relative p-2 rounded-full bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-red-300 transition-colors duration-300" />
              </a>

              <a
                href="https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                className="group relative p-2 rounded-full bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-red-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div className="flex flex-col space-y-1">
              <p className="text-gray-500 text-xs text-center md:text-left">
                {t("footer.copyright")}
              </p>
              <a
                href="https://github.com/cia-ulaval/Site_Club_IA"
                className="text-gray-500 hover:text-red-400 text-xs text-center md:text-left transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.openSource")}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-1.5">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
