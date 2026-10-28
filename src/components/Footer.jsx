
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  FileCheck,
  Mail,
  Building2,
} from "lucide-react";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  const email = "atharvaenterprisensk@gmail.com";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=20.0053514%2C73.7368769";

  const openEmailCompose = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-5 sm:px-7 lg:px-8 lg:py-5">
        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.78fr_0.95fr_1.05fr_1.15fr] lg:gap-x-3 xl:gap-x-4">
          {/* COLUMN 1 — ABOUT */}
          <div className="min-w-0">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Atharva Enterprises"
                className="h-16 w-auto object-contain object-left"
              />
            </Link>

            <p className="mt-3 max-w-[250px] text-[15px] leading-7 text-slate-400">
              Government Licensed Electrical Contractor and Engineering firm
            </p>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div className="min-w-0">
            <h3 className="mb-5 text-base font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link to="/" className="transition-colors hover:text-[#0098db]">
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
                  to="/technology-partners"
                  className="transition-colors hover:text-[#0098db]"
                >
                  Technology Partners
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
                <Link
                  to="/clients"
                  className="transition-colors hover:text-[#0098db]"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div className="min-w-0">
            <h3 className="mb-5 text-base font-bold uppercase tracking-wide text-white">
              Contact
            </h3>

            <div className="space-y-4 text-[15px]">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contact Persons
                </p>

                <p className="font-semibold leading-6 text-white">
                  Vyankatesh Kulkarni
                </p>

                <a
                  href="tel:+919423968669"
                  className="mt-1 block whitespace-nowrap transition-colors hover:text-[#0098db]"
                >
                  +91-9423968669
                </a>

                <a
                  href="tel:+919890061374"
                  className="mt-1 block whitespace-nowrap transition-colors hover:text-[#0098db]"
                >
                  +91-9890061374
                </a>
              </div>

              <div>
                <p className="font-semibold leading-6 text-white">
                  Nihar Kulkarni
                </p>

                <a
                  href="tel:+919860182518"
                  className="mt-1 block whitespace-nowrap transition-colors hover:text-[#0098db]"
                >
                  +91-9860182518
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — BUSINESS DETAILS */}
          <div className="min-w-0">
            <h3 className="mb-5 flex items-center gap-2 text-base font-bold uppercase tracking-wide text-white">
              <Building2 className="h-4 w-4 shrink-0 text-[#0098db]" />
              <span>Business Details</span>
            </h3>

            <div className="space-y-5 text-[15px]">
              {/* GSTIN */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="shrink-0 text-slate-400">GSTIN</span>
                <span className="font-semibold text-white">
                  27AGRPK6759P1Z7
                </span>
              </div>

              {/* STATE DETAILS */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="shrink-0 text-slate-400">State</span>
                  <span className="font-semibold text-white">
                    Maharashtra
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="shrink-0 whitespace-nowrap text-slate-400">
                    State Code
                  </span>
                  <span className="font-semibold text-white">27</span>
                </div>

                {/* EMAIL */}
                <div className="mt-5 min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Email
                  </p>

                  <button
                    type="button"
                    onClick={openEmailCompose}
                    aria-label="Compose email to Atharva Enterprises"
                    className="flex min-w-0 items-center gap-1.5 border-0 bg-transparent p-0 text-left text-sm text-slate-300 transition-colors hover:text-[#0098db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0098db]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#0098db]" />

                    <span className="break-all text-[12px] xl:text-[13px]">
                      {email}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 5 — ADDRESSES */}
          <div className="min-w-0">
            <h3 className="mb-5 text-base font-bold uppercase tracking-wide text-white">
              Addresses
            </h3>

            <iframe
              title="Atharva Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0753646896233!2d73.73687689678957!3d20.005351399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeded3e6133b1%3A0xd44e8f754aa6feb6!2sKoncept%20Kitchens%20and%20Home!5e0!3m2!1sen!2sin!4v1793170500288!5m2!1sen!2sin"
              className="mb-2 h-26 w-full rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <div className="min-w-0 space-y-5">
              {/* WORKS ADDRESS */}
              <div className="min-w-0">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <MapPin className="h-4 w-4 shrink-0 text-[#0098db]" />
                  Works Address
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="block break-words text-sm leading-[1.7] text-slate-300 transition-colors hover:text-[#0098db]"
                >
                 Office No. 4, Gulmohar Super 6 Shopee,
                    Engineer Prakash Chaudhary Marg,
                    Near Reliance Petrol Pump,
                    Gulmohar Vihar, Anandvalli,
                    Nashik, Maharashtra – 422007.
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Atharva Enterprises. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <span className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-400">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#0098db]" />
              Safety First Certified
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-400">
              <FileCheck className="h-4 w-4 shrink-0 text-[#0098db]" />
              100% On-Time Completion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
