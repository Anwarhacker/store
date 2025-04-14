// src/components/Navbar.jsx
// Update imports
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <nav className="h-15 flex items-center justify-between px-4 py-10 text-white font-bold absolute top-0 left-0 w-full bg-opacity-90 bg-white/10">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <div className={`
        lg:flex lg:items-center lg:space-x-6
        absolute lg:relative
        top-full left-0
        w-full lg:w-auto
        bg-gray-900 lg:bg-transparent
        py-4 lg:py-0
        px-4 lg:px-0
        space-y-4 lg:space-y-0 z-100
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'flex flex-col' : 'hidden'}
      `}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors block ${
              isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors block ${
              isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/brands"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors block ${
              isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Brands
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors block ${
              isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors block ${
              isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Contact us
        </NavLink>
      </div>

      {/* Auth Links */}
      <div className={`
        lg:flex lg:items-center lg:space-x-6
        absolute lg:relative
        top-full lg:top-auto
        right-0
        bg-gray-900 lg:bg-transparent
        py-4 lg:py-0
        px-4 lg:px-0
        space-y-4 lg:space-y-0
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'flex flex-col' : 'hidden'}
      `}>
        {user ? (
          <>
            {user.role === "admin" && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-colors block ${
                    isActive ? "bg-green-600 text-white" : "hover:bg-red-500"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </NavLink>
            )}
            {user.role === "user" && (
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-colors ${
                    isActive ? "bg-green-600 text-white" : "hover:bg-red-500"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                User Dashboard
              </NavLink>
            )}
            <button
              className="px-4 py-2 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition-colors w-full lg:w-auto text-left"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-2 rounded transition-colors block ${
                isActive ? "bg-red-600 text-white" : "hover:bg-red-500"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;