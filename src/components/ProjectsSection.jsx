import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    slug: "ashoka-infrastructure",
    client: "Ashoka Infrastructure",
    description:
      "Complete electrification of a Ready Mix Concrete Plant with pole mounted substation and toll plaza for expressways and highways at various locations in Maharashtra.",
    gradient:
      "bg-gradient-to-br from-[#F8FBFF] via-[#F2F7FD] to-[#EAF2FB]",
    border: "border-[#DCE7F5]",
    hoverBorder: "hover:border-[#C9D9EC]",
  },
  {
    id: 2,
    slug: "bharat-electronic-limited",
    client: "Bharat Electronic Limited",
    description:
      "Complete electrification of their facility at Taloja, Navi Mumbai. The project included electrical infrastructure development, distribution arrangements and associated electrical works required for the facility.",
    gradient:
      "bg-gradient-to-br from-[#F7FCFA] via-[#EEF9F5] to-[#E2F4EC]",
    border: "border-[#D5EADF]",
    hoverBorder: "hover:border-[#B9DCCB]",
  },
  {
    id: 3,
    slug: "indian-oil-corporation",
    client: "Indian Oil Corporation",
    description:
      "Electrification projects for IOCL facilities, including load extension, liaisoning work and DP structures for CNG pumps expansion.",
    gradient:
      "bg-gradient-to-br from-[#F8FBFF] via-[#F2F7FD] to-[#EAF2FB]",
    border: "border-[#DCE7F5]",
    hoverBorder: "hover:border-[#C9D9EC]",
  },
];

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

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.client} project details`}
              className={`group flex min-h-[245px] flex-col rounded-lg border ${project.border} ${project.gradient} p-5 shadow-[0_2px_8px_rgba(16,42,67,0.04)] transition-all duration-200 hover:-translate-y-[2px] ${project.hoverBorder} hover:shadow-[0_8px_20px_rgba(16,42,67,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 sm:p-6`}
            >

              {/* CLIENT */}
              <h3 className="text-[18px] font-semibold leading-[1.4] text-[#102A43] transition-colors duration-200 group-hover:text-[#2563EB]">
                {project.client}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 line-clamp-4 text-[14px] leading-6 text-[#64748B]">
                {project.description}
              </p>

              {/* READ MORE */}
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2563EB] transition-all duration-200 group-hover:gap-2.5">
                  Read More
                  <span aria-hidden="true">→</span>
                </span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;