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

  return (
    <nav className="sticky top-0 z-50 theme-glass-nav">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="flex items-center space-x-2 min-w-[44px] min-h-[44px] cia-focus-ring rounded-md"
          >
            <img src="/banner/CIA_LOGO.webp" alt="CIA Logo" width={35} height={35} />
            <span className="text-xl font-bold theme-text-gradient">CIA</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-accent-500 hover:text-accent-300 transition-colors rounded-md px-1 cia-focus-ring ${isActive ? 'text-accent-300 font-semibold' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join-us"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cia-focus-ring ${
                  isActive
                    ? 'bg-accent-400 text-base-inverse'
                    : 'bg-accent-500 hover:bg-accent-400 text-base-inverse'
                }`
              }
            >
              {t('navbar.joinus')}
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="md:hidden min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center theme-text-secondary hover:text-accent-300 transition-colors rounded-md cia-focus-ring"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block text-accent-500 hover:text-accent-300 transition-colors rounded-md px-2 cia-focus-ring ${isActive ? 'text-accent-300 font-semibold' : ''} py-2`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join-us"
              className={({ isActive }) =>
                `block mt-2 px-4 py-2 rounded-full text-sm font-semibold text-center transition-all duration-200 cia-focus-ring ${
                  isActive
                    ? 'bg-accent-400 text-base-inverse'
                    : 'bg-accent-500 hover:bg-accent-400 text-base-inverse'
                }`
              }
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
