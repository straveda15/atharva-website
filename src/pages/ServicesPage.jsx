import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

const ServicesPage = () => {
  return (
    <div className="w-full bg-white text-[#102A43]">

      {/* =========================================================
          PAGE HEADER / HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white pt-8 pb-4 sm:pt-10 sm:pb-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-base font-bold text-[#102A43] sm:text-lg">
            <Link
              to="/"
              className="text-[#64748B] transition-colors hover:text-[#0098db]"
            >
              Home
            </Link>

            <span className="text-[#94A3B8]">&gt;</span>

            <span className="text-[#0098db]">
              Services
            </span>
          </div>

          {/* Page Heading */}
          <div className="text-center">
            <div className="mb-2.5 flex items-center justify-center gap-1">
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Our <span className="text-[#0098db]">Services</span>
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID
      ========================================================= */}
      <section className="pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">

            {servicesData.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden bg-white transition-all duration-300"
              >

                {/* SERVICE IMAGE */}
                <Link
                  to={`/services/${service.slug}`}
                  className="relative block aspect-[16/11] w-full overflow-hidden bg-[#F1F5F9]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* CONTENT BELOW IMAGE */}
                <div className="flex flex-1 flex-col pt-4">

                  {/* TITLE */}
                  <h2 className="text-lg font-bold leading-snug text-[#102A43] transition-colors group-hover:text-[#0098db] sm:text-[19px]">
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>

                  {/* READ MORE */}
                  <div className="mt-4 pt-1">
                    <Link
                      to={`/services/${service.slug}`}
                      className="group/link inline-flex items-center gap-1.5 border-b-2 border-[#102A43] pb-0.5 text-xs font-bold uppercase tracking-wider text-[#102A43] transition-all duration-200 hover:border-[#0098db] hover:text-[#0098db]"
                    >
                      <span>READ MORE</span>

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM PROJECT INQUIRY CTA
      ========================================================= */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-7 sm:py-9">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl">

            {/* CTA HEADING */}
            <h3 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
              Need Turnkey Electrical Infrastructure Execution?
            </h3>

            {/* CTA DESCRIPTION */}
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
              Consult with our engineering team for statutory planning,
              substation erection, transmission lines, or industrial facility
              electrification.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919890061374?text=Hello%20Atharva%20Enterprises,%20I%20would%20like%20to%20discuss%20an%20electrical%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#0098db] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0082bd] sm:w-auto"
              >
                <span>
                  Connect via WhatsApp
                </span>

                <ArrowRight className="h-4 w-4" />
              </a>

              {/* BROCHURE */}
              <a
                href="/Atharva-Enterprises-Brochure.pdf"
                download="Atharva-Enterprises-Brochure.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-semibold text-[#102A43] transition-colors hover:bg-[#F1F5F9] sm:w-auto"
              >
                <span>
                  Download Brochure
                </span>
              </a>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;