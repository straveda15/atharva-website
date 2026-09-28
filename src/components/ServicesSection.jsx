import React from "react";
import { Link } from "react-router-dom";

import imgTransmission from "../assets/transmission-distribution.png";
import imgSubstation from "../assets/substation-engineering.png";
import imgIndustrial from "../assets/industrial-commercial.png";
import imgBESS from "../assets/battery-energy-storage.png";
import imgGIS from "../assets/gas-insulated-substation.png";
import imgRenewable from "../assets/clean-renewable-energy.png";

const services = [
  {
    id: 1,
    title: "Transmission & Distribution Infrastructure",
    img: imgTransmission,
    path: "/services#msedcl",
  },
  {
    id: 2,
    title: "Substation Engineering And Erection",
    img: imgSubstation,
    path: "/services#gis",
  },
  {
    id: 3,
    title: "Industrial & Commercial Solutions",
    img: imgIndustrial,
    path: "/services#industrial",
  },
  {
    id: 4,
    title: "Battery Energy Storage System",
    img: imgBESS,
    path: "/services#bess",
  },
  {
    id: 5,
    title: "Gas Insulated Substation",
    img: imgGIS,
    path: "/services#gis",
  },
  {
    id: 6,
    title: "Clean & Renewable Energy Solution",
    img: imgRenewable,
    path: "/services#solar",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0e1e38] tracking-normal leading-snug">
            Our Comprehensive Suite of Electrical<br className="hidden sm:inline" /> Engineering Services
          </h2>
        </div>

        {/* 6 Services Grid: 3 top row, 3 bottom row (No blue cards, natural and clean) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-8 max-w-6xl mx-auto">
          {services.map((srv) => (
            <Link
              key={srv.id}
              to={srv.path}
              className="group flex flex-col items-center text-center p-2 transition-all duration-200"
            >
              {/* Image from assets (clean natural display) */}
              <div className="h-24 sm:h-28 w-full flex items-center justify-center mb-4">
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0e1e38] group-hover:text-[#0098db] transition-colors duration-200 leading-snug max-w-[280px]">
                {srv.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
