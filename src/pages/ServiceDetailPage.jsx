import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import { servicesData } from "../data/servicesData";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === serviceSlug);

  useEffect(() => {
    // If slug is unknown, fallback to first service or services index
    if (!service && serviceSlug) {
      navigate("/services", { replace: true });
    }
  }, [service, serviceSlug, navigate]);

  return <ServiceDetail service={service || servicesData[0]} />;
};

export default ServiceDetailPage;
