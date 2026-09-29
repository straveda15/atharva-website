import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="w-full bg-white">
      {/* PAGE HEADER */}
      <section className="w-full bg-white pb-8 pt-10 sm:pb-10 sm:pt-12 lg:pb-12 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <div className="mx-auto mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#2563EB]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
              Our Projects
            </p>
            <span className="h-[2px] w-8 bg-[#2563EB]" />
          </div>

          <h1 className="mx-auto max-w-6xl text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[40px]">
            Electrical Engineering Projects
            <br className="hidden sm:block" />
            Delivered Across Multiple Sectors
          </h1>
        </div>
      </section>

      {/* PROJECT CARDS (Original 8 Cards UI) */}
      <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className={`group flex min-h-[330px] flex-col rounded-[20px] border ${project.border} ${project.gradient} p-6 shadow-[0_3px_12px_rgba(16,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(16,42,67,0.09)]`}
              >
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
