import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isEnglish = (i18n.resolvedLanguage ?? i18n.language).startsWith('en');

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="min-h-11 rounded-full border border-steel/30 bg-paper-raised px-3 text-sm font-medium text-steel transition-colors hover:border-steel hover:bg-steel-soft cia-focus-ring"
    >
      {isEnglish ? 'Français' : 'English'}
    </button>
  );
}
