import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


const Navbar = ({ isAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav tw="bg-gray-900 h-16 flex items-center justify-between px-4">
      <div tw="flex items-center">
        <Link to={handleSubmit}>
          <img
            src="/logo.png"
            alt="Netflix logo"
            tw="h-8 w-auto mr-4"
          />
        </Link>
        {isAuthenticated && (
          <ul tw="flex items-center space-x-4">
            <li>
              <Link
                to="/Home"
                tw="text-white hover:text-red-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tv-shows"
                tw="text-white hover:text-red-600 transition-colors"
              >
                TV Shows
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                tw="text-white hover:text-red-600 transition-colors"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/new-and-popular"
                tw="text-white hover:text-red-600 transition-colors"
              >
                New & Popular
              </Link>
            </li>
            <li>
              <Link
                to="/my-list"
                tw="text-white hover:text-red-600 transition-colors"
              >
                My List
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div tw="flex items-center">
        {isAuthenticated && (
          <>
            <button
              onClick={toggleSearch}
              tw="text-white hover:text-red-600 transition-colors mr-4"
            >
              <FaSearch tw="h-6 w-6" />
            </button>
            <Link
              to="/profile"
              tw="text-white hover:text-red-600 transition-colors mr-4"
            >
              <MdAccountCircle tw="h-6 w-6" />
            </Link>
          </>
        )}
        <button
          onClick={toggleMenu}
          tw="text-white hover:text-red-600 transition-colors"
        >
          {showMenu ? (
            <FaTimes tw="h-6 w-6" />
          ) : (
            <FaBars tw="h-6 w-6" />
          )}
        </button>
      </div>
      {showMenu && (
        <div tw="bg-gray-800 w-full h-screen absolute top-16 right-0 z-10 p-4">
          {isAuthenticated ? (
            <ul tw="flex flex-col items-start space-y-4">
              <li>
                <Link
                  to="/home"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tv-shows"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/new-and-popular"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  New & Popular
                </Link>
              </li>
              <li>
                <Link
                  to="/my-list"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  My List
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul tw="flex flex-col items-start space-y-4">
              <li>
                <Link
                  to="/login"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  tw="text-white hover:text-red-600 transition-colors"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
      {showSearch && (
        <div tw="bg-gray-800 w-full h-screen absolute top-16 right-0 z-10 p-4">
          <input
            type="text"
            placeholder="Search for a title..."
            tw="bg-gray-900 w-full h-12 px-4 text-white"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
