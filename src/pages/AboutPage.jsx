
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

const storyPoints = [
  "Established in 2005, building on the legacy of Jitendra Electricals.",
  "Engineering experience dating back to 1970.",
  "Electrical solutions for industrial, commercial, MSEDCL and residential sectors.",
  "Focused on safety, reliability and efficient project execution.",
  "Government Licensed Electrical Contractor delivering professional electrical solutions.",
  "Expertise in electrical infrastructure, substation works and electrification projects.",
  "Committed to safety, quality workmanship and reliable project execution.",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutPage = () => {
  return (
    <div className="about-page w-full bg-[#EDE9EA] text-[#102A43]">
      {/* OUR STORY + HISTORICAL MILESTONES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-5 sm:py-6 lg:py-7"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* LEFT — OUR STORY */}
            <motion.div variants={fadeUp}>
              <div className="mb-2 flex items-center gap-3">
                <p className="section-label">Our Story</p>
              </div>

              <h2 className="section-heading max-w-3xl">
                A Legacy Built on Experience, Engineering and Reliability
              </h2>

              {/* STORY POINTS */}
              <ul className="mt-3 space-y-2">
                {storyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-[#2563EB]"
                      strokeWidth={2}
                    />
                    <p className="section-paragraph">{point}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1D4ED8]"
                >
                  Explore Our Projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — HISTORICAL MILESTONES */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="rounded-lg border border-[#E2E8F0] bg-gray-100 p-4 sm:p-5 lg:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5 shrink-0 text-[#2563EB]" />

                <h3 className="section-subheading">
                  Our Historical Milestones
                </h3>
              </div>

              <div className="relative">
                <div className="absolute bottom-5 left-[8px] top-5 w-[2px] bg-[#CBDFF5]" />

                <div
                  className="absolute left-[8px] top-5 z-[1] w-[2px] bg-[#2563EB]"
                  style={{
                    animation: "timelineLine 6s ease-in-out infinite",
                  }}
                />

                {/* 1970 */}
                <div className="relative flex gap-4 pb-5">
                  <div
                    className="timeline-dot relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation: "timelineDot1 6s ease-in-out infinite",
                    }}
                  />

                  <div className="min-w-0">
                    <p className="timeline-year">1970</p>

                    <h4 className="section-subheading mt-1">
                      Jitendra Electricals Founded
                    </h4>

                    <p className="section-paragraph mt-1">
                      Commenced operations focusing on industrial wiring,
                      retail commercial installations, and localized
                      distribution networks.
                    </p>
                  </div>
                </div>

                {/* 2005 */}
                <div className="relative flex gap-4 pb-5">
                  <div
                    className="timeline-dot relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation: "timelineDot2 6s ease-in-out infinite",
                    }}
                  />

                  <div className="min-w-0">
                    <p className="timeline-year">2005</p>

                    <h4 className="section-subheading mt-1">
                      Atharva Enterprises Established
                    </h4>

                    <p className="section-paragraph mt-1">
                      Formalized corporate expansion into electrical
                      infrastructure, substation works and industrial
                      electrical projects.
                    </p>
                  </div>
                </div>

                {/* PRESENT & FUTURE */}
                <div className="relative flex gap-4">
                  <div
                    className="timeline-dot relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white bg-[#CBDFF5]"
                    style={{
                      animation: "timelineDot3 6s ease-in-out infinite",
                    }}
                  />

                  <div className="min-w-0">
                    <p className="timeline-year uppercase">
                      Present & Future
                    </p>

                    <h4 className="section-subheading mt-1">
                      50+ Years of Engineering Experience
                    </h4>

                    <p className="section-paragraph mt-1">
                      Continuing to deliver electrical engineering,
                      transmission and distribution, substation and
                      infrastructure solutions across multiple sectors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-4 sm:py-5 lg:py-6"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div variants={fadeUp} className="mb-4 sm:mb-5">
            <div className="mb-2 flex items-center gap-3">
              <p className="section-label">Why Choose Us</p>
            </div>

            <h2 className="section-heading">
              Why Choose Atharva Enterprises
            </h2>
          </motion.div>

          <div className="grid overflow-hidden lg:grid-cols-[36%_64%]">
            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              className="flex min-h-[200px] items-center bg-blue-400 px-5 py-5 sm:min-h-[250px] sm:px-8 sm:py-6 lg:min-h-[390px] lg:px-9"
            >
              <div className="max-w-sm">
                <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
                  Key Advantages
                </p>

                <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[32px] lg:text-[36px]">
                  Built on Experience
                  <br />
                  Driven By
                  <br />
                  Excellence
                </h2>

                <p className="mt-3 max-w-sm text-[15px] leading-6 text-white/90">
                  Experience, technical expertise and dependable electrical
                  engineering solutions built around every project requirement.
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="bg-gray-100 px-4 py-5 sm:px-7 sm:py-6 lg:px-9 lg:py-6"
            >
              <div className="relative">
                <div className="absolute bottom-6 left-[23px] top-6 w-[2px] bg-[#D8E4F2]" />

                {/* POINT 1 */}
                <motion.div
                  variants={fadeUp}
                  className="relative flex gap-4 pb-5"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
                    1
                  </div>

                  <div className="pt-0.5">
                    <h3 className="section-subheading">
                      Legacy Since 1970
                    </h3>

                    <p className="section-paragraph mt-1">
                      Our engineering legacy dates back to 1970 through our
                      parent company, Jitendra Electricals, bringing decades
                      of industry experience.
                    </p>
                  </div>
                </motion.div>

                {/* POINT 2 */}
                <motion.div
                  variants={fadeUp}
                  className="relative flex gap-4 pb-5"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
                    2
                  </div>

                  <div className="pt-0.5">
                    <h3 className="section-subheading">
                      Government Licensed
                    </h3>

                    <p className="section-paragraph mt-1">
                      Government Licensed Electrical Contractor and Engineering
                      firm providing professional electrical infrastructure
                      solutions.
                    </p>
                  </div>
                </motion.div>

                {/* POINT 3 */}
                <motion.div
                  variants={fadeUp}
                  className="relative flex gap-4 pb-5"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
                    3
                  </div>

                  <div className="pt-0.5">
                    <h3 className="section-subheading">
                      Five Decades of Experience
                    </h3>

                    <p className="section-paragraph mt-1">
                      More than five decades of engineering experience
                      supporting diverse electrical infrastructure and project
                      requirements.
                    </p>
                  </div>
                </motion.div>

                {/* POINT 4 */}
                <motion.div
                  variants={fadeUp}
                  className="relative flex gap-4"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F1FB] text-lg font-bold text-[#1557A6] shadow-sm">
                    4
                  </div>

                  <div className="pt-0.5">
                    <h3 className="section-subheading">
                      Industrial & Commercial Expertise
                    </h3>

                    <p className="section-paragraph mt-1">
                      Experience in complete electrification and electrical
                      infrastructure for industrial and commercial facilities.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTORS WE SERVE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        className="w-full bg-[#EDE9EA] py-5 sm:py-6 lg:py-7"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* HEADER */}
          <motion.div variants={fadeUp} className="mb-5">
            <div className="mb-2 flex items-center gap-3">
              <p className="section-label">Sectors</p>
            </div>

            <h2 className="section-heading">
              Electrical Solutions Across Multiple Sectors
            </h2>

            <p className="section-paragraph mt-2 max-w-3xl">
              Our experience extends across industrial, commercial, MSEDCL and
              residential electrical requirements.
            </p>
          </motion.div>

          {/* SECTORS — STATIC ICONS AND TITLES */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;

                return (
                  <React.Fragment key={sector.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className="flex-1 px-1 py-3 lg:px-5 lg:py-2"
                    >
                      {/* ICON + TITLE */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10">
                          <Icon
                            className="h-5 w-5 text-[#2563EB]"
                            strokeWidth={1.8}
                          />
                        </div>

                        <h3 className="text-[18px] font-bold leading-6 text-[#102A43]">
                          {sector.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="section-paragraph mt-2 max-w-[250px] lg:ml-[52px]">
                        {sector.description}
                      </p>
                    </motion.div>

                    {/* DESKTOP VERTICAL DIVIDER */}
                    {index < sectors.length - 1 && (
                      <div className="hidden w-px bg-[#D1D5DB] lg:block" />
                    )}

                    {/* MOBILE HORIZONTAL DIVIDER */}
                    {index < sectors.length - 1 && (
                      <div className="block h-px w-full bg-[#D1D5DB] lg:hidden" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* GLOBAL TYPOGRAPHY + TIMELINE ANIMATION */}
      <style>
        {`
          .about-page {
            --heading-color: #102A43;
            --paragraph-color: #5F6C7B;
            --accent-color: #2563EB;
          }

          .about-page .section-label {
            color: var(--accent-color);
            font-size: 12px;
            font-weight: 600;
            line-height: 1.5;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .about-page .section-heading {
            color: var(--heading-color);
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }

          .about-page .section-subheading {
            color: var(--heading-color);
            font-size: 17px;
            font-weight: 700;
            line-height: 1.4;
          }

          .about-page .section-paragraph {
            color: var(--paragraph-color);
            font-size: 15px;
            font-weight: 400;
            line-height: 1.6;
          }

          .about-page .timeline-year {
            color: var(--accent-color);
            font-size: 13px;
            font-weight: 700;
            line-height: 1.5;
            letter-spacing: 0.04em;
          }

          @media (min-width: 640px) {
            .about-page .section-heading {
              font-size: 32px;
            }
          }

          @media (min-width: 1024px) {
            .about-page .section-heading {
              font-size: 36px;
            }
          }

          /* HISTORICAL TIMELINE LINE */
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

          /* TIMELINE DOT 1 */
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

          /* TIMELINE DOT 2 */
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

          /* TIMELINE DOT 3 */
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

          /* REDUCED MOTION */
          @media (prefers-reduced-motion: reduce) {
            .about-page *,
            .about-page *::before,
            .about-page *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
