
import React from "react";
import { motion } from "framer-motion";
import { partnersData } from "../data/partnersData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TechnologyPartnersPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#EDE9EA] text-gray-800">
      {/* PAGE HEADER */}
      <section className="relative bg-[#EDE9EA] pt-10 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#007EBA] sm:text-sm">
            Authorized &amp; Certified Collaborations
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Technology Partners
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-black sm:text-base lg:text-[17px]">
            We collaborate with trusted technology partners to deliver
            reliable, high-quality electrical solutions backed by advanced
            technologies, certified products, and dependable technical support.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY PARTNER LOGOS */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {partnersData.map((partner) => (
              <motion.div
                key={partner.id}
                variants={cardVariants}
                className="flex h-32 w-full items-center justify-center rounded-lg bg-white/60 p-3 sm:h-36 sm:p-4"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`!h-auto !w-auto max-w-full object-contain ${
                    partner.id === 16
                      ? "max-h-32 sm:max-h-36 scale-120"
                      : "max-h-28 sm:max-h-32"
                  }`}
                  
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPartnersPage;
