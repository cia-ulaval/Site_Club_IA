import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/management", label: "Management" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/banner/CIA_LOGO.png"
              alt="CIA Logo"
              width={35}
              height={35}
            />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="flex space-x-8 relative hidden md:flex">
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
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-rose-500/60 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
