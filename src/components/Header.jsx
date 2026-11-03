
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Technology Partners", path: "/technology-partners" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-hidden bg-gray-50 backdrop-blur-md border-b border-[#D8D2D4] shadow-xs">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

        {/* LEFT: LOGO + COMPANY NAME */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 max-w-[calc(100%-48px)] sm:max-w-none items-center gap-2 sm:gap-3.5"
          title="Atharva Enterprises"
        >
          <img
  src={logo}
  alt="Atharva Enterprises Logo"
  className="h-12 w-auto shrink-0 object-contain mix-blend-multiply sm:h-14"
/>

          <div className="flex min-w-0 flex-col justify-center text-left">
            <span className="text-[14px] font-bold tracking-tight leading-tight text-[#0e1e38] sm:text-[20px]">
              ATHARVA ENTERPRISES
            </span>

            <span className="text-[9px] font-semibold tracking-wide text-[#0098db] sm:text-[12px]">
              Government Licence Electrical Contractor
            </span>
          </div>
        </Link>

        {/* RIGHT: NAVIGATION - DESKTOP */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-extrabold tracking-normal transition-colors py-1 ${
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
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none lg:hidden"
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
        <div className="border-t border-[#D8D2D4] bg-[#EDE9EA] px-4 py-4 shadow-md lg:hidden">
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
