
import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";

// MEP Contractors & Architects data
const mepArchitectPartners = [
  { name: "Ar. Sanjay Pabari & Associates", tag: "", city: "Nashik" },
  { name: "Project Concept", tag: "(PMC)", city: "Mumbai" },
  { name: "Ar. Dhanjay Mahale", tag: "", city: "Nashik" },
  {
    name: "Ar. Rajiv Vishwasrao",
    tag: "Architect & Planner",
    city: "Pune",
  },
  {
    name: "Ar. Parag Deshpande",
    tag: "Architect and Planner",
    city: "Pune",
  },
  { name: "Ar. Kshitij Dhande & Associates", tag: "", city: "Nashik" },
  { name: "Ar. Nitin Pathak & Associates", tag: "(PMC)", city: "Nashik" },
  { name: "Ar. Yogesh Dhamne and Associates", tag: "", city: "Nashik" },
  { name: "Ar. Manjunath", tag: "", city: "Mumbai" },
  { name: "Ar. Shoeb Shaikh and Associates", tag: "", city: "Nashik" },
  { name: "Ar. Nakul Bhavsar and Associates", tag: "", city: "Nashik" },
  { name: "Ar. Kabre Chaudhary & Associates", tag: "", city: "Nashik" },
  { name: "Ar. Vishal Patel and Associates", tag: "", city: "Mumbai" },
  { name: "Ar. Atul Bora and Associates", tag: "", city: "Nashik" },
  { name: "Ar. Uday Aahire and Associates", tag: "", city: "Nashik" },
];

// Our Esteemed Clients data
const clientsLeft = [
  { name: "Nisham Developers", location: "" },
  { name: "Janaki Group", location: "" },
  { name: "Aarohi Infra", location: "" },
  { name: "Charwak Construction", location: "" },
  { name: "Akshada Buildcon", location: "" },
  { name: "Swagat Developers", location: "" },
  { name: "Balaji Developers", location: "" },
  { name: "Kartik Buildcon", location: "" },
  { name: "Laxmi Builders And Developers", location: "" },
  { name: "Prabhav Construction Mumbai", location: "" },
  { name: "New Stop Venture (Fog City, Igatpuri)", location: "" },
  { name: "Riddhi Siddhi Builders And Developers", location: "" },
  { name: "Samarth Diagnostics", location: "Nashik" },
  { name: "Arhan Power", location: "Mumbai" },
  { name: "Energise", location: "Nashik" },
  { name: "Sayaji", location: "Nashik" },
];

const clientsRight = [
  { name: "Archit Group Build. & Deve.", location: "Nashik" },
  { name: "Rohan Enterprises", location: "Nashik" },
  { name: "Aakar Buildcon", location: "Nashik" },
  { name: "Grandeur Realtors", location: "Nashik" },
  { name: "Niraj Builders & Developers", location: "Nashik" },
  { name: "Avani Builders & Developers", location: "Nashik" },
  { name: "Nirmitee Constructions", location: "Nashik" },
  { name: "Nilkanta Developers", location: "" },
  { name: "Reliable Constructions", location: "Nashik" },
  { name: "Thakkar Builders", location: "Mumbai" },
  { name: "Pacific Housing Corporation", location: "Nashik" },
  { name: "Rajput Constructions", location: "Nashik" },
  { name: "The Blue Lake Resort", location: "Igatpuri, Nashik" },
  { name: "State Bank of India (SBI)", location: "Nashik" },
  { name: "Samarth Sahkari Bank", location: "Nashik" },
];

// Animation settings
const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Reusable client table
const ClientTable = ({ clients, startIndex }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[320px] table-fixed border-collapse bg-white text-left">
      <thead>
        <tr className="bg-[#F4F7FA]">
          <th className="w-[65%] border border-[#D9D9D9] px-3 py-3 text-base font-bold text-[#102A43] sm:px-4 sm:text-lg">
            Client Name
          </th>
          <th className="w-[35%] border border-[#D9D9D9] px-3 py-3 text-base font-bold text-[#102A43] sm:px-4 sm:text-lg">
            Location
          </th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client, index) => (
          <tr
            key={`${client.name}-${startIndex + index}`}
            className="transition-colors duration-200 hover:bg-[#F4F8FB]"
          >
            <td className="break-words border border-[#D9D9D9] px-3 py-3 align-top text-[14px] leading-6 text-black sm:px-4 sm:text-base">
              {client.name}
            </td>

            <td className="break-words border border-[#D9D9D9] px-3 py-3 align-top text-[14px] leading-6 text-blue-600 sm:px-4 sm:text-base">
              {client.location || "Nashik"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ClientsPage = () => {
  return (
    <main className="w-full">
      {/* COLLABORATIONS & NETWORKS */}
      <section className="relative isolate w-full overflow-hidden bg-[#EDE9EA] py-6 sm:py-8 lg:py-10">
        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
          aria-hidden="true"
        />

        {/* Image overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[#EDE9EA]/97"
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098DB] sm:text-[13px]">
              Collaborations & Networks
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A43] sm:text-3xl lg:text-[38px]">
              MEP Contractors & Architects
            </h2>

            <p className="mt-3 max-w-4xl text-justify text-sm leading-6 text-[#334155] sm:text-[17px] sm:leading-7">
              We work with trusted architects, planners, and builders to
              deliver successful projects.
            </p>
          </motion.div>

          {/* Partners list */}
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {mepArchitectPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                variants={itemVariants}
                className={`group flex items-start gap-4 py-4 transition-colors duration-300 hover:bg-white/40 sm:px-4 lg:px-5 ${
                  index % 3 !== 0
                    ? "lg:border-l lg:border-[#C9D1D9]"
                    : ""
                } ${
                  index >= 3 ? "sm:border-t sm:border-[#C9D1D9]" : ""
                }`}
              >
                <div className="shrink-0 pt-0.5 text-[25px] font-bold leading-8 text-[#0098DB]/65 transition-colors duration-300 group-hover:text-[#0098DB] sm:text-[29px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-base font-extrabold leading-7 text-[#102A43] transition-colors duration-300 group-hover:text-[#007EBA] sm:text-lg lg:text-[19px]">
                    {partner.name}
                  </h3>

                  {(partner.tag || partner.city) && (
                    <p className="mt-1 text-sm leading-6 text-[#64748B] sm:text-base">
                      {[partner.tag, partner.city]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* OUR ESTEEMED CLIENTS */}
      <section className="relative isolate w-full overflow-hidden bg-[#EDE9EA] py-6 sm:py-8 lg:py-10">
        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img2})` }}
          aria-hidden="true"
        />

        {/* Image overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[#EDE9EA]/85"
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-5 sm:mb-7">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
              Our Clients
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[36px]">
              Industries We Serve
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#475569] sm:text-base">
              Building trusted relationships across diverse industries.
            </p>

            <p className="mt-4 text-center text-xl font-extrabold uppercase tracking-[0.16em] text-[#0098DB] sm:text-2xl">
              Real Estate
            </p>
          </motion.div>

          {/* Client tables */}
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7"
          >
            <motion.div variants={itemVariants}>
              <ClientTable clients={clientsLeft} startIndex={0} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ClientTable clients={clientsRight} startIndex={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default ClientsPage;
