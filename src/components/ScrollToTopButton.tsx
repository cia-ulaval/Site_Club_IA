import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { scrollBehavior } from '../hooks/useMotion';

function ScrollToTopButton() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: scrollBehavior() });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-40 grid min-h-11 min-w-11 place-items-center rounded-full border border-steel/30 bg-steel p-3 text-paper shadow-md transition-all duration-quick hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label={t('common.scrollToTop')}
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}

export default ScrollToTopButton;
