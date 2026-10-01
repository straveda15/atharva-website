import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, FileCheck, Mail } from "lucide-react";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  const email = "atharvaenterprisensk@gmail.com";

  const openEmailCompose = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* COLUMN 1 — ABOUT */}
          <div className="space-y-3">
            {/* LOGO */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Atharva Enterprises"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="w-full text-sm leading-[1.35rem] text-slate-400 sm:max-w-[330px]">
              Government Licensed Electrical Contractor and Engineering firm
            </p>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div>
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-[#0098db]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#0098db]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-[#0098db]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="transition-colors hover:text-[#0098db]"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div>
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-2.5 text-sm">

              {/* CONTACT PERSONS */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Contact Persons
                </p>

                <p className="mt-1 font-semibold text-white">
                  Vyankatesh Kulkarni
                </p>

                <a
                  href="tel:+91942398669"
                  className="block text-slate-300 transition-colors hover:text-[#0098db]"
                >
                  +91-942398669
                </a>

                <p className="mt-1 font-semibold text-white">
                  Nihar Kulkarni
                </p>

                <a
                  href="tel:+919890061374"
                  className="block text-slate-300 transition-colors hover:text-[#0098db]"
                >
                  +91-9890061374
                </a>
              </div>

              {/* EMAIL */}
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <button
                  type="button"
                  onClick={openEmailCompose}
                  className="mt-1 inline-flex max-w-full cursor-pointer items-center gap-1.5 break-all border-0 bg-transparent p-0 text-left text-slate-300 transition-colors hover:text-[#0098db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0098db] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-label="Compose email to Atharva Enterprises"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#0098db]" />

                  <span>
                    atharvaenterprisensk@gmail.com
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — ADDRESSES */}
          <div>
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
              Addresses
            </h3>

            <div className="space-y-4 text-sm">

              {/* WORKS ADDRESS */}
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0098db]" />
                  Works Address
                </p>

                <p className="mt-1 text-xs leading-[1.15rem] text-slate-400">
                  Shop No. 4, Gulmohar Super Shoppee, B/h Moharir Ford
                  Service Station, Gulmohar Colony, Pipe Line Road, Satpur,
                  Nashik - 422007
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-3 text-center text-xs text-slate-400 sm:flex-row sm:text-left">

          <p>
            © {new Date().getFullYear()} Atharva Enterprises. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0098db]" />
              Safety First Certified
            </span>

            <span className="flex items-center gap-1.5">
              <FileCheck className="h-3.5 w-3.5 text-[#0098db]" />
              100% On-Time Completion
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;