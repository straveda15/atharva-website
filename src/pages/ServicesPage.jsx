
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#EDE9EA] text-[#102A43]">
      {/* =========================================================
          PAGE HEADER / HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EDE9EA] pt-5 pb-2 sm:pt-6 sm:pb-3">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-base font-bold text-[#102A43] sm:text-lg">
          
          </div>

          {/* Page Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Our Services
            </h1>

            {/* SHORT DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-none whitespace-nowrap text-xs leading-5 text-black sm:text-sm lg:text-[17px]">
              Discover our reliable electrical engineering solutions, designed to meet diverse infrastructure and project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID
      ========================================================= */}
      <section className="pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden bg-gray-100 transition-all duration-300"
              >
                {/* SERVICE IMAGE */}
                <Link
                  to={`/services/${service.slug}`}
                  className="relative block aspect-[16/11] w-full shrink-0 overflow-hidden bg-[#F1F5F9]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                      index === 2 ? "object-fill" : "object-cover"
                    }`}
                  />
                </Link>

                {/* CONTENT BELOW IMAGE */}
                <div className="flex flex-1 flex-col px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-3">
                  {/* TITLE */}
                  <h2 className="min-h-[3.5rem] text-lg font-bold leading-snug text-[#102A43] transition-colors group-hover:text-[#0098db] sm:text-[19px]">
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>

                  {/* READ MORE */}
                  <div className="mt-auto pt-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="group/link inline-flex items-center gap-1.5 pb-0.5 text-xs font-bold uppercase tracking-wider text-blue-600 transition-all duration-200 hover:text-[#0098db]"
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
    </div>
  );
};

export default ServicesPage;
