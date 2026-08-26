import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { to: '/', label: t('navbar.home') },
    { to: '/projects', label: t('navbar.projects') },
    { to: '/management', label: t('navbar.management') },
    { to: '/gallery', label: t('navbar.gallery') },
    { to: '/collaboration', label: t('navbar.collaboration') },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `cia-mono text-xs uppercase tracking-[0.14em] transition-colors cia-focus-ring rounded-sm px-1 ${
      isActive ? 'text-accent-400' : 'text-primary-400 hover:text-primary-300'
    }`;

  return (
    <nav className="sticky top-0 z-50 cia-nav">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="flex items-center gap-3 min-h-[44px] cia-focus-ring rounded-sm"
            aria-label="CIA ULaval"
          >
            <img
              src="/banner/cia-logo.webp"
              alt=""
              width={38}
              height={38}
              loading="eager"
              decoding="async"
            />
            <span className="flex items-baseline gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-primary-300">
                CIA
              </span>
              <span className="cia-index hidden sm:inline">ULAVAL</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <NavLink
              to="/join-us"
              className="hidden h-9 items-center bg-accent-400 px-4 cia-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent-300 md:inline-flex cia-focus-ring"
            >
              {t('navbar.joinus')}
            </NavLink>
            <button
              onClick={toggleMenu}
              className="md:hidden min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center text-primary-300 hover:text-accent-400 transition-colors cia-focus-ring"
              aria-label={t('common.toggleNavigation')}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="pb-4 pt-2 md:hidden cia-rule" aria-label={t('common.mobileNavigation')}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block py-3 cia-mono text-xs uppercase tracking-[0.14em] transition-colors cia-focus-ring ${
                    isActive ? 'text-accent-400' : 'text-primary-400 hover:text-primary-300'
                  }`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join-us"
              className="mt-3 flex h-11 items-center justify-center bg-accent-400 cia-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent-300 cia-focus-ring"
              onClick={toggleMenu}
            >
              {t('navbar.joinus')}
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
