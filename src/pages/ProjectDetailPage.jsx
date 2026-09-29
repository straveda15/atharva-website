import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Check,
  Building2,
  ShieldCheck,
  Zap,
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
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0098db] px-5 py-2.5 text-sm font-semibold text-white"
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

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Header */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-block rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0098db]">
                  {project.projectType}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#64748B]">
                  <MapPin className="h-3.5 w-3.5 text-[#0098db]" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl lg:text-[42px] lg:leading-tight">
                {project.client}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]">
                {project.description}
              </p>

              {/* Action Button */}
              <div className="mt-6 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/919422247738?text=Hello%20Atharva%20Enterprises,%20I%20am%20interested%20in%20learning%20more%20about%20your%20project%20execution%20for%20${encodeURIComponent(
                    project.client
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full bg-[#0098db] px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0082bd]"
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

            {/* Right Card: Quick Project Specs */}
            <div className="lg:col-span-4 w-full">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0098db] border-b border-[#F1F5F9] pb-3">
                  Project Specifications
                </h3>

                <div className="mt-4 space-y-3.5 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] block">Client Name</span>
                    <span className="font-bold text-[#102A43]">{project.client}</span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] block">Location</span>
                    <span className="font-bold text-[#102A43]">{project.location}</span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] block">Sector</span>
                    <span className="font-bold text-[#102A43]">{project.sector}</span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] block">Scope Type</span>
                    <span className="font-bold text-[#102A43]">{project.projectType}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW & SCOPE SECTION
      ========================================================= */}
      <section className="bg-white py-6 sm:py-8 border-t border-[#F1F5F9]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left: Detailed Overview */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Project Information
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Execution Overview & Methodology
              </h2>
              <p className="text-base sm:text-[17px] leading-relaxed text-[#334155]">
                {project.overview}
              </p>
            </div>

            {/* Right: Scope of Work Checklist */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Scope of Work
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Deliverables & Installations
              </h2>

              <ul className="mt-4 space-y-2.5">
                {project.scopeOfWork.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-[#334155]"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
