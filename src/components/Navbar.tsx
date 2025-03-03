import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/img/CIA_LOGO.png" alt="CIA Logo" width={35} height={35} />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="flex space-x-8 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                `text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Management
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Gallery
            </NavLink>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-300 hover:text-rose-500/60 transition-colors"
              >
                Projects
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black/80 border border-red-500/20 rounded-lg shadow-lg">
                  <NavLink
                    to="/flappyeeg"
                    className="block px-4 py-2 text-gray-300 hover:bg-red-500/20"
                  >
                    FlappyEEG
                  </NavLink>
                  <NavLink
                    to="/mangaai"
                    className="block px-4 py-2 text-gray-300 hover:bg-red-500/20"
                  >
                    Manga AI Tranlator
                  </NavLink>
                  <NavLink
                    to="/f1tenth"
                    className="block px-4 py-2 text-gray-300 hover:bg-red-500/20"
                  >
                    F1 Tenth
                  </NavLink>
                  <NavLink
                    to="/lenia"
                    className="block px-4 py-2 text-gray-300 hover:bg-red-500/20"
                  >
                    LENIA
                  </NavLink>
                  <NavLink
                    to="/decisiontree"
                    className="block px-4 py-2 text-gray-300 hover:bg-red-500/20"
                  >
                    Decision Tree
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
