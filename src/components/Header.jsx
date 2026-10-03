import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/atharvalogo.png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT: LOGO + COMPANY NAME */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3.5"
          title="Atharva Enterprises"
        >
          <img
            src={logo}
            alt="Atharva Enterprises Logo"
            className="h-11 sm:h-12 w-auto object-contain"
          />

          <div className="flex flex-col justify-center text-left">
            <span className="text-[17px] sm:text-[20px] font-bold tracking-tight text-[#0e1e38] leading-tight">
              ATHARVA ENTERPRISES
            </span>

            <span className="text-[11px] sm:text-[12px] font-semibold text-[#0098db] tracking-wide">
              Government Licence Electrical Contractor
            </span>
          </div>
        </Link>

        {/* RIGHT: NAVIGATION - DESKTOP */}
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-normal transition-colors py-1 ${
                  isActive
                    ? "text-[#0098db] border-b-2 border-[#0098db]"
                    : "text-gray-700 hover:text-[#0098db]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden shadow-md">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-sky-50 text-[#0098db]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#0098db]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;