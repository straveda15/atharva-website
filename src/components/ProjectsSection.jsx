import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const getCardImageClass = (id) => {
  switch (id) {
    case 1: return "scale-[2.2] max-h-[115px]";
    case 2: return "scale-[1.65] max-h-[120px]";
    case 3: return "scale-[1.65] max-h-[120px]";
    case 4: return "max-h-[125px] max-w-[95%]";
    case 5: return "max-h-[135px] max-w-[90%]";
    case 6: return "scale-[1.5] max-h-[120px]";
    case 7: return "scale-[1.55] max-h-[125px]";
    case 8: return "max-h-[130px] max-w-[85%]";
    default: return "max-h-[120px] max-w-[90%]";
  }
};

// Show only first 3 projects on homepage
const homeProjects = projectsData.slice(0, 3);

const ProjectsSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-7 sm:mb-9">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#2563EB]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
              Our Projects
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
                Powering Projects Across Multiple Sectors
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#5F6C7B] sm:text-[16px]">
                A selection of electrical infrastructure projects delivered
                across industrial, commercial and other sectors.
              </p>
            </div>

            {/* VIEW ALL PROJECTS */}
            <Link
              to="/projects"
              className="inline-flex w-fit shrink-0 items-center gap-2 text-[16px] font-bold text-[#2563EB] transition-all duration-200 hover:gap-3"
            >
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* PROJECT CARDS WITH IMAGES */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-[20px] border ${project.border} ${project.gradient} shadow-[0_3px_12px_rgba(16,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(16,42,67,0.09)]`}
            >
              {/* PROJECT IMAGE */}
              <div className="flex h-44 sm:h-48 w-full flex-shrink-0 items-center justify-center overflow-hidden border-b border-[#E2E8F0]/60 bg-white px-3 py-3">
                <div className="relative flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={projectImages[project.id]}
                    alt={project.client}
                    className={`h-auto w-auto object-contain ${getCardImageClass(project.id)}`}
                  />
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-1 flex-col p-6">

                {/* PROJECT NAME */}
                <h3 className="text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-[#102A43]">
                  {project.client}
                </h3>

                {/* LOCATION */}
                <p className="mt-2 text-[13px] font-medium text-[#2563EB]">
                  {project.location}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-4 line-clamp-3 text-[14px] leading-6 text-[#526579]">
                  {project.description}
                </p>

                {/* VIEW MORE */}
                <div className="mt-auto pt-6">
                  <Link
                    to={`/projects/${project.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[14px] font-semibold transition-all duration-200 hover:gap-3 ${project.button}`}
                  >
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;