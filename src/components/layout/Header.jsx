import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthStore from "../../stores/useAuthStore";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-6 py-3 bg-[#F9F9EF] -blur-xl border border-black z-[100]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <img
            src="/land6.jpeg"
            alt="logo"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl object-cover shadow-md"
          /> */}

          <img
            src="./logo.svg"
            alt="logo"
            className="w-10 h-10 sm:w-14 sm:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#14213d] font-medium text-sm lg:text-base">
          <li><Link to="/" className="hover:text-[#fca311] transition-colors duration-200">Home</Link></li>
          <li><Link to="/qna" className="hover:text-[#fca311] transition-colors duration-200">Chat with Astrologer</Link></li>
          <li><Link to="/remedies" className="hover:text-[#fca311] transition-colors duration-200">Remedies</Link></li>
          <li>
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
                hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
                hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
              >
                Logout
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#14213d] z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown - Now positioned absolutely relative to nav */}
        {menuOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-black/20 shadow-2xl 
                       flex flex-col items-center justify-start py-6 gap-6 text-[#14213d] font-medium text-lg 
                       z-[105] md:hidden"
          >
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#fca311] transition-colors duration-200">Home</Link>
            <Link to="/qna" onClick={() => setMenuOpen(false)} className="hover:text-[#fca311] transition-colors duration-200">Chat with Astrologer</Link>
            <Link to="/remedies" onClick={() => setMenuOpen(false)} className="hover:text-[#fca311] transition-colors duration-200">Remedies</Link>

            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
                hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
                hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Add spacing when mobile menu is open to prevent content overlap */}
      {menuOpen && <div className="h-64 md:h-0"></div>}
    </>
  );
}