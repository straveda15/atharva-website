import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";

// 01. Industrial Clients
const industrialClients = [
  {
    name: "Arhan Power",
    industry: "Electrical Infrastructure",
    location: "Mumbai",
  },
];

// 02. Architects & MEP Contractors - 15 Clients
const architectsAndMEPs = [
  { name: "Ar. Sanjay Pabari & Associates", location: "Nashik" },
  { name: "Ar. Rajiv Vishwasrao", location: "Pune" },
  { name: "Ar. Nitin Pathak & Associates", location: "Nashik" },
  { name: "Ar. Shoeb Shaikh & Associates", location: "Nashik" },
  { name: "Ar. Vishal Patel & Associates", location: "Mumbai" },
  { name: "Project Concept", location: "Mumbai" },
  { name: "Ar. Parag Deshpande", location: "Pune" },
  { name: "Ar. Yogesh Dhamne & Associates", location: "Nashik" },
  { name: "Ar. Nakul Bhavsar & Associates", location: "Nashik" },
  { name: "Ar. Atul Bora & Associates", location: "Nashik" },
  { name: "Ar. Dhanjay Mahale", location: "Nashik" },
  { name: "Ar. Kshitij Dhande & Associates", location: "Nashik" },
  { name: "Ar. Manjunath", location: "Mumbai" },
  { name: "Ar. Kabre Chaudhary & Associates", location: "Nashik" },
  { name: "Ar. Uday Aahire & Associates", location: "Nashik" },
];

// 03. Hospitality, Banking & Finance
const hospitalityAndFinance = [
  {
    name: "Hotel Enrise by Sayaji",
    industry: "Hospitality",
    location: "Nashik",
  },
  {
    name: "Energise Resort and Boutique",
    industry: "Hospitality",
    location: "Trimbakeshwar",
  },
  {
    name: "Prabhav Manas",
    industry: "Hospitality",
    location: "Igatpuri, Nashik",
  },
  {
    name: "The Blue Lake Resort",
    industry: "Hospitality",
    location: "Igatpuri, Nashik",
  },
  {
    name: "State Bank of India",
    industry: "Banking & Finance",
    location: "Nashik",
  },
  {
    name: "Samarth Sahkari Bank",
    industry: "Banking & Finance",
    location: "Nashik",
  },
];

// 04. Real Estate - 24 Clients
const realEstateClients = [
  { name: "Nisham Developers", location: "Nashik" },
  { name: "Janaki Group", location: "Nashik" },
  { name: "Aarohi Infra", location: "Nashik" },
  { name: "Charwak Construction", location: "Nashik" },
  { name: "Akshada Buildcon", location: "Nashik" },
  { name: "Swagat Developers", location: "Nashik" },
  { name: "Balaji Developers", location: "Nashik" },
  { name: "Kartik Buildcon", location: "Nashik" },
  { name: "Laxmi Builders and Developers", location: "Nashik" },
  { name: "Prabhav Construction", location: "Mumbai" },
  { name: "New Stop Venture (Fog City)", location: "Igatpuri" },
  { name: "Riddhi Siddhi Builders and Developers", location: "Nashik" },
  { name: "Archit Group Build. & Deve.", location: "Nashik" },
  { name: "Rohan Enterprises", location: "Nashik" },
  { name: "Aakar Buildcon", location: "Nashik" },
  { name: "Grandeur Realtors", location: "Nashik" },
  { name: "Niraj Builders & Developers", location: "Nashik" },
  { name: "Avani Builders & Developers", location: "Nashik" },
  { name: "Nirmitee Constructions", location: "Nashik" },
  { name: "Nilkanta Developers", location: "Nashik" },
  { name: "Reliable Constructions", location: "Nashik" },
  { name: "Thakkar Builders", location: "Mumbai" },
  { name: "Pacific Housing Corporation", location: "Nashik" },
  { name: "Rajput Constructions", location: "Nashik" },
];

// Animation settings
const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Reusable Client Table
const ClientTable = ({
  clients,
  thirdColumn = false,
  thirdColumnTitle = "Category / Role",
}) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[320px] table-fixed border-collapse bg-white text-left">
      <thead>
        <tr className="bg-[#F4F7FA]">
          <th
            className={`border border-[#D9D9D9] px-3 py-3 text-base font-bold text-black sm:px-4 sm:text-lg ${
              thirdColumn ? "w-[45%]" : "w-[55%]"
            }`}
          >
            Client Name
          </th>

          {thirdColumn && (
            <th className="w-[25%] border border-[#D9D9D9] px-3 py-3 text-base font-bold text-black sm:px-4 sm:text-lg">
              {thirdColumnTitle}
            </th>
          )}

          <th
            className={`border border-[#D9D9D9] px-3 py-3 text-base font-bold text-[#007EBA] sm:px-4 sm:text-lg ${
              thirdColumn ? "w-[30%]" : "w-[45%]"
            }`}
          >
            Location
          </th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client, index) => (
          <tr
            key={`${client.name}-${index}`}
            className="transition-colors duration-200 hover:bg-[#F4F8FB]"
          >
            <td className="break-words border border-[#D9D9D9] px-3 py-3 align-top text-base font-medium leading-6 text-black sm:px-4 sm:text-[17px]">
              {client.name}
            </td>

            {thirdColumn && (
              <td className="break-words border border-[#D9D9D9] px-3 py-3 align-top text-sm leading-6 text-black sm:px-4 sm:text-base">
                {client.industry || "—"}
              </td>
            )}

            <td className="break-words border border-[#D9D9D9] px-3 py-3 align-top text-base leading-6 text-[#007EBA] sm:px-4 sm:text-[16px]">
              {client.location}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Two-column layout for long client lists
const SplitClientTables = ({ clients, splitAt }) => {
  const leftClients = clients.slice(0, splitAt);
  const rightClients = clients.slice(splitAt);

  return (
    <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">
      <ClientTable clients={leftClients} />
      <ClientTable clients={rightClients} />
    </div>
  );
};

// Reusable Client Section
const ClientSection = ({ number, title, children }) => (
  <motion.section variants={itemVariants} className="group w-full">
    <h2 className="mb-4 flex items-center gap-3 text-xl font-bold leading-tight text-black transition-colors duration-300 sm:mb-5 sm:text-2xl lg:text-[28px]">
      <span className="shrink-0 text-[44px] font-extrabold leading-none text-black transition-colors duration-300 sm:text-[50px] lg:text-[56px]">
        {number}
      </span>

      <span className="text-black transition-colors duration-300 group-hover:text-[#007EBA]">
        {title}
      </span>
    </h2>

    {children}
  </motion.section>
);

// Reusable Background Section
const BackgroundSection = ({
  image,
  children,
  upperSection = false,
}) => (
  <section className="relative isolate w-full overflow-hidden bg-[#EDE9EA] py-6 sm:py-8 lg:py-10">
    {/* Background Image */}
    <div
      className={`pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat ${
        upperSection ? "bg-[position:center_20%]" : "bg-center"
      }`}
      style={{ backgroundImage: `url("${image}")` }}
      aria-hidden="true"
    />

    {/* Light Overlay */}
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${
        upperSection ? "bg-[#EDE9EA]/85" : "bg-[#EDE9EA]/65"
      }`}
      aria-hidden="true"
    />

    {/* Content */}
    <motion.div
      className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </motion.div>
  </section>
);

const ClientsPage = () => {
  return (
    <main className="w-full">
      {/* UPPER SECTION - IMG1 */}
      <BackgroundSection image={img1} upperSection>
        {/* Centered Page Introduction */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007EBA] sm:text-[13px]">
            Our Clients
          </p>

          <h1 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-black sm:text-3xl lg:text-[39px]">
            Our Esteemed Clients
          </h1>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-black sm:text-[16px]">
            Building trusted partnerships and delivering quality electrical
            engineering solutions across diverse industries.
          </p>
        </motion.div>

        {/* 01. Industrial Clients */}
        <div className="mb-8 sm:mb-10">
          <ClientSection number="01" title="Industrial Clients">
            <ClientTable
              clients={industrialClients}
              thirdColumn
              thirdColumnTitle="Category / Role"
            />
          </ClientSection>
        </div>

        {/* 02. Architects & MEP Contractors: 8 left, 7 right */}
        <div>
          <ClientSection
            number="02"
            title="Architects & MEP Contractors"
          >
            <SplitClientTables
              clients={architectsAndMEPs}
              splitAt={8}
            />
          </ClientSection>
        </div>
      </BackgroundSection>

      {/* LOWER SECTION - IMG2 */}
      <BackgroundSection image={img2}>
        {/* 03. Hospitality, Banking & Finance */}
        <div className="mb-8 sm:mb-10">
          <ClientSection
            number="03"
            title="Hospitality, Banking & Finance"
          >
            <ClientTable
              clients={hospitalityAndFinance}
              thirdColumn
              thirdColumnTitle="Category / Role"
            />
          </ClientSection>
        </div>

        {/* 04. Real Estate: 12 left, 12 right */}
        <div>
          <ClientSection number="04" title="Real Estate">
            <SplitClientTables
              clients={realEstateClients}
              splitAt={12}
            />
          </ClientSection>
        </div>
      </BackgroundSection>
    </main>
  );
};

export default ClientsPage;