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

// Sizing & scaling tuned for the 8 cards below
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

// Sizing for top-right auto card (compact, clean & proportional to reference UI)
const getAutoImageClass = (id) => {
  switch (id) {
    case 1:
      return "scale-[2.0] max-h-[90px]";
    case 2:
      return "scale-[1.5] max-h-[95px]";
    case 3:
      return "scale-[1.5] max-h-[95px]";
    case 4:
      return "max-h-[100px] max-w-[85%]";
    case 5:
      return "max-h-[105px] max-w-[80%]";
    case 6:
      return "scale-[1.4] max-h-[95px]";
    case 7:
      return "scale-[1.45] max-h-[95px]";
    case 8:
      return "max-h-[100px] max-w-[75%]";
    default:
      return "max-h-[100px] max-w-[80%]";
  }
};

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);

  /* AUTO CHANGE PROJECT EVERY 4 SECONDS */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const autoProject = projectsData[currentProject];

  return (
    <div className="w-full bg-white">

      {/* ================= TOP PROJECT SECTION ================= */}
      <section className="w-full bg-white pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* items-start ensures left heading and right card start on the EXACT SAME horizontal line */}
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">

            {/* ================= LEFT SIDE (Aligned to top) ================= */}
            <div className="text-left pt-1">

              {/* LABEL */}
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-[#2563EB]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
                  Our Projects
                </p>

                <span className="h-[2px] w-8 bg-[#2563EB]" />
              </div>

              {/* MAIN HEADING */}
              <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
                Electrical Engineering Projects
                <br className="hidden sm:block" />
                Delivered Across Multiple Sectors
              </h1>

              {/* SUBTITLE */}
              <p className="mt-5 max-w-lg text-[15px] sm:text-base leading-relaxed text-[#526579]">
                Proven turnkey contracting expertise across public utilities,
                industrial manufacturing, agro-processing facilities, and commercial
                establishments across Maharashtra and beyond.
              </p>
            </div>

            {/* ================= RIGHT AUTO PROJECT CARD (Matching reference image UI) ================= */}
            <div className="w-full">

              <Link
                to={`/projects/${autoProject.slug}`}
                className={`group flex min-h-[300px] sm:min-h-[320px] flex-col items-center justify-center rounded-[28px] sm:rounded-[32px] border ${autoProject.border} ${autoProject.gradient} px-6 py-7 sm:px-8 sm:py-8 text-center shadow-[0_4px_20px_rgba(16,42,67,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,42,67,0.1)]`}
              >

                {/* AUTO PROJECT LOGO / IMAGE */}
                <div className="flex h-28 sm:h-32 w-full items-center justify-center overflow-hidden">
                  <img
                    key={autoProject.id}
                    src={projectImages[autoProject.id]}
                    alt={autoProject.client}
                    className={`object-contain ${getAutoImageClass(
                      autoProject.id
                    )}`}
                  />
                </div>

                {/* AUTO PROJECT TITLE (Centered, bold) */}
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[#102A43] leading-snug">
                  {autoProject.client}
                </h2>

                {/* AUTO PROJECT DESCRIPTION (Centered, subtle, clean) */}
                <p className="mt-2.5 max-w-md text-sm sm:text-[14.5px] leading-relaxed text-[#526579]">
                  {autoProject.description}
                </p>

              </Link>

              {/* AUTO PROJECT INDICATORS */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {projectsData.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setCurrentProject(index)}
                    aria-label={`Go to project ${project.client}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
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

      {/* ================= EXISTING 8 PROJECT CARDS ================= */}
      <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {projectsData.map((project) => (
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
                      className={`h-auto w-auto object-contain ${getCardImageClass(
                        project.id
                      )}`}
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-6">

                  {/* PROJECT NAME */}
                  <h2 className="text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-[#102A43]">
                    {project.client}
                  </h2>

                  {/* LOCATION */}
                  <p className="mt-2 text-[13px] font-medium text-[#2563EB]">
                    {project.location}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-justify text-[14px] leading-6 text-[#526579]">
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

    </div>
  );
};

export default ProjectsPage;