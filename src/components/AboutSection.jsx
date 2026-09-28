
import React from "react";
import { Link } from "react-router-dom";

import aboutImage from "../assets/about-electrical.jpeg";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F2F7FD] py-5 sm:py-6 lg:py-7">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">

          {/* LEFT — CONTENT */}
          <div className="order-2 lg:order-1">

            {/* Small Heading */}
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2563EB]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                About Us
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-xl text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
              A Legacy of Electrical Excellence,
              <br className="hidden sm:block" />
              Built Over Five Decades
            </h2>

            {/* Description */}
            <div className="mt-3 max-w-xl space-y-2.5 text-justify text-[15px] leading-6 text-[#5F6C7B] sm:text-[16px] sm:leading-7">
              <p>
                Atharva Enterprises is a Government Licensed Electrical
                Contractor and Engineering firm with a legacy established in
                1970 through our parent company, Jitendra Electricals.
              </p>

              <p>
                With over five decades of engineering experience, we deliver
                safe, reliable and efficient electrical solutions across
                commercial, industrial, MSEDCL and residential sectors.
              </p>
            </div>

            {/* Read More */}
            <div className="mt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2563EB] transition-all duration-200 hover:gap-3 hover:text-[#1D4ED8]"
              >
                Read More 
                <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

          {/* RIGHT — IMAGE */}
          <div className="order-1 overflow-hidden rounded-lg lg:order-2">
            <img
              src={aboutImage}
              alt="Atharva Enterprises electrical engineering project"
              className="h-[240px] w-full object-cover sm:h-[280px] lg:h-[315px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
