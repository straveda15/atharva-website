import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ClientsPage from "./pages/ClientsPage";

// Scroll to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-[#EDE9EA] text-gray-800">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/:serviceSlug"
              element={<ServiceDetailPage />}
            />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectSlug"
              element={<ProjectDetailPage />}
            />

            <Route path="/clients" element={<ClientsPage />} />

            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;