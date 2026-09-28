
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, FileCheck } from "lucide-react";
import logo from "../assets/atharvalogo.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* COLUMN 1 — ABOUT */}
          <div className="space-y-3">
            {/* LOGO — NO WHITE BACKGROUND */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Atharva Enterprises"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="max-w-[330px] text-sm leading-[1.35rem] text-slate-400">
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

              <li>
                <a
                  href="/Atharva-Enterprises-Brochure.pdf"
                  download="Atharva-Enterprises-Brochure.pdf"
                  className="font-semibold text-[#0098db] transition-colors hover:text-white"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div>
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-2.5 text-sm">
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

              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:atharvaenterprisensk@gmail.com"
                  className="mt-0.5 block break-all text-slate-300 transition-colors hover:text-[#0098db]"
                >
                  atharvaenterprisensk@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — ADDRESSES */}
          <div>
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
              Addresses
            </h3>

            <div className="space-y-4 text-sm">

              {/* OFFICE ADDRESS */}
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0098db]" />
                  Office Address
                </p>

                <p className="mt-1 text-xs leading-[1.15rem] text-slate-400">
                  Flat No. 2, Bhagyraj Co Op Hsg. Soc. Opp. Jaipur House,
                  Parijat Nagar, Nashik - 422005
                </p>
              </div>

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
        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-3 text-xs text-slate-400 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Atharva Enterprises. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
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
