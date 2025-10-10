import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/all-apps", label: "Apps" },
    { path: "/installed-apps", label: "Installation" },
  ];

  const NavLinks = () =>
    navItems.map(({ path, label }) => (
      <li key={path} onClick={() => setIsOpen(false)}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `relative px-2 text-base font-medium transition-all duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                : "text-gray-800"
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5 px-5 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
        >
          <img src={logo} alt="Hero.io" className="w-10 h-10" />
          HERO.IO
        </Link>

        {/* Menu - Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          <NavLinks />
        </ul>

        {/* CTA */}
        <Link
          to="https://github.com/devgantabya"
          className="hidden sm:flex items-center gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-medium py-2 px-4 rounded-md"
        >
          <FaGithub className="w-5 h-5" />
          Contribute
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md border border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col gap-3 p-4 z-50">
          <NavLinks />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
