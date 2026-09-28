
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/image.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* HERO */}
      <div className="relative flex min-h-[350px] items-center sm:min-h-[420px] lg:min-h-[500px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-y-0 left-[30%] right-0 z-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
          aria-hidden="true"
        />

        {/* WHITE FADE — KEEPS LEFT SIDE CLEAN */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/95 via-45% to-white/10" />

        {/* LIGHT BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-10 bg-gradient-to-t from-white to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">

          <div className="max-w-xl lg:max-w-2xl">

            {/* TOP LABEL */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#0098db]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#64748B] sm:text-[13px]">
                Powering Progress Since 1970
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#102A43] sm:text-6xl lg:text-[54px]">
              End-to-End Electrical
              <br />
              <span className="text-[#0098db]">
                Contracting & Engineering
              </span>
              <br />
              <span className="text-[#0098db]">
                Services
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#5F6C7B] sm:text-base sm:leading-7">
              A Legacy of Electrical Excellence, Built Over Five Decades.
              Government Licensed Electrical Contractor serving Western India
              and beyond.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              {/* EXPLORE SERVICES */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0098db] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0082bd] hover:shadow-md"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* VIEW PROJECTS */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#102A43] shadow-sm transition-all duration-200 hover:border-[#0098db] hover:text-[#0098db]"
              >
                View Projects
              </Link>

             

            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4 md:gap-10">

            {/* STAT 1 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                50+
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Years of Expertise
              </div>
            </div>

            {/* STAT 2 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                1000+
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Projects Completed
              </div>
            </div>

            {/* STAT 3 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                55+
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Years of Trust
              </div>
            </div>

            {/* STAT 4 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                100%
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                On Time
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
