
import React, { useEffect, useState } from "react";
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

const leftClients = [
  "Nisham Developers",
  "Janaki Group",
  "Aarohi Infra",
  "Charwak Construction",
  "Akshada Buildcon",
  "Swagat Developers",
  "Balaji Developers",
  "Kartik Buildcon",
  "Laxmi Builders And Developers",
  "Prabhav Construction Mumbai",
  "New Stop Venture (Fog City, Igatpuri)",
  "Riddhi Siddhi Builders And Developers",
];

const rightClients = [
  "Archit Group Build. & Deve., Nashik",
  "Rohan Enterprises, Nashik",
  "Aakar Buildcon, Nashik",
  "Grandeur Realtors, Nashik",
  "Niraj Builders & Developers, Nashik",
  "Avani Builders & Developers, Nashik",
  "Nirmitee Constructions, Nashik",
  "Nilkanta Developers",
  "Reliable Constructions, Nashik",
  "Thakkar Builders, Mumbai",
  "Pacific Housing Corporation, Nashik",
  "Rajput Constructions, Nashik",
];

const AboutPage = () => {
  /* =========================================================
      SECTOR ANIMATION
  ========================================================= */
  const [activeSector, setActiveSector] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSector((prev) => (prev + 1) % sectors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                  Our Story
                </p>
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[38px]">
                A Legacy Built on Experience, Engineering and Reliability
              </h2>

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

                {/* BASE VERTICAL LINE */}
                <div className="absolute bottom-5 left-[8px] top-5 w-[2px] bg-[#CBDFF5]" />

                {/* ANIMATED VERTICAL LINE */}
                <div
                  className="absolute left-[8px] top-5 z-[1] w-[2px] bg-[#2563EB]"
                  style={{
                    animation: "timelineLine 6s ease-in-out infinite",
                  }}
                />

                {/* 1970 */}
                <div className="timeline-item relative flex gap-5 pb-7">

                  <div
                    className="timeline-dot relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation:
                        "timelineDot1 6s ease-in-out infinite",
                    }}
                  />

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

                  <div
                    className="relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation:
                        "timelineDot2 6s ease-in-out infinite",
                    }}
                  />

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

                  <div
                    className="relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation:
                        "timelineDot3 6s ease-in-out infinite",
                    }}
                  />

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

          {/* SECTION HEADING */}
          <div className="mb-6 sm:mb-7">

            <div className="mb-2.5 flex items-center gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                Why Choose Us
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
              Why Choose Atharva Enterprises
            </h2>

          </div>


          {/* EXISTING UI */}
          <div className="grid overflow-hidden lg:grid-cols-[36%_64%]">

            {/* LEFT */}
            <div className="flex min-h-[220px] items-center bg-blue-400 px-5 py-6 sm:min-h-[280px] sm:px-9 sm:py-8 lg:min-h-[430px] lg:px-10">

              <div className="max-w-sm">

                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.17em] text-white">
                  Key Advantages
                </p>

                <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[38px]">
                  Built on Experience
                  <br />
                  Driven By
                  <br />
                  Excellence
                </h2>

                <p className="mt-3 max-w-sm text-[13px] leading-5 text-white/90 sm:mt-4 sm:text-[15px] sm:leading-6">
                  Experience, technical expertise and dependable electrical
                  engineering solutions built around every project requirement.
                </p>

              </div>

            </div>


            {/* RIGHT */}
            <div className="bg-white px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-7">

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
          OUR ESTEEMED CLIENTS
      ========================================================= */}
      <section className="w-full bg-white py-7 sm:py-9 lg:py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* HEADING + PARAGRAPH */}
          <div className="mb-6 max-w-3xl sm:mb-7">

            <div className="mb-2.5 flex items-center gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                Our Clients
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[34px]">
              Trusted By Leading Clients
            </h2>

            <p className="mt-2 max-w-3xl text-[14px] leading-6 text-[#64748B] sm:text-[15px]">
              We have a strong track record of executing critical electrical
              infrastructure projects for a diverse range of clients.
            </p>

          </div>


          {/* =====================================================
              CLIENTS — ANIMATED BORDER
          ===================================================== */}
          <div className="clients-border relative rounded-lg bg-white p-4 sm:p-5 lg:p-6">

            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">

              {/* COLUMN 1 */}
              <div className="space-y-2">

                {[
                  "Nisham Developers",
                  "Janaki Group",
                  "Aarohi Infra",
                  "Charwak Construction",
                  "Akshada Buildcon",
                  "Swagat Developers",
                  "Balaji Developers",
                  "Kartik Buildcon",
                ].map((client, index) => (
                  <div
                    key={client}
                    className="flex min-h-[40px] items-center gap-3 px-2 py-1.5"
                  >

                    <span className="w-6 shrink-0 text-[14px] font-bold text-[#2563EB]">
                      {index + 1}.
                    </span>

                    <p className="text-[15px] font-medium leading-5 text-[#334155] sm:text-[16px]">
                      {client}
                    </p>

                  </div>
                ))}

              </div>


              {/* COLUMN 2 */}
              <div className="space-y-2">

                {[
                  "Laxmi Builders And Developers",
                  "Prabhav Construction Mumbai",
                  "New Stop Venture (Fog City, Igatpuri)",
                  "Riddhi Siddhi Builders And Developers",
                  "Archit Group Build. & Deve., Nashik",
                  "Rohan Enterprises, Nashik",
                  "Aakar Buildcon, Nashik",
                  "Grandeur Realtors, Nashik",
                ].map((client, index) => (
                  <div
                    key={client}
                    className="flex min-h-[40px] items-center gap-3 px-2 py-1.5"
                  >

                    <span className="w-6 shrink-0 text-[14px] font-bold text-[#2563EB]">
                      {index + 9}.
                    </span>

                    <p className="text-[15px] font-medium leading-5 text-[#334155] sm:text-[16px]">
                      {client}
                    </p>

                  </div>
                ))}

              </div>


              {/* COLUMN 3 */}
              <div className="space-y-2">

                {[
                  "Niraj Builders & Developers, Nashik",
                  "Avani Builders & Developers, Nashik",
                  "Nirmitee Constructions, Nashik",
                  "Nilkanta Developers",
                  "Reliable Constructions, Nashik",
                  "Thakkar Builders, Mumbai",
                  "Pacific Housing Corporation, Nashik",
                  "Rajput Constructions, Nashik",
                ].map((client, index) => (
                  <div
                    key={client}
                    className="flex min-h-[40px] items-center gap-3 px-2 py-1.5"
                  >

                    <span className="w-6 shrink-0 text-[14px] font-bold text-[#2563EB]">
                      {index + 17}.
                    </span>

                    <p className="text-[15px] font-medium leading-5 text-[#334155] sm:text-[16px]">
                      {client}
                    </p>

                  </div>
                ))}

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


          {/* =====================================================
              SECTORS — CLEAN HORIZONTAL LIST
          ===================================================== */}
          <div className="w-full">

            <div className="flex flex-col lg:flex-row">

              {sectors.map((sector, index) => {

                const Icon = sector.icon;
                const isActive = index === activeSector;

                return (
                  <React.Fragment key={sector.title}>

                    {/* SECTOR ITEM */}
                    <div
                      className={`sector-item flex-1 px-1 py-4 lg:px-6 lg:py-2 ${
                        isActive ? "sector-active" : ""
                      }`}
                    >

                      {/* ICON + TITLE */}
                      <div className="sector-heading flex items-center gap-3">

                        {/* ICON */}
                        <div className="sector-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10">
                          <Icon className="h-5 w-5 text-[#2563EB]" />
                        </div>

                        {/* TITLE */}
                        <h3 className="sector-title text-[17px] font-bold text-[#102A43]">
                          {sector.title}
                        </h3>

                      </div>


                      {/* DESCRIPTION */}
                      <p className="mt-3 max-w-[250px] text-[13px] leading-5 text-[#64748B] lg:ml-[52px]">
                        {sector.description}
                      </p>

                    </div>


                    {/* DESKTOP VERTICAL DIVIDER */}
                    {index < sectors.length - 1 && (
                      <div className="hidden h-auto w-px bg-blue-700 lg:block" />
                    )}


                    {/* MOBILE HORIZONTAL DIVIDER */}
                    {index < sectors.length - 1 && (
                      <div className="block h-px w-full bg-[#DCE4EC] lg:hidden" />
                    )}

                  </React.Fragment>
                );
              })}

            </div>

          </div>

        </div>


        {/* =====================================================
            SECTOR ANIMATION
        ===================================================== */}
        <style>
          {`
            .sector-item .sector-icon,
            .sector-item .sector-title {
              transition:
                color 0.35s ease,
                background-color 0.35s ease,
                transform 0.35s ease,
                box-shadow 0.35s ease;
            }

            .sector-item.sector-active .sector-icon {
              background-color: rgba(37, 99, 235, 0.18);
              transform: scale(1.08);
              box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.06);
            }

            .sector-item.sector-active .sector-title {
              color: #2563EB;
              transform: translateX(2px);
            }
          `}
        </style>

      </section>


      {/* =========================================================
          TIMELINE + CLIENT BORDER ANIMATIONS
      ========================================================= */}
      <style>
        {`
          /* =====================================================
             CLIENTS BORDER
          ===================================================== */

          .clients-border {
            position: relative;
            border: 2.5px solid #DCE4EC;
          }

          .clients-border::after {
            content: "";
            position: absolute;
            inset: -1.5px;
            border: 3px solid #2563EB;
            border-radius: 0.5rem;
            pointer-events: none;

            clip-path: polygon(
              0 0,
              0 0,
              0 0,
              0 0
            );

            animation: drawClientBorder 4s linear infinite;
          }

          @keyframes drawClientBorder {

            /* START — TOP LEFT */
            0% {
              clip-path: polygon(
                0 0,
                0 0,
                0 0,
                0 0
              );
            }

            /* TOP LINE */
            20% {
              clip-path: polygon(
                0 0,
                100% 0,
                0 0,
                0 0
              );
            }

            /* RIGHT SIDE */
            40% {
              clip-path: polygon(
                0 0,
                100% 0,
                100% 100%,
                0 0
              );
            }

            /* BOTTOM LINE */
            60% {
              clip-path: polygon(
                0 0,
                100% 0,
                100% 100%,
                0 100%
              );
            }

            /* LEFT SIDE + COMPLETE BORDER */
            80% {
              clip-path: polygon(
                0 0,
                100% 0,
                100% 100%,
                0 100%
              );
            }

            /* RESET */
            100% {
              clip-path: polygon(
                0 0,
                0 0,
                0 0,
                0 0
              );
            }
          }


          /* =====================================================
             TIMELINE LINE
          ===================================================== */

          @keyframes timelineLine {
            0% {
              height: 0%;
            }

            28% {
              height: 0%;
            }

            38% {
              height: 50%;
            }

            61% {
              height: 50%;
            }

            71% {
              height: 100%;
            }

            100% {
              height: 100%;
            }
          }


          /* =====================================================
             TIMELINE DOT 1
          ===================================================== */

          @keyframes timelineDot1 {
            0%,
            5% {
              background-color: #2563EB;
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.45);
              transform: scale(1);
            }

            10%,
            20% {
              background-color: #2563EB;
              box-shadow:
                0 0 0 5px rgba(37, 99, 235, 0.15),
                0 0 14px rgba(37, 99, 235, 0.35);
              transform: scale(1.12);
            }

            25%,
            100% {
              background-color: #2563EB;
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
              transform: scale(1);
            }
          }


          /* =====================================================
             TIMELINE DOT 2
          ===================================================== */

          @keyframes timelineDot2 {
            0%,
            30% {
              background-color: #CBDFF5;
              box-shadow: none;
              transform: scale(1);
            }

            38%,
            43% {
              background-color: #2563EB;
              box-shadow:
                0 0 0 5px rgba(37, 99, 235, 0.15),
                0 0 14px rgba(37, 99, 235, 0.35);
              transform: scale(1.12);
            }

            48%,
            55% {
              background-color: #2563EB;
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
              transform: scale(1);
            }

            100% {
              background-color: #2563EB;
            }
          }


          /* =====================================================
             TIMELINE DOT 3
          ===================================================== */

          @keyframes timelineDot3 {
            0%,
            63% {
              background-color: #CBDFF5;
              box-shadow: none;
              transform: scale(1);
            }

            71%,
            76% {
              background-color: #2563EB;
              box-shadow:
                0 0 0 5px rgba(37, 99, 235, 0.15),
                0 0 14px rgba(37, 99, 235, 0.35);
              transform: scale(1.12);
            }

            81%,
            90% {
              background-color: #2563EB;
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
              transform: scale(1);
            }

            100% {
              background-color: #CBDFF5;
            }
          }


          /* =====================================================
             REDUCED MOTION
          ===================================================== */

          @media (prefers-reduced-motion: reduce) {

            .timeline-dot {
              animation: none !important;
              background-color: #2563EB !important;
            }

            .clients-border::after {
              animation: none !important;
              clip-path: none !important;
            }
          }
        `}
      </style>

    </div>
  );
};

export default AboutPage;
