import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Building2,
  Sun,
  BatteryCharging,
} from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Transmission & Distribution",
      description:
        "Reliable electrical infrastructure for efficient power distribution.",
    },
    {
      icon: Building2,
      title: "Substation Engineering",
      description:
        "Engineering, installation, testing and commissioning of substations.",
    },
    {
      icon: Sun,
      title: "Clean & Renewable Energy",
      description:
        "Electrical solutions for utility-scale solar and renewable projects.",
    },
    {
      icon: BatteryCharging,
      title: "Energy Storage Solutions",
      description:
        "Battery energy storage solutions for efficiency and grid stability.",
    },
  ];

  return (
    <section className="w-full bg-white py-5 sm:py-6 lg:py-7">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

          {/* ================= LEFT CONTENT ================= */}
          <div className="order-1">

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
                className="inline-flex items-center gap-2 text-[16px] font-bold text-[#2563EB] transition-all duration-200 hover:gap-3 hover:text-[#1D4ED8]"
              >
                Read More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT HIGHLIGHTS ================= */}
          <div className="order-2 relative w-full">

            {/* CENTER BLUE VERTICAL LINE */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#2563EB] sm:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2">

              {/* ================= LEFT COLUMN ================= */}
              <div className="pr-0 sm:pr-7">

                {/* LEFT POINT 1 */}
                <div className="relative py-5 sm:mt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2563EB] bg-white">
                      <Zap
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] font-bold leading-5 text-[#102A43]">
                        Transmission & Distribution
                      </h3>

                      <p className="mt-1 text-[13px] leading-5 text-[#64748B]">
                        Reliable electrical infrastructure for efficient power
                        distribution.
                      </p>
                    </div>
                  </div>

                  {/* BLUE HORIZONTAL LINE */}
                  <div className="mt-5 h-[1px] w-full bg-[#2563EB]" />
                </div>

                {/* LEFT POINT 2 */}
                <div className="relative py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2563EB] bg-white">
                      <Sun
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] font-bold leading-5 text-[#102A43]">
                        Clean & Renewable Energy
                      </h3>

                      <p className="mt-1 text-[13px] leading-5 text-[#64748B]">
                        Electrical solutions for utility-scale solar and
                        renewable projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <div className="pl-0 sm:pl-7 sm:-mt-8">

                {/* RIGHT POINT 1 */}
                <div className="relative py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2563EB] bg-white">
                      <Building2
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] font-bold leading-5 text-[#102A43]">
                        Substation Engineering
                      </h3>

                      <p className="mt-1 text-[13px] leading-5 text-[#64748B]">
                        Engineering, installation, testing and commissioning of
                        substations.
                      </p>
                    </div>
                  </div>

                  {/* BLUE HORIZONTAL LINE */}
                  <div className="mt-5 h-[1px] w-full bg-[#2563EB]" />
                </div>

                {/* RIGHT POINT 2 */}
                <div className="relative py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2563EB] bg-white">
                      <BatteryCharging
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] font-bold leading-5 text-[#102A43]">
                        Energy Storage Solutions
                      </h3>

                      <p className="mt-1 text-[13px] leading-5 text-[#64748B]">
                        Battery energy storage solutions for efficiency and
                        grid stability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;