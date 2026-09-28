
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "ashoka-infrastructure",
    client: "Ashoka Infrastructure",
    location: "Various Locations, Maharashtra",
    description:
      "Complete electrification of a Ready Mix Concrete Plant with pole-mounted substation and toll plaza electrical works for expressways and highways.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FF] to-[#DCEAFF]",
    border: "border-[#D8E5F5]",
    button:
      "border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
  },
  {
    id: 2,
    slug: "bharat-electronic-limited",
    client: "Bharat Electronic Limited",
    location: "Taloja, Navi Mumbai",
    description:
      "Complete electrification of the Bharat Electronic Limited facility at Taloja, Navi Mumbai, including associated electrical infrastructure works.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#F7F5FF] to-[#E8DDFF]",
    border: "border-[#E4D9F7]",
    button:
      "border-[#8B5CF6] text-[#7C3AED] hover:bg-[#8B5CF6] hover:text-white",
  },
  {
    id: 3,
    slug: "indian-oil-corporation",
    client: "Indian Oil Corporation",
    location: "Various Locations",
    description:
      "Electrification projects for IOCL facilities, including load extension, liaisoning work and DP structures for CNG pump expansion.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#FFF9EC] to-[#FFE89A]",
    border: "border-[#F4E5B5]",
    button:
      "border-[#F59E0B] text-[#D97706] hover:bg-[#F59E0B] hover:text-white",
  },
  {
    id: 4,
    slug: "sangle-agro-exports",
    client: "Sangle Agro Exports",
    location: "Niphad, Nashik",
    description:
      "Electrical infrastructure works for agro export and cold storage facilities at Niphad, Nashik.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#F1FCF8] to-[#C6F4E1]",
    border: "border-[#CDEBDD]",
    button:
      "border-[#10B981] text-[#059669] hover:bg-[#10B981] hover:text-white",
  },
  {
    id: 5,
    slug: "om-gayatri-framers",
    client: "Om Gayatri Framers Producer Company Ltd.",
    location: "Niphad, Nashik",
    description:
      "Electrical works for agro export and cold storage facilities at Niphad, Nashik.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#F4FBF8] to-[#D9F3E7]",
    border: "border-[#D1E8DC]",
    button:
      "border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white",
  },
  {
    id: 6,
    slug: "hero-motors",
    client: "Hero Motors (Arush Hero)",
    location: "Ashok Nagar, Madhya Pradesh",
    description:
      "Electrical works for showroom and service facilities of Hero Motors at Ashok Nagar, Madhya Pradesh.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#FFF5F5] to-[#FDE0E0]",
    border: "border-[#F1D5D5]",
    button:
      "border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white",
  },
  {
    id: 7,
    slug: "mahindra-tractors",
    client: "Mahindra Tractors (B C Jain Group)",
    location: "Ashok Nagar, Madhya Pradesh",
    description:
      "Electrical works for showroom and service facilities of Mahindra Tractors at Ashok Nagar, Madhya Pradesh.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#FFFBEF] to-[#F7EDB8]",
    border: "border-[#EDE3B7]",
    button:
      "border-[#CA8A04] text-[#A16207] hover:bg-[#CA8A04] hover:text-white",
  },
  {
    id: 8,
    slug: "bhavna-trading",
    client: "Bhavna Trading Co. (I) Ltd.",
    location: "Ashok Nagar, Madhya Pradesh",
    description:
      "Electrical works for a food processing unit of Bhavna Trading Co. (I) Ltd. at Ashok Nagar, Madhya Pradesh.",
    gradient:
      "bg-gradient-to-b from-[#FFFFFF] via-[#F7F5FF] to-[#E9E0FA]",
    border: "border-[#DED4EF]",
    button:
      "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white",
  },
];

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

          <h1 className="mx-auto max-w-6xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-4xl lg:text-[42px]">
            Electrical Engineering Projects
            <br className="hidden sm:block" />
            Delivered Across Multiple Sectors
          </h1>


        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {projects.map((project) => (
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
