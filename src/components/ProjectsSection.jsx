import React from "react";
import { projectsData } from "../data/projectsData";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.avif";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";
import project10 from "../assets/project10.webp";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.webp";
import project13 from "../assets/project13.webp";
import project14 from "../assets/project 14.webp";
import project15 from "../assets/project15.webp";
import project16 from "../assets/project16.png";
import project17 from "../assets/project17.jpg";
import project18 from "../assets/project18.webp";
import project19 from "../assets/project19.jpg";

/* ------------------------------------------------------------------ */
/* Project Images                                                     */
/* ------------------------------------------------------------------ */

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
  9: project9,
  10: project10,
  11: project11,
  12: project12,
  13: project13,
  14: project14,
  15: project15,
  16: project16,
  17: project17,
  18: project18,
  19: project19,
};

/* ------------------------------------------------------------------ */
/* Additional Projects                                                */
/* ------------------------------------------------------------------ */

const additionalProjects = [
  {
    id: 9,
    client: "Go Green Cabs",
    location: "Nashik, Pune",
    slug: "go-green-cabs",
  },
  {
    id: 10,
    client: "Energise",
    location: "Trimbakeshwar",
    slug: "energise",
  },
  {
    id: 11,
    client: "Hotel Enrise by Sayaji",
    location: "Nashik",
    slug: "sayaji",
  },
  {
    id: 12,
    client: "The Blue Lake Resort",
    location: "Igatpuri",
    slug: "the-blue-lake-resort",
  },
  {
    id: 13,
    client: "State Bank of India",
    location: "Nashik",
    slug: "state-bank-of-india",
  },
  {
    id: 14,
    client: "Samarth Sahkari Bank",
    location: "Nashik",
    slug: "samarth-sahkari-bank",
  },
  {
    id: 15,
    client: "Samarth Diagnostics",
    location: "Nashik",
    slug: "samarth-diagnostics",
  },
  {
    id: 16,
    client: "Arhan Power",
    location: "Mumbai",
    slug: "arhan-power",
  },
  {
    id: 17,
    client:
      "Vidyavardhan's IDEA – Institute of Design, Environment and Architecture",
    location: "Nashik",
    slug: "vidyavardhans-idea",
  },
  {
    id: 18,
    client: "St. Lawrence High School and Junior College",
    location: "Nashik",
    slug: "st-lawrence-high-school-and-junior-college",
  },
  {
    id: 19,
    client: "Prabhav Manas",
    location: "Igatpuri, Nashik",
    slug: "prabhav-manas",
  },
];

/* ------------------------------------------------------------------ */
/* Image Scaling                                                      */
/* ------------------------------------------------------------------ */

const getCardImageClass = (id) => {
  switch (id) {
    case 1:
    case 7:
      return "scale-[1.9]";

    case 2:
    case 3:
      return "scale-[1.25]";

    case 4:
    case 5:
      return "max-w-[96%]";

    case 6:
      return "scale-[1.1]";

    case 8:
      return "max-w-[92%]";

    case 9:
    case 10:
      return "scale-[1.25]";

    case 11:
      return "max-w-[96%]";

    case 12:
      return "scale-[1.01]";

    case 13:
      return "scale-[0.9]";

    case 14:
      return "scale-[1.15]";

    case 15:
    case 16:
      return "scale-[0.9]";

    case 17:
      return "scale-[1.20]";

    case 18:
      return "scale-[1.10]";

    case 19:
      return "max-w-[96%]";

    default:
      return "max-w-[96%]";
  }
};

/* ------------------------------------------------------------------ */
/* Projects Section                                                   */
/* ------------------------------------------------------------------ */

const ProjectsSection = () => {
  /*
   * Update Arhan Power while preserving other project data.
   */

  const baseProjects = projectsData.map((project) => {
    if (Number(project.id) === 16) {
      return {
        ...project,
        id: 16,
        client: "Arhan Power",
        location: "Mumbai",
        slug: "arhan-power",
      };
    }

    return project;
  });

  /*
   * Add new projects that do not already exist.
   * Update details for projects already present.
   */

  const mergedProjects = baseProjects.map((project) => {
    const updatedProject = additionalProjects.find(
      (item) => Number(item.id) === Number(project.id)
    );

    return updatedProject
      ? { ...project, ...updatedProject }
      : project;
  });

  const newProjects = additionalProjects.filter(
    (newProject) =>
      !mergedProjects.some(
        (existingProject) =>
          Number(existingProject.id) === Number(newProject.id)
      )
  );

  const allMergedProjects = [...mergedProjects, ...newProjects];

  /*
   * Give projects without a location the default location Nashik.
   */

  const projectsWithLocations = allMergedProjects.map((project) => ({
    ...project,
    location:
      project.location && project.location.trim()
        ? project.location
        : "Nashik",
  }));

  /*
   * Display only projects with an imported image.
   * Keep Samarth Diagnostics hidden as before.
   */

  const allProjects = projectsWithLocations.filter(
    (project) => projectImages[Number(project.id)]
  );

  /*
   * Reusable project card.
   */

  const renderProjectCard = (project, isDuplicate = false) => (
    <div
      key={isDuplicate ? `duplicate-${project.id}` : project.id}
      className={`project-card flex h-[180px] w-[270px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-[#D8DDE5] bg-white px-4 py-3 shadow-[0_3px_10px_rgba(16,42,67,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(16,42,67,0.10)] sm:h-[215px] sm:w-[290px] sm:px-5${
        Number(project.id) === 15 ? " hidden" : ""
      }`}
    >
      {/* Centered Logo */}

      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <img
          src={projectImages[Number(project.id)]}
          alt={`${project.client} logo`}
          loading="lazy"
          draggable="false"
          className={`project-logo max-h-[135px] max-w-full object-contain ${getCardImageClass(
            Number(project.id)
          )}`}
        />
      </div>

      {/* Project Name and Location */}

      <div className="min-w-0 shrink-0 pt-2 text-center">
        <h3
          title={project.client}
          className={`text-[16px] font-bold leading-5 text-[#102A43] sm:text-[17px] ${
            Number(project.id) === 17
              ? "-mt-4 line-clamp-none"
              : "line-clamp-2"
          }`}
        >
          {project.client}
        </h3>

        {project.location && (
          <p className="mt-1 truncate text-[13px] font-semibold text-[#0098DB]">
            {project.location}
          </p>
        )}
      </div>
    </div>
  );

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
          gap: 16px;
          animation: projects-marquee 36s linear infinite;
          will-change: transform;
        }

        .projects-marquee-group {
          display: flex;
          flex-shrink: 0;
          gap: 16px;
        }

        .projects-marquee-track:hover,
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

        @media (min-width: 640px) {
          .projects-marquee-track,
          .projects-marquee-group {
            gap: 20px;
          }
        }

        @media (max-width: 639px) {
          .projects-marquee-track {
            animation-duration: 32s;
          }

          .project-card {
            -webkit-tap-highlight-color: transparent;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee-track {
            animation: none;
            overflow-x: auto;
          }

          .project-logo {
            transition: none;
          }
        }
      `}</style>

      {/* Section Header */}

      <div className="mx-auto mb-6 flex w-full max-w-7xl flex-col gap-3 px-4 sm:mb-7 sm:flex-row sm:items-end sm:px-6 lg:px-8">
        <div>
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
            Our Projects
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
            Powering Projects Across Multiple Sectors
          </h2>
        </div>
      </div>

      {/* Continuous Project Marquee */}

      {/* Fixed alignment: carousel and heading now share the same margins */}

      <div className="mx-auto box-border w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full min-w-0 overflow-hidden">
          {/* Left Fade */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#EDE9EA] to-transparent sm:w-6 lg:w-8" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#EDE9EA] to-transparent sm:w-6 lg:w-8" />

          <div className="projects-marquee-track">
            {/* First Group */}

            <div className="projects-marquee-group">
              {allProjects.map((project) => renderProjectCard(project))}
            </div>

            {/* Duplicate Group for Seamless Looping */}

            <div
              className="projects-marquee-group"
              aria-hidden="true"
            >
              {allProjects.map((project) =>
                renderProjectCard(project, true)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;