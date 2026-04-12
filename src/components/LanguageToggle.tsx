import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-full px-3 py-1.5 text-sm font-medium !border !border-primary-500/60 text-primary-300 bg-primary-500/10 hover:bg-primary-500/20 hover:text-primary-200 transition-colors duration-300"
    >
      {i18n.language === "en" ? "Français" : "English"}
    </button>
  );
}
