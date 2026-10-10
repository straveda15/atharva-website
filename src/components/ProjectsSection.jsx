
import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.avif";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
};

// Individual logo sizing
const getCardImageClass = (id) => {
  switch (id) {
    case 1:
      return "scale-[1.9]";
    case 2:
      return "scale-[1.25]";
    case 3:
      return "scale-[1.25]";
    case 4:
      return "max-w-[96%]";
    case 5:
      return "max-w-[96%]";
    case 6:
      return "scale-[1.1]";
    case 7:
      return "scale-[1.9]";
    case 8:
      return "max-w-[92%]";
    default:
      return "max-w-[96%]";
  }
};

const ProjectsSection = () => {
  // Display all 8 projects
  const allProjects = projectsData.filter(
    (project) => projectImages[project.id]
  );

  // Duplicate projects for seamless scrolling
  const scrollingProjects = [...allProjects, ...allProjects];

  return (
    <section className="w-full overflow-hidden bg-[#EDE9EA] py-9 sm:py-11 lg:py-12">
      <style>{`
        @keyframes projects-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .projects-marquee-track {
          display: flex;
          width: max-content;
          animation: projects-marquee 36s linear infinite;
          will-change: transform;
        }

        .projects-marquee-track:hover {
          animation-play-state: paused;
        }

        .projects-marquee-track:focus-within {
          animation-play-state: paused;
        }

        .project-logo {
          transform-origin: center;
          transition: transform 400ms ease;
        }

        .project-card:hover .project-logo {
          transform: scale(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee-track {
            animation: none;
          }

          .project-logo {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION HEADER */}
      <div className="mx-auto mb-6 flex w-full max-w-7xl flex-col gap-3 px-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
            Our Projects
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
            Powering Projects Across Multiple Sectors
          </h2>
        </div>

        <Link
          to="/projects"
          className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-[#2563EB] transition-colors duration-200 hover:text-[#1D4ED8] sm:text-base"
        >
          View All Projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* FLOATING PROJECT CARDS */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
        {/* Left fade edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#EDE9EA] to-transparent sm:w-6 lg:w-8" />

        {/* Right fade edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#EDE9EA] to-transparent sm:w-6 lg:w-8" />

        <div className="projects-marquee-track gap-4 px-4 sm:gap-5 sm:px-6 lg:gap-5 lg:px-8">
          {scrollingProjects.map((project, index) => (
            <Link
              key={`${project.id}-${index}`}
              to={`/projects/${project.slug}`}
              aria-label={`${project.client}, ${project.location}`}
              className="project-card group flex h-[180px] w-[270px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-[#D8DDE5] bg-gray-50 px-4 py-3 shadow-[0_3px_10px_rgba(16,42,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_8px_20px_rgba(16,42,67,0.10)] sm:h-[215px] sm:w-[290px] sm:px-5"
            >
              {/* PROJECT LOGO */}
              <div className="flex h-[110px] w-full items-center justify-center overflow-hidden">
                <img
                  src={projectImages[project.id]}
                  alt={`${project.client} logo`}
                  loading="lazy"
                  className={`project-logo max-h-[100px] max-w-[120%] object-contain ${getCardImageClass(
                    project.id
                  )}`}
                />
              </div>

              {/* PROJECT NAME AND LOCATION */}
              <div className="min-w-0">
                <h3 className="truncate text-[25px] font-bold leading-5 text-[#102A43] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-[20px]">
                  {project.client}
                </h3>

                <p className="mt-1 truncate text-[13px] font-semibold text-[#0098DB] sm:text-[13px]">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
