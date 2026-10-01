
import React from "react";
import { Link } from "react-router-dom";

import transmissionIcon from "../assets/transmission-distribution.png";
import substationIcon from "../assets/substation-engineering.png";
import industrialIcon from "../assets/industrial-commercial.png";
import batteryIcon from "../assets/battery-energy-storage.png";
import gisIcon from "../assets/gas-insulated-substation.png";
import renewableIcon from "../assets/clean-renewable-energy.png";
import evhomee from "../assets/evhomee.png";

const services = [
  {
    id: 1,
    slug: "transmission-distribution",
    title: "Transmission & Distribution Infrastructure",
    description:
      "Reliable transmission and distribution infrastructure for efficient power delivery, network connectivity.",
    image: transmissionIcon,
  },
  {
    id: 2,
    slug: "substation-engineering",
    title: "Substation Engineering And Erection",
    description:
      "Complete substation engineering, installation and erection services designed for safe.",
    image: substationIcon,
  },
  {
    id: 3,
    slug: "industrial-commercial",
    title: "Industrial & Commercial Solutions",
    description:
      "Complete electrical solutions for industrial and commercial facilities, covering infrastructure.",
    image: industrialIcon,
  },
  {
    id: 4,
    slug: "battery-energy-storage",
    title: "Battery Energy Storage System",
    description:
      "Energy storage solutions that support efficient power management, backup requirements.",
    image: batteryIcon,
  },
  {
    id: 5,
    slug: "gas-insulated-substation",
    title: "Gas Insulated Substation",
    description:
      "Gas insulated substation solutions for compact, reliable and efficient electrical power distribution in demanding applications.",
    image: gisIcon,
  },
  {
    id: 6,
    slug: "clean-renewable-energy",
    title: "Clean & Renewable Energy Solution",
    description:
      "Electrical solutions supporting clean and renewable energy projects with a focus on efficient.",
    image: renewableIcon,
  },
  {
    id: 7,
    slug: "ev-charging-station",
    title: "EV Charging Station & System Integration",
    description:
      "Modern EV charging infrastructure with connected system integration, OCPP 2.0.1 / OCPI 2.2.1 support and smart network management.",
    image: evhomee,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-9">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-6 sm:mb-7">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#0098db]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] sm:text-[13px]">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#102A43] sm:text-3xl lg:text-[36px]">
            Our Comprehensive Suite of Electrical Engineering Services
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              aria-label={`View ${service.title} details`}
              className="group flex min-h-[250px] flex-col rounded-lg border border-[#E5E7EB] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(16,42,67,0.04)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D5DDE8] hover:shadow-[0_6px_18px_rgba(16,42,67,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0098db] focus-visible:ring-offset-2"
            >
              {/* ICON */}
              <div className="flex h-[78px] items-center">
                <img
                  src={service.image}
                  alt=""
                  className={`object-contain object-left transition-all duration-200 group-hover:scale-[1.05] group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:invert(38%)_sepia(99%)_saturate(1845%)_hue-rotate(191deg)_brightness(91%)_contrast(101%)] ${
                    service.id === 7
                      ? "h-[85px] w-[120px] max-w-full"
                      : "h-[72px] w-[105px] max-w-full"
                  }`}
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-2 text-[17px] font-bold leading-tight text-[#102A43] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-[18px]">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-[13px] leading-5 text-[#64748B]">
                {service.description}
              </p>

              {/* READ MORE */}
              <div className="mt-auto pt-3">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] transition-all duration-200 group-hover:gap-2.5 group-hover:text-[#1D4ED8]">
                  Read More
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;