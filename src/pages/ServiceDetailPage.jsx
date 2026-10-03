import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import { servicesData } from "../data/servicesData";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  // Support legacy URL alias if accessed directly
  const targetSlug =
    serviceSlug === "industrial-commercial"
      ? "hospitality-commercial-solutions"
      : serviceSlug;

  const service = servicesData.find((s) => s.slug === targetSlug);

  useEffect(() => {
    if (serviceSlug === "industrial-commercial") {
      navigate("/services/hospitality-commercial-solutions", { replace: true });
      return;
    }
    // If slug is unknown, fallback to services page
    if (!service && serviceSlug) {
      navigate("/services", { replace: true });
    }
  }, [service, serviceSlug, navigate]);

  return <ServiceDetail service={service || servicesData[0]} />;
};

export default ServiceDetailPage;
