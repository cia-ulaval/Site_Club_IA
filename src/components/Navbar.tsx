import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/CIA_LOGO.png" alt="CIA Logo" width={35} height={35} />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="flex space-x-8 relative hidden md:flex">
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
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-rose-500/60 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                } py-2`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                } py-2`
              }
              onClick={toggleMenu}
            >
              Management
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                } py-2`
              }
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                } py-2`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
