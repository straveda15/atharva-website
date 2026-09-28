
import React from "react";
import { Link } from "react-router-dom";

import {
  Factory,
  Building2,
  Zap,
  Award,
} from "lucide-react";

const sectors = [
  {
    title: "Industrial",
    description:
      "Electrical infrastructure and complete electrification solutions for industrial facilities.",
    icon: Factory,
  },
  {
    title: "Commercial",
    description:
      "Electrical engineering and infrastructure solutions for commercial developments and facilities.",
    icon: Building2,
  },
  {
    title: "MSEDCL",
    description:
      "Electrical works involving distribution infrastructure, load extension and related requirements.",
    icon: Zap,
  },
  {
    title: "Residential",
    description:
      "Reliable electrical engineering solutions for residential requirements.",
    icon: Building2,
  },
];


const AboutPage = () => {
  return (
    <div className="w-full bg-white">

      {/* =========================================================
          OUR STORY + HISTORICAL MILESTONES
      ========================================================= */}
      <section className="w-full bg-white py-9 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

            {/* =====================================================
                LEFT — OUR STORY
            ===================================================== */}
            <div className="pt-0">

              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#2563EB]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                  Our Story
                </p>
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[38px]">
                A Legacy Built on Experience, Engineering and Reliability
              </h2>

              {/* COMPACT STORY */}
              <div className="mt-4 max-w-3xl text-[15px] leading-7 text-[#5F6C7B] sm:text-[16px]">
                <p>
                  Atharva Enterprises was established in 2005, building on the
                  engineering legacy of its parent company, Jitendra
                  Electricals, which dates back to 1970. With over five decades
                  of engineering experience, we deliver safe, reliable and
                  efficient electrical solutions across industrial, commercial,
                  MSEDCL and residential sectors.
                </p>
              </div>

              <div className="mt-5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1D4ED8]"
                >
                  Explore Our Projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

            </div>


            {/* =====================================================
                RIGHT — HISTORICAL MILESTONES
            ===================================================== */}
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6 lg:p-7">

              <div className="mb-6 flex items-center gap-3">
                <Award className="h-5 w-5 text-[#2563EB]" />

                <h3 className="text-lg font-bold text-[#102A43] sm:text-[21px]">
                  Our Historical Milestones
                </h3>
              </div>

              <div className="relative">

                {/* Vertical Timeline */}
                <div className="absolute bottom-5 left-[8px] top-5 w-[2px] bg-[#CBDFF5]" />

                {/* 1970 */}
                <div className="relative flex gap-5 pb-7">

                  <div className="relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#2563EB]" />

                  <div className="min-w-0">

                    <p className="text-[13px] font-bold tracking-wide text-[#2563EB]">
                      1970
                    </p>

                    <h4 className="mt-1 text-[17px] font-bold leading-snug text-[#102A43]">
                      Jitendra Electricals Founded
                    </h4>

                    <p className="mt-1 text-[13px] leading-5 text-[#4B6075]">
                      Commenced operations focusing on industrial wiring,
                      retail commercial installations, and localized
                      distribution networks.
                    </p>

                  </div>
                </div>


                {/* 2005 */}
                <div className="relative flex gap-5 pb-7">

                  <div className="relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#2563EB]" />

                  <div className="min-w-0">

                    <p className="text-[13px] font-bold tracking-wide text-[#2563EB]">
                      2005
                    </p>

                    <h4 className="mt-1 text-[17px] font-bold leading-snug text-[#102A43]">
                      Atharva Enterprises Established
                    </h4>

                    <p className="mt-1 text-[13px] leading-5 text-[#4B6075]">
                      Formalized corporate expansion into electrical
                      infrastructure, substation works and industrial
                      electrical projects.
                    </p>

                  </div>
                </div>


                {/* PRESENT & FUTURE */}
                <div className="relative flex gap-5">

                  <div className="relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#2563EB]" />

                  <div className="min-w-0">

                    <p className="text-[13px] font-bold uppercase tracking-wide text-[#2563EB]">
                      Present & Future
                    </p>

                    <h4 className="mt-1 text-[17px] font-bold leading-snug text-[#102A43]">
                      50+ Years of Engineering Experience
                    </h4>

                    <p className="mt-1 text-[13px] leading-5 text-[#4B6075]">
                      Continuing to deliver electrical engineering,
                      transmission and distribution, substation and
                      infrastructure solutions across multiple sectors.
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


{/* =========================================================
    WHY CHOOSE US
========================================================= */}
<section className="w-full bg-white py-4 sm:py-8 lg:py-8">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* =====================================================
        OUTSIDE SECTION HEADING
    ===================================================== */}
    <div className="mb-6 sm:mb-7">

      <div className="mb-2.5 flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#2563EB]" />

        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
          Why Choose Us
        </p>
      </div>

      <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
        Why Choose Atharva Enterprises
      </h2>

    </div>


    {/* =====================================================
        EXISTING UI — UNCHANGED
    ===================================================== */}
    <div className="grid overflow-hidden lg:grid-cols-[36%_64%]">

      {/* =====================================================
          LEFT — WHY CHOOSE US
      ===================================================== */}
      <div className="flex min-h-[390px] items-center bg-blue-400 px-7 py-8 sm:px-9 lg:min-h-[430px] lg:px-10">

        <div className="max-w-sm">

          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.17em] text-white">
            Key Advantages
          </p>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[38px]">
           Built on Experience
            <br />
            Driven By
          
          Excellence
          </h2>

          <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/90 sm:text-[15px]">
            Experience, technical expertise and dependable electrical
            engineering solutions built around every project requirement.
          </p>

        </div>

      </div>


      {/* =====================================================
          RIGHT — VERTICAL POINTS
      ===================================================== */}
      <div className="bg-white px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-7">

        <div className="relative">

          {/* VERTICAL LINE */}
          <div className="absolute bottom-7 left-[23px] top-7 w-[2px] bg-[#D8E4F2]" />


          {/* POINT 1 */}
          <div className="relative flex gap-5 pb-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
              1
            </div>

            <div className="pt-0.5">

              <h3 className="text-[17px] font-bold leading-snug text-[#102A43]">
                Legacy Since 1970
              </h3>

              <p className="mt-1 text-[13px] leading-5 text-[#64748B] sm:text-[14px] sm:leading-6">
                Our engineering legacy dates back to 1970 through our parent
                company, Jitendra Electricals, bringing decades of industry
                experience.
              </p>

            </div>
          </div>


          {/* POINT 2 */}
          <div className="relative flex gap-5 pb-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
              2
            </div>

            <div className="pt-0.5">

              <h3 className="text-[17px] font-bold leading-snug text-[#102A43]">
                Government Licensed
              </h3>

              <p className="mt-1 text-[13px] leading-5 text-[#64748B] sm:text-[14px] sm:leading-6">
                Government Licensed Electrical Contractor and Engineering firm
                providing professional electrical infrastructure solutions.
              </p>

            </div>
          </div>


          {/* POINT 3 */}
          <div className="relative flex gap-5 pb-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
              3
            </div>

            <div className="pt-0.5">

              <h3 className="text-[17px] font-bold leading-snug text-[#102A43]">
                Five Decades of Experience
              </h3>

              <p className="mt-1 text-[13px] leading-5 text-[#64748B] sm:text-[14px] sm:leading-6">
                More than five decades of engineering experience supporting
                diverse electrical infrastructure and project requirements.
              </p>

            </div>
          </div>


          {/* POINT 4 */}
          <div className="relative flex gap-5">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
              4
            </div>

            <div className="pt-0.5">

              <h3 className="text-[17px] font-bold leading-snug text-[#102A43]">
                Industrial & Commercial Expertise
              </h3>

              <p className="mt-1 text-[13px] leading-5 text-[#64748B] sm:text-[14px] sm:leading-6">
                Experience in complete electrification and electrical
                infrastructure for industrial and commercial facilities.
              </p>

            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>



      {/* =========================================================
          SECTORS WE SERVE
      ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* HEADER */}
          <div className="mb-7">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2563EB]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                Sectors
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
              Electrical Solutions Across Multiple Sectors
            </h2>

            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Our experience extends across industrial, commercial, MSEDCL
              and residential electrical requirements.
            </p>

          </div>


          {/* SECTOR CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(16,42,67,0.07)]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB]/10">
                    <Icon className="h-5 w-5 text-[#2563EB]" />
                  </div>

                  <h3 className="mt-4 text-[17px] font-bold text-[#102A43]">
                    {sector.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-[#64748B]">
                    {sector.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
