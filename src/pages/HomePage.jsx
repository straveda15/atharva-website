import React from "react";
import Hero from "../components/hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesSection />
        <AboutSection />
        <ProjectsSection/>
    </div>
  );
};

export default HomePage;
