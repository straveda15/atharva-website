import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { projectsData } from "../data/projectsData";

const getHighlightGradient = (idx) => {
  const gradients = [
    "bg-gradient-to-br from-[#FEFCE8] via-[#FEF08A]/30 to-[#FDE047]/40 border-[#FDE047]/80", // Yellow
    "bg-gradient-to-br from-[#FFF1F2] via-[#FFE4E6]/30 to-[#FECDD3]/50 border-[#FECDD3]/80", // Pink
    "bg-gradient-to-br from-[#ECFDF5] via-[#D1FAE5]/30 to-[#A7F3D0]/50 border-[#A7F3D0]/80", // Green
    "bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE]/30 to-[#BFDBFE]/50 border-[#BFDBFE]/80", // Blue
  ];
  return gradients[idx % gradients.length];
};

const ProjectDetailPage = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === projectSlug);

  useEffect(() => {
    if (!project && projectSlug) {
      navigate("/projects", { replace: true });
    }
  }, [project, projectSlug, navigate]);

  if (!project) {
    return (
      <div className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-[#102A43]">Project Not Found</h2>
        <Link
          to="/projects"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0098db] px-5 py-2.5 text-sm font-bold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-[#102A43]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full bg-white pt-6 pb-6 sm:pt-8 sm:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Left Back Arrow */}
          <div className="mb-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#102A43] transition-colors hover:text-[#0098db]"
              title="Back to All Projects"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.2]" />
              <span>Back to Projects</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
            {/* Left Header: Client Name & Description */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-4xl lg:text-[40px] lg:leading-tight">
                  {project.client}
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569] text-justify">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/919890061374?text=Hello%20Atharva%20Enterprises,%20I%20am%20interested%20in%20learning%20more%20about%20your%20project%20execution%20for%20${encodeURIComponent(
                    project.client
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full bg-[#0098db] px-5 py-2.5 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0082bd]"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>

                <div className="flex items-center gap-2 text-sm font-medium text-[#475569]">
                  <ShieldCheck className="h-5 w-5 text-[#059669] shrink-0" />
                  <span>Successfully Delivered & Commissioned</span>
                </div>
              </div>
            </div>

            {/* Middle Vertical Blue Line on Desktop */}
            <div className="hidden lg:block w-[2px] bg-[#0098db] shrink-0 self-stretch rounded-full" />

            {/* Mobile Horizontal Blue Line Separator */}
            <div className="h-[2px] w-20 bg-[#0098db] rounded-full my-2 lg:hidden" />

            {/* Right: Project Information & Execution Overview (not in card, directly added) */}
            <div className="flex-1 flex flex-col justify-start">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Project Information
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl lg:text-[34px] lg:leading-tight">
                Execution Overview & Methodology
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#334155] text-justify">
                {project.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT SPECIFICATIONS & SCOPE OF WORK (SIDE BY SIDE FOLDER-TAB CARDS)
      ========================================================= */}
      <section className="bg-white py-8 sm:py-10 border-t border-[#F1F5F9]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Card: Project Specifications */}
            <div className="relative flex flex-col">
              {/* Header row with Title + Pill on left, and Folder Tab on right */}
              <div className="flex items-end justify-between px-1">
                <div className="flex flex-wrap items-center gap-2.5 pb-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A43]">
                    Project Specifications
                  </h3>
                  <span className="rounded-full border border-[#CBD5E1] bg-white px-3 py-0.5 text-xs font-semibold text-[#64748B] shadow-2xs">
                    Specifications
                  </span>
                </div>
                {/* Tab protruding at the top right */}
                <div className="relative z-10 -mb-[1px] h-8 sm:h-9 w-20 sm:w-28 rounded-t-2xl border-t border-x border-[#E2E8F0] bg-[#F4F5F8]" />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between rounded-2xl rounded-tr-none border border-[#E2E8F0] bg-[#F4F5F8] p-6 sm:p-7 shadow-[0_2px_12px_rgba(16,42,67,0.03)]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Client Name</span>
                      <span className="font-bold text-[#102A43]">{project.client}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Location</span>
                      <span className="font-bold text-[#102A43]">{project.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Sector</span>
                      <span className="font-bold text-[#102A43]">{project.sector}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Scope Type</span>
                      <span className="font-bold text-[#102A43]">{project.projectType}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Execution Standard</span>
                      <span className="font-bold text-[#102A43]">Turnkey EPC & Electrical Infrastructure</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <div className="text-sm sm:text-[15px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">Statutory Approvals</span>
                      <span className="font-bold text-[#102A43]">CEIG & DISCOM Compliance Handled</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm font-medium text-[#64748B]">
                    Verified Technical Specifications · Turnkey Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Scope of Work */}
            <div className="relative flex flex-col">
              {/* Header row with Title + Pill on left, and Folder Tab on right */}
              <div className="flex items-end justify-between px-1">
                <div className="flex flex-wrap items-center gap-2.5 pb-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A43]">
                    Scope of Work
                  </h3>
                  <span className="rounded-full border border-[#FDBA74] bg-[#FFF7ED] px-3 py-0.5 text-xs font-semibold text-[#EA580C] shadow-2xs">
                    Deliverables & Execution
                  </span>
                </div>
                {/* Tab protruding at the top right */}
                <div className="relative z-10 -mb-[1px] h-8 sm:h-9 w-20 sm:w-28 rounded-t-2xl border-t border-x border-[#FDBA74] bg-[#FEF3EB]" />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between rounded-2xl rounded-tr-none border border-[#FDBA74] bg-[#FEF3EB] p-6 sm:p-7 shadow-[0_2px_12px_rgba(234,88,12,0.04)]">
                <ul className="space-y-3.5">
                  {project.scopeOfWork.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-[#1E293B]"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C] stroke-[2.5]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Footer Note */}
                <div className="mt-6 pt-4 border-t border-[#FDBA74]/50">
                  <p className="text-xs sm:text-sm font-bold text-[#EA580C]">
                    {project.scopeOfWork.length} Scope Deliverables · 100% Commissioned Scope
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL HIGHLIGHTS (GRADIENT CARDS)
      ========================================================= */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="bg-white py-6 sm:py-8 border-t border-[#F1F5F9]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Technical Execution
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Key Technical Highlights & Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-5 sm:p-6 shadow-2xs transition-all hover:shadow-xs ${getHighlightGradient(
                    idx
                  )}`}
                >
                  <h3 className="text-lg font-bold text-[#102A43]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetailPage;
