
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Zap,
  Award,
  CheckCircle2,
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

const storyPoints = [
  "Established in 2005, building on the legacy of Jitendra Electricals.",
  "Engineering experience dating back to 1970.",
  "Electrical solutions for industrial, commercial, MSEDCL and residential sectors.",
  "Focused on safety, reliability and efficient project execution.",
  "Government Licensed Electrical Contractor delivering professional electrical solutions.",
  "Expertise in electrical infrastructure, substation works and electrification projects.",
  "Committed to safety, quality workmanship and reliable project execution.",
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

const mepArchitectPartners = [
  {
    column: "Column 1",
    items: [
      {
        fullName: "Ar. Sanjay Pabari & Associates, Nashik.",
        name: "Ar. Sanjay Pabari & Associates",
        tag: "Architectural Firm",
        city: "Nashik",
      },
      {
        fullName: "Ar. Rajiv Vishwasrao Architect & Planner, Pune.",
        name: "Ar. Rajiv Vishwasrao",
        tag: "Architect & Planner",
        city: "Pune",
      },
      {
        fullName: "Ar. Nitin Pathak & Associates (PMC), Nashik.",
        name: "Ar. Nitin Pathak & Associates",
        tag: "PMC (Project Management Consultant)",
        city: "Nashik",
      },
      {
        fullName: "Ar. Shoeb Shaikh and Ass; Nashik.",
        name: "Ar. Shoeb Shaikh and Ass;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
      {
        fullName: "Ar. Vishal Patel and Ass; Mumbai.",
        name: "Ar. Vishal Patel and Ass;",
        tag: "Architectural Associates",
        city: "Mumbai",
      },
    ],
  },
  {
    column: "Column 2",
    items: [
      {
        fullName: "Project Concept, (PMC), Mumbai.",
        name: "Project Concept",
        tag: "PMC (Project Management Consultant)",
        city: "Mumbai",
      },
      {
        fullName: "Ar. Parag Deshpande Architect and Planner, Pune.",
        name: "Ar. Parag Deshpande",
        tag: "Architect and Planner",
        city: "Pune",
      },
      {
        fullName: "Ar. Yogesh Dhamne and Ass; Nashik.",
        name: "Ar. Yogesh Dhamne and Ass;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
      {
        fullName: "Ar. Nakul Bhavsar and Ass; Nashik.",
        name: "Ar. Nakul Bhavsar and Ass;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
      {
        fullName: "Ar. Atul Bora and Ass; Nashik.",
        name: "Ar. Atul Bora and Ass;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
    ],
  },
  {
    column: "Column 3",
    items: [
      {
        fullName: "Ar. Dhanjay Mahale, Nashik.",
        name: "Ar. Dhanjay Mahale",
        tag: "Architect",
        city: "Nashik",
      },
      {
        fullName: "Ar. Kshitij Dhande & Asso; Nashik.",
        name: "Ar. Kshitij Dhande & Asso;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
      {
        fullName: "Ar. Manjunath, Mumbai.",
        name: "Ar. Manjunath",
        tag: "Architect",
        city: "Mumbai",
      },
      {
        fullName: "Ar. Kabre Chaudhary & Associates, Nashik.",
        name: "Ar. Kabre Chaudhary & Associates",
        tag: "Architectural Associates",
        city: "Nashik",
      },
      {
        fullName: "Ar. Uday Aahire and Ass; Nashik.",
        name: "Ar. Uday Aahire and Ass;",
        tag: "Architectural Associates",
        city: "Nashik",
      },
    ],
  },
];

const advantages = [
  {
    title: "Legacy Since 1970",
    description:
      "Our engineering legacy dates back to 1970 through our parent company, Jitendra Electricals, bringing decades of industry experience.",
  },
  {
    title: "Government Licensed",
    description:
      "Government Licensed Electrical Contractor and Engineering firm providing professional electrical infrastructure solutions.",
  },
  {
    title: "Five Decades of Experience",
    description:
      "More than five decades of engineering experience supporting diverse electrical infrastructure and project requirements.",
  },
  {
    title: "Industrial & Commercial Expertise",
    description:
      "Experience in complete electrification and electrical infrastructure for industrial and commercial facilities.",
  },
];

const milestones = [
  {
    year: "1970",
    title: "Jitendra Electricals Founded",
    description:
      "Commenced operations focusing on industrial wiring, retail commercial installations, and localized distribution networks.",
  },
  {
    year: "2005",
    title: "Atharva Enterprises Established",
    description:
      "Formalized corporate expansion into electrical infrastructure, substation works and industrial electrical projects.",
  },
  {
    year: "Present & Future",
    title: "50+ Years of Engineering Experience",
    description:
      "Continuing to deliver electrical engineering, transmission and distribution, substation and infrastructure solutions across multiple sectors.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const AboutPage = () => {
  return (
    <main className="about-page w-full overflow-x-clip bg-[#EDE9EA] text-[#102A43]">
      {/* OUR STORY + HISTORICAL MILESTONES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-6 sm:py-7 lg:py-8"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* OUR STORY */}
            <motion.div variants={fadeUp} className="min-w-0">
              <p className="section-label mb-2">Our Story</p>

              <h2 className="section-heading max-w-3xl">
                A Legacy Built on Experience, Engineering and Reliability
              </h2>

              <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {storyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#2563EB] sm:h-5 sm:w-5" />
                    <p className="section-paragraph min-w-0 flex-1">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  to="/projects"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1D4ED8]"
                >
                  Explore Our Projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            {/* HISTORICAL MILESTONES */}
            <motion.div
              variants={fadeUp}
              className="min-w-0 rounded-xl border border-[#E2E8F0] bg-gray-100 p-4 sm:p-5 lg:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <Award className="h-5 w-5 shrink-0 text-[#2563EB] sm:h-6 sm:w-6" />
                <h3 className="section-subheading">
                  Our Historical Milestones
                </h3>
              </div>

              {/* SINGLE TIMELINE: LINE ENDS AT THE THIRD DOT */}
              <div className="timeline-list">
                {/* Static track ends at the exact center of the third dot */}
                <div className="timeline-track" aria-hidden="true" />

                {/* One animated line only */}
                <div className="timeline-progress" aria-hidden="true" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`timeline-item ${
                      index < milestones.length - 1
                        ? "timeline-item-connected"
                        : "timeline-item-last"
                    }`}
                  >
                    <div
                      className={`timeline-dot timeline-dot-${index + 1}`}
                      aria-hidden="true"
                    />

                    <div className="timeline-content">
                      <p className="timeline-year">
                        {milestone.year}
                      </p>

                      <h4 className="section-subheading mt-1">
                        {milestone.title}
                      </h4>

                      <p className="section-paragraph mt-1.5">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-5 sm:py-6 lg:py-7"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
            <p className="section-label mb-2">Why Choose Us</p>
            <h2 className="section-heading">
              Why Choose Atharva Enterprises
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-[36%_64%]">
            {/* LEFT PANEL */}
            <motion.div
              variants={fadeUp}
              className="flex min-h-[220px] items-center bg-blue-400 px-5 py-7 sm:min-h-[250px] sm:px-8 lg:min-h-[390px] lg:px-9"
            >
              <div className="max-w-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  Key Advantages
                </p>

                <h3 className="text-[27px] font-bold leading-[1.2] tracking-tight text-white sm:text-[32px] lg:text-[36px]">
                  Built on Experience
                  <br className="hidden sm:block" /> Driven by Excellence
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/95 sm:text-base sm:leading-7">
                  Experience, technical expertise and dependable electrical
                  engineering solutions built around every project requirement.
                </p>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="min-w-0 bg-gray-100 px-4 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-7"
            >
              <div className="relative">
                <div className="absolute bottom-6 left-[21px] top-6 w-[2px] bg-[#D8E4F2]" />

                {advantages.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={`relative flex items-start gap-3.5 sm:gap-4 ${
                      index !== advantages.length - 1 ? "pb-5 sm:pb-6" : ""
                    }`}
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-base font-bold text-[#1557A6] shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="section-subheading">{item.title}</h3>
                      <p className="section-paragraph mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTORS WE SERVE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-6 sm:py-7 lg:py-8"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
            <p className="section-label mb-2">Sectors</p>

            <h2 className="section-heading max-w-3xl">
              Electrical Solutions Across Multiple Sectors
            </h2>

            <p className="section-paragraph mt-3 max-w-3xl">
              Our experience extends across industrial, commercial, MSEDCL and
              residential electrical requirements.
            </p>
          </motion.div>

          {/* RESPONSIVE SECTOR GRID */}
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  className={`min-w-0 border-[#D1D5DB] py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-3 ${
                    index > 0 ? "border-t sm:border-t-0" : ""
                  } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                    index >= 2 ? "lg:border-l" : ""
                  } ${index === 0 || index === 2 ? "lg:pl-0" : ""} ${
                    index === 3 ? "lg:pr-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 sm:h-11 sm:w-11">
                      <Icon
                        className="h-5 w-5 text-[#2563EB] sm:h-[22px] sm:w-[22px]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-[#102A43] sm:text-[19px]">
                      {sector.title}
                    </h3>
                  </div>

                  <p className="section-paragraph mt-2.5 sm:mt-3">
                    {sector.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* GLOBAL STYLES */}
      <style>{`
        .about-page {
          --heading-color: #102A43;
          --paragraph-color: #5F6C7B;
          --accent-color: #2563EB;
        }

        .about-page .section-label {
          color: var(--accent-color);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .about-page .section-heading {
          color: var(--heading-color);
          font-size: clamp(25px, 3vw, 36px);
          font-weight: 750;
          line-height: 1.2;
          letter-spacing: -0.025em;
          overflow-wrap: break-word;
          text-wrap: balance;
        }

        .about-page .section-subheading {
          color: var(--heading-color);
          font-size: clamp(15px, 1.5vw, 17px);
          font-weight: 700;
          line-height: 1.4;
          overflow-wrap: break-word;
        }

        .about-page .section-paragraph {
          color: var(--paragraph-color);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
          overflow-wrap: break-word;
        }

        .about-page .timeline-year {
          color: var(--accent-color);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.035em;
        }

        /* TIMELINE LAYOUT */
        .about-page .timeline-list {
          --dot-size: 18px;
          --dot-center: 9px;
          position: relative;
          isolation: isolate;
        }

        .about-page .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          min-width: 0;
        }

        .about-page .timeline-item-connected {
          padding-bottom: 24px;
        }

        .about-page .timeline-item-last {
          padding-bottom: 0;
        }

        .about-page .timeline-dot {
          position: relative;
          z-index: 3;
          display: block;
          width: var(--dot-size);
          height: var(--dot-size);
          flex: 0 0 var(--dot-size);
          margin-top: 4px;
          box-sizing: border-box;
          border: 3px solid #fff;
          border-radius: 50%;
          background: #CBDFF5;
          box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          transform: scale(1);
          transition:
            background-color 350ms ease,
            box-shadow 350ms ease,
            transform 350ms ease;
        }

        .about-page .timeline-content {
          min-width: 0;
          flex: 1;
        }

        /*
          Track starts at the center of dot 1.
          Its height is calculated from the actual item layout.
          It ends at the center of dot 3, never below it.
        */
        .about-page .timeline-track,
        .about-page .timeline-progress {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          left: var(--dot-center);
          top: 13px;
          width: 2px;
          height: calc(100% - 13px);
          border-radius: 999px;
          transform-origin: top center;
        }

        .about-page .timeline-track {
          background: #D7E5F6;
          opacity: 1;
        }

        .about-page .timeline-progress {
          height: calc(100% - 13px);
          background: linear-gradient(
            to bottom,
            #60A5FA 0%,
            #2563EB 50%,
            #1D4ED8 100%
          );
          box-shadow: 0 0 7px rgba(37, 99, 235, 0.2);
          transform: scaleY(0);
          animation: timelineDraw 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
        }

        @keyframes timelineDraw {
          0%,
          8% {
            transform: scaleY(0);
          }

          34%,
          48% {
            transform: scaleY(0.5);
          }

          72%,
          88% {
            transform: scaleY(1);
          }

          100% {
            transform: scaleY(0);
          }
        }

        .about-page .timeline-dot-1 {
          animation: timelineDotOne 6s ease-in-out infinite;
        }

        .about-page .timeline-dot-2 {
          animation: timelineDotTwo 6s ease-in-out infinite;
        }

        .about-page .timeline-dot-3 {
          animation: timelineDotThree 6s ease-in-out infinite;
        }

        @keyframes timelineDotOne {
          0%,
          8% {
            background: #CBDFF5;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }

          14%,
          28% {
            background: #2563EB;
            box-shadow:
              0 0 0 5px rgba(37, 99, 235, 0.13),
              0 0 12px rgba(37, 99, 235, 0.3);
            transform: scale(1.12);
          }

          34%,
          100% {
            background: #2563EB;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }
        }

        @keyframes timelineDotTwo {
          0%,
          32% {
            background: #CBDFF5;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }

          38%,
          46% {
            background: #2563EB;
            box-shadow:
              0 0 0 5px rgba(37, 99, 235, 0.13),
              0 0 12px rgba(37, 99, 235, 0.3);
            transform: scale(1.12);
          }

          52%,
          100% {
            background: #2563EB;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }
        }

        @keyframes timelineDotThree {
          0%,
          68% {
            background: #CBDFF5;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }

          74%,
          86% {
            background: #2563EB;
            box-shadow:
              0 0 0 5px rgba(37, 99, 235, 0.15),
              0 0 13px rgba(37, 99, 235, 0.35);
            transform: scale(1.12);
          }

          92%,
          100% {
            background: #CBDFF5;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            transform: scale(1);
          }
        }

        /* WHY CHOOSE US CONNECTOR */
        @media (max-width: 639px) {
          .about-page .timeline-item-connected {
            padding-bottom: 22px;
          }

          .about-page .timeline-list {
            --dot-size: 18px;
            --dot-center: 9px;
          }

          .about-page .section-heading {
            font-size: clamp(25px, 7vw, 32px);
          }

          .about-page .section-paragraph {
            font-size: 14px;
            line-height: 1.65;
          }
        }

        @media (min-width: 640px) {
          .about-page .timeline-item-connected {
            padding-bottom: 26px;
          }
        }

        @media (min-width: 1024px) {
          .about-page .timeline-item-connected {
            padding-bottom: 28px;
          }

          .about-page .timeline-list {
            --dot-size: 18px;
            --dot-center: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page .timeline-progress,
          .about-page .timeline-dot {
            animation: none !important;
          }

          .about-page .timeline-progress {
            transform: scaleY(1);
          }

          .about-page .timeline-dot {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;
