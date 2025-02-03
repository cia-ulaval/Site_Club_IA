import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/media/CIA_LOGO.png"
              alt="CIA Logo"
              width={35}
              height={35}
            />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="flex space-x-8">
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
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
