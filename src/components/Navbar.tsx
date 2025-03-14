import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import LanguageToggle from "./LanguageToggle";

function Navbar() {
  const { t } = useTranslation(); // Initialize the translation hook
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, changeTheme] = useState(false);
  const [rendered, setRendered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newDarkMode: boolean) => {
    changeTheme(newDarkMode);

    document.documentElement.classList.toggle("dark", newDarkMode);
    document.documentElement.setAttribute("data-bs-theme", newDarkMode ? "dark" : "light");
    localStorage.theme = newDarkMode ? "dark" : "light";
  };

  if (!rendered) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    handleThemeChange(isDark);
    setRendered(true);
  }

  const navLinks = [
    { to: "/", label: t("navbar.home") },
    { to: "/projects", label: t("navbar.projects") },
    { to: "/management", label: t("navbar.management") },
    { to: "/gallery", label: t("navbar.gallery") },
    { to: "/join-us", label: t("navbar.joinus") },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/banner/CIA_LOGO.webp"
              alt="CIA Logo"
              width={35}
              height={35}
            />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-rose-500/60 transition-colors ${
                    isActive ? "text-red-400" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-rose-500/60 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                    isActive ? "text-red-400" : ""
                  } py-2`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;