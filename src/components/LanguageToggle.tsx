import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="text-gray-600 dark:text-gray-300 hover:text-rose-500/60">
      {i18n.language === "en" ? "Français" : "English"}
    </button>
  );
}
