import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold gradient-text">
              Club IA de l'université Laval
            </span>
          </NavLink>
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-400 transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-400 transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              FlappyEEG
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
