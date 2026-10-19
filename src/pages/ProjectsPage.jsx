import React, { useEffect, useState } from "react";
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

// Existing desktop project-card image sizing — unchanged
const getCardImageClass = (id) => {
  switch (id) {
    case 1:
      return "scale-[2.2] max-h-[115px]";
    case 2:
      return "scale-[1.65] max-h-[120px]";
    case 3:
      return "scale-[1.65] max-h-[120px]";
    case 4:
      return "max-h-[125px] max-w-[95%]";
    case 5:
      return "max-h-[135px] max-w-[90%]";
    case 6:
      return "scale-[1.5] max-h-[120px]";
    case 7:
      return "scale-[1.55] max-h-[125px]";
    case 8:
      return "max-h-[130px] max-w-[85%]";
    default:
      return "max-h-[120px] max-w-[90%]";
  }
};

// Existing desktop auto-project image sizing — unchanged
const getAutoImageClass = (id) => {
  switch (id) {
    case 1:
      return "scale-[2.8] max-h-[130px]";
    case 2:
      return "scale-[2.2] max-h-[135px]";
    case 3:
      return "scale-[2.2] max-h-[135px]";
    case 4:
      return "max-h-[140px] max-w-[98%]";
    case 5:
      return "max-h-[145px] max-w-[95%]";
    case 6:
      return "scale-[1.6] max-h-[115px]";
    case 7:
      return "scale-[2.0] max-h-[135px]";
    case 8:
      return "max-h-[140px] max-w-[90%]";
    default:
      return "max-h-[140px] max-w-[95%]";
  }
};

// Mobile-only sizing for automatic project logos.
// Desktop classes and appearance remain unchanged.
const getMobileAutoImageClass = (id) => {
  switch (id) {
    case 1:
      return "scale-[1.55] max-h-[210px] max-w-[98%]";
    case 2:
      return "scale-[1.25] max-h-[142px] max-w-[98%]";
    case 3:
      return "scale-[1.25] max-h-[132px] max-w-[98%]";
    case 4:
      return "scale-[0.90] max-h-[118px] max-w-[100%]";
    case 5:
      return "max-h-[128px] max-w-[98%]";
    case 6:
      return "max-h-[108px] max-w-[98%]";
    case 7:
      return "scale-[0.70] max-w-[98%]";
    case 8:
      return "max-h-[118px] max-w-[96%]";
    default:
      return "max-h-[115px] max-w-[98%]";
  }
};

const projectDescriptions = {
  1: "Electrical works for ready-mix concrete plants, pole-mounted substations, and highway toll plazas across Maharashtra.",
  2: "Electrical infrastructure and installation works at the BEL facility in Taloja, supporting reliable defence manufacturing operations.",
  3: "Electrical infrastructure, load extensions, and distribution panel structures supporting CNG pump expansion across multiple locations.",
  4: "Power distribution and electrical infrastructure supporting agricultural exports and cold-storage operations in Niphad, Nashik.",
  5: "Electrical engineering and installation works focused on reliable power distribution, safe installations, and efficient operations.",
  6: "Power infrastructure solutions designed to support dependable electrical supply, installation quality, and operational safety.",
  7: "Electrical contracting and infrastructure works focused on safe installations and reliable power distribution.",
  8: "Electrical infrastructure solutions delivered with a focus on quality execution, safety, and dependable performance.",
};

const getProjectDescription = (project) => {
  const description =
    typeof project.description === "string"
      ? project.description.trim()
      : "";

  return (
    description ||
    projectDescriptions[project.id] ||
    "Electrical engineering and contracting solutions focused on safe installations and reliable power distribution."
  );
};

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    if (projectsData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (projectsData.length === 0) {
    return null;
  }

  const autoProject =
    projectsData[currentProject] || projectsData[0];

  return (
    <div className="projects-page w-full overflow-x-clip bg-[#EDE9EA]">
      {/* TOP PROJECT SECTION */}
      <section className="w-full bg-[#EDE9EA] pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            {/* LEFT SIDE */}
            <div className="pt-1 text-left">
              <div className="mb-3.5 flex items-center gap-2.5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                  Our Projects
                </p>
              </div>

              <h1 className="max-w-2xl text-xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-xl lg:text-[42px] lg:leading-[1.18]">
                Electrical Engineering Projects
                <br className="hidden sm:block" />
                Delivered Across Multiple Sectors
              </h1>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#526579] sm:text-[17px]">
                Proven turnkey contracting expertise across public utilities,
                industrial manufacturing, agro-processing facilities, and
                commercial establishments across Maharashtra and beyond.
              </p>
            </div>

            {/* RIGHT AUTO PROJECT CARD */}
            <div className="w-full min-w-0">
              <Link
                to={`/projects/${autoProject.slug}`}
                className={`group flex min-h-[270px] min-w-0 flex-col items-center justify-center rounded-[24px] border ${autoProject.border} ${autoProject.gradient} px-4 py-6 text-center shadow-[0_4px_20px_rgba(16,42,67,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,42,67,0.1)] sm:min-h-[320px] sm:rounded-[32px] sm:px-8 sm:py-8`}
              >
                {/* RESPONSIVE AUTO LOGO */}
                <div className="flex h-[100px] w-full min-w-0 items-center justify-center overflow-hidden sm:h-32">
                  <img
                    key={autoProject.id}
                    src={projectImages[autoProject.id]}
                    alt={autoProject.client}
                    className={`block h-auto w-auto max-w-full object-contain object-center transition-transform duration-500 sm:hidden ${getMobileAutoImageClass(
                      autoProject.id
                    )}`}
                  />

                  {/* Desktop logo sizing kept unchanged */}
                  <img
                    key={`desktop-${autoProject.id}`}
                    src={projectImages[autoProject.id]}
                    alt={autoProject.client}
                    className={`hidden h-auto w-auto object-contain object-center transition-transform duration-500 sm:block ${getAutoImageClass(
                      autoProject.id
                    )}`}
                  />
                </div>

                <h2 className="mt-4 max-w-full break-words text-lg font-bold leading-snug tracking-tight text-[#102A43] sm:text-2xl">
                  {autoProject.client}
                </h2>

                <p className="mt-2.5 w-full max-w-md break-words text-left text-sm leading-[1.8] text-[#526579] sm:text-[14.5px]">
                  {getProjectDescription(autoProject)}
                </p>
              </Link>

              {/* AUTO PROJECT INDICATORS */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {projectsData.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setCurrentProject(index)}
                    aria-label={`Go to project ${project.client}`}
                    aria-current={
                      index === currentProject ? "true" : undefined
                    }
                    className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? "w-7 bg-[#2563EB]"
                        : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="w-full bg-[#EDE9EA] pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className={`group flex min-h-0 flex-col overflow-hidden rounded-[20px] border ${project.border} ${project.gradient} shadow-[0_3px_12px_rgba(16,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(16,42,67,0.09)] sm:min-h-[430px]`}
              >
                {/* PROJECT IMAGE */}
                <div className="flex h-44 w-full flex-shrink-0 items-center justify-center overflow-hidden border-b border-[#E2E8F0]/60 bg-white px-3 py-3 sm:h-48">
                  <div className="relative flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={projectImages[project.id]}
                      alt={project.client}
                      className={`h-auto w-auto object-contain object-center ${getCardImageClass(
                        project.id
                      )}`}
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="min-h-0 break-words text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#102A43] sm:min-h-[50px] sm:text-[21px]">
                    {project.client}
                  </h2>

                  <p className="mt-2 min-h-0 break-words text-[13px] font-medium text-[#2563EB] sm:min-h-[20px]">
                    {project.location}
                  </p>

                  <p className="mt-3 text-left text-[14px] leading-[1.8] text-[#526579] sm:mt-4 sm:min-h-[144px]">
                    {getProjectDescription(project)}
                  </p>

                  <div className="mt-auto pt-4 sm:pt-6">
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
    </div>
  );
};

export default ProjectsPage;