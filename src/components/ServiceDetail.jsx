import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

// Customized 6 Features per Service (Rendered without icons, matching Image 2 UI)
const getServiceFeatures = (service) => {
  if (!service) return [];

  const slug = service.slug || "";

  if (slug === "transmission-distribution" || service.id === 1) {
    return [
      {
        title: "Transmission Line Erection",
        description:
          "Turnkey erection of 33 KV & 11 / 440 KVA high-tension overhead transmission lines and structural tower installations across diverse terrains.",
      },
      {
        title: "Substation Bay Works",
        description:
          "Precision erection of 33/11 KV and 33 KV substation bays supporting grid stability, network expansion, and reliable load distribution.",
      },
      {
        title: "Overhead Conductor Stringing",
        description:
          "Heavy-duty conductor installation, hardware stringing, disc insulators, and vibration dampers adhering to CEA technical norms.",
      },
      {
        title: "MSEDCL & Public Utility Grade",
        description:
          "Extensive engagement and proven contracting track record executing government and public infrastructure works across Maharashtra.",
      },
      {
        title: "Statutory Approvals & Liaisoning",
        description:
          "Complete coordination with electrical inspectorates, DISCOMs, and local authorities for seamless statutory clearances.",
      },
      {
        title: "Testing & Commissioning Support",
        description:
          "Full pre-commissioning testing, line charging supervision, and readiness certification ensuring zero-fault energisation.",
      },
    ];
  }

  if (slug === "substation-engineering" || service.id === 2) {
    return [
      {
        title: "Engineering & System Planning",
        description:
          "Complete electrical planning, single-line diagrams, layout development, equipment selection, and protection scheme coordination.",
      },
      {
        title: "Primary & Secondary Equipment",
        description:
          "Supply and erection of power transformers, circuit breakers, disconnectors, CT/PTs, control panels, and ACDB/DCDB systems.",
      },
      {
        title: "Substation SCADA & Automation",
        description:
          "Integration of intelligent electronic devices (IEDs), RTUs, remote monitoring, and modern tele-protection schemes.",
      },
      {
        title: "Earthing & Lightning Protection",
        description:
          "Engineered earth-mat grids, surge arresters, and lightning masts designed for high fault levels and personnel safety.",
      },
      {
        title: "Erection & Structural Mounting",
        description:
          "Switchyard gantry towers, support structures, conductor stringing, busbar installation, and cable termination works.",
      },
      {
        title: "Testing & Energisation Readiness",
        description:
          "Rigorous dielectric testing, transformer oil tests, relay trip checks, and full lifecycle commissioning up to grid synchronization.",
      },
    ];
  }

  if (slug === "erection-complex-pole-shifting" || service.id === 3) {
    return [
      {
        title: "Highway & Road Expansion Shifting",
        description:
          "Specialized electrical utility relocation, pole dismantling, and re-erection along highways, expressways, and municipal road widening corridors.",
      },
      {
        title: "HT & LT Overhead Line Diversion",
        description:
          "Planned rerouting and restringing of 33 KV, 22 KV, and 11 KV lines with minimal outage duration and reliable temporary feeds.",
      },
      {
        title: "Substation & DP Structure Relocation",
        description:
          "Safe dismantling, shifting, and re-commissioning of pole-mounted distribution transformers and double-pole (DP) assemblies.",
      },
      {
        title: "Underground Utility Conversion",
        description:
          "Converting complex overhead utility lines into robust underground trench cabling to facilitate highway development.",
      },
      {
        title: "Statutory Approvals & MSEDCL Permits",
        description:
          "Comprehensive liaisoning with MSEDCL, NHAI, PWD, and municipal authorities for planned shutdowns and CEIG clearances.",
      },
      {
        title: "Pre-Commissioning & Line Charging",
        description:
          "Insulation resistance verification, earthing checks, and supervised line energisation ensuring rapid restoration.",
      },
    ];
  }

  if (
    slug === "hospitality-commercial-solutions" ||
    slug === "industrial-commercial" ||
    service.id === 4
  ) {
    return [
      {
        title: "Hospitality Resorts & Luxury Hotels",
        description:
          "Turnkey electrification for luxury hotels, banquets, and resorts featuring aesthetic landscape lighting and load management.",
      },
      {
        title: "Healthcare Facility Electrical Systems",
        description:
          "Fail-safe power redundancy, isolated power panels, clean earthing, and specialized feeds for critical hospital diagnostics.",
      },
      {
        title: "HT/LT Distribution & Panels",
        description:
          "Custom Power Control Centers (PCC), Motor Control Centers (MCC), APFC panels, busduct trunking, and rising mains.",
      },
      {
        title: "Commercial & Corporate Infrastructure",
        description:
          "Structured cabling, centralized UPS systems, server room backup, and modern branch electrification for banks and offices.",
      },
      {
        title: "Safety, Earthing & Fire Protection",
        description:
          "Comprehensive earthing grids, lightning protection, surge suppression, and fire-alarm electrical interface.",
      },
      {
        title: "Demonstrated Commercial Track Record",
        description:
          "Trusted by Hotel Enrise, Sayaji, Enerjise Resort, State Bank of India (SBI), Samarth Diagnostics, and Patni Hospital.",
      },
    ];
  }

  if (slug === "battery-energy-storage" || service.id === 5) {
    return [
      {
        title: "Grid Stabilization",
        description:
          "Rapid millisecond response to frequency and voltage fluctuations, regulating grid balance under dynamic network demands.",
      },
      {
        title: "Renewable Energy Integration",
        description:
          "Storing surplus solar and renewable generation during peak production and discharging smoothly during peak consumption periods.",
      },
      {
        title: "Peak Shaving & Demand Management",
        description:
          "Discharging stored power during peak tariff hours to significantly reduce industrial demand charges and grid strain.",
      },
      {
        title: "Resilience & Microgrid Backup",
        description:
          "Instantaneous islanding and emergency backup power during grid blackouts or voltage sags for mission-critical operations.",
      },
      {
        title: "Power Conversion (PCS) Interfacing",
        description:
          "Electrical balance of plant, bidirectional inverters, step-up transformers, and DC-to-AC grid synchronization.",
      },
      {
        title: "EMS & Smart Monitoring",
        description:
          "Energy Management System (EMS) coordination, state-of-charge tracking, temperature monitoring, and safety interlocks.",
      },
    ];
  }

  if (slug === "gas-insulated-substation" || service.id === 6) {
    return [
      {
        title: "Compact Footprint GIS",
        description:
          "Requires 70–80% less space compared to conventional air-insulated switchyards, perfect for space-constrained urban projects.",
      },
      {
        title: "Ratings up to 220 KV",
        description:
          "Proven engineering and erection execution capabilities for high-voltage GIS substations up to 132 KV and 220 KV.",
      },
      {
        title: "Enclosed SF6 Insulation",
        description:
          "Immunity against environmental contaminants, dust, moisture, and chemical corrosion, guaranteeing decades of reliable operation.",
      },
      {
        title: "Turnkey GIS Engineering & SLD",
        description:
          "Complete layout development, gas compartment segregation, busduct routing, cable sealing ends, and outdoor bushings.",
      },
      {
        title: "Precision Equipment Erection",
        description:
          "Installation of circuit breakers, disconnectors, fast earthing switches, CT/PTs, and control & protection panels (CRP).",
      },
      {
        title: "SF6 Gas & High-Voltage Testing",
        description:
          "Gas tightness verification, moisture analysis, AC high-voltage withstand testing, and statutory CEIG energisation clearance.",
      },
    ];
  }

  if (slug === "clean-renewable-energy" || service.id === 7) {
    return [
      {
        title: "Utility-Scale Solar Parks",
        description:
          "Comprehensive electrical balance of plant (eBoP) for ground-mounted and mega-watt scale solar power generation plants.",
      },
      {
        title: "Power Evacuation Corridors",
        description:
          "Dedicated 33 KV & 11 KV evacuation lines connecting solar pooling substations to regional utility grid substations.",
      },
      {
        title: "Inverter-Duty Transformers",
        description:
          "Integration of multi-winding solar step-up transformers, pooling switchboards, ring main units, and HT switchgear.",
      },
      {
        title: "Pooling Switchyards & Metering",
        description:
          "Turnkey erection of main pooling switchyards, CT/PT metering kiosks, and SCADA-linked revenue metering units.",
      },
      {
        title: "Grid Interconnection & Compliance",
        description:
          "Synchronization testing, reactive power management, harmonics verification, and state transmission utility compliance.",
      },
      {
        title: "Testing, Inspection & Commissioning",
        description:
          "End-to-end statutory approvals, pre-commissioning checks, insulation testing, and successful grid energisation.",
      },
    ];
  }

  // Service 8: EV Charging Station & System Integration
  return [
    {
      title: "State-of-the-Art EV Charging Hardware",
      description:
        "High-efficiency AC and ultra-fast DC charging stations engineered for commercial, fleet, and public installations.",
    },
    {
      title: "OCPP 2.0.1 & OCPI 2.2.1 Protocols",
      description:
        "Open standard protocol support ensuring seamless interoperability, roaming capabilities, and central system connectivity.",
    },
    {
      title: "Real-Time Analytics & Telemetry",
      description:
        "Live visibility into energy consumption, charging cycles, uptime metrics, and performance analytics.",
    },
    {
      title: "Enterprise-Level Security",
      description:
        "Robust cybersecurity standards, encrypted data communications, and role-based access management.",
    },
    {
      title: "Mobile App & Web Dashboard",
      description:
        "Intuitive mobile application for EV drivers and centralized cloud dashboard for fleet and charge-point operators.",
    },
    {
      title: "Smart Network Locator & Management",
      description:
        "Intelligent charging station mapping, automated slot reservation, tariff management, and grid integration.",
    },
  ];
};

// 5 Key checklist points for Left Hero
const getServiceChecklist = (service) => {
  if (!service) return [];

  const slug = service.slug || "";

  // Transmission & Distribution Infrastructure — restored hero checklist
  if (slug === "transmission-distribution" || service.id === 1) {
    return [
      "Erection of 33 KV & 11 / 440 KVA transmission lines",
      "33 / 11 KV and 33 KV substation bay erection",
      "Complex pole-shifting & highway electrical infrastructure",
      "Statutory liaisoning with MSEDCL & local authorities",
      "Full turnkey LT/HT/EHV testing & commissioning",
    ];
  }

  if (slug === "substation-engineering" || service.id === 2) {
    return [
      "Substation engineering, SLD & layout development",
      "Supply & erection of power transformers & circuit breakers",
      "Control & protection panels (CRP) & Substation SCADA",
      "Engineered earthing grids & lightning protection systems",
      "Full pre-commissioning testing & energisation readiness",
    ];
  }

  if (slug === "erection-complex-pole-shifting" || service.id === 3) {
    return [
      "Turnkey pole relocation for highway & urban road widening",
      "33 KV, 22 KV & 11 KV overhead line diversion & stringing",
      "Double-pole (DP) structure & pole-mounted transformer shifting",
      "Statutory coordination with MSEDCL, NHAI, PWD & CEIG",
      "Rapid shutdown management with zero-fault line charging",
    ];
  }

  if (
    slug === "hospitality-commercial-solutions" ||
    slug === "industrial-commercial" ||
    service.id === 4
  ) {
    return [
      "Turnkey electrical infrastructure for hotels, resorts & hospitals",
      "HT/LT power distribution, custom PCC, MCC & APFC panels",
      "Busduct trunking, rising mains & internal cable containment",
      "Architectural, emergency & landscape lighting systems",
      "Full statutory liaisoning, load sanctioning & CEIG approvals",
    ];
  }

  if (slug === "battery-energy-storage" || service.id === 5) {
    return [
      "Grid stabilization & voltage frequency regulation",
      "Renewable energy storage & solar surplus integration",
      "Peak shaving & industrial maximum demand reduction",
      "Instantaneous microgrid backup during grid interruptions",
      "Power Conversion System (PCS) interfacing & EMS controls",
    ];
  }

  if (slug === "gas-insulated-substation" || service.id === 6) {
    return [
      "Gas Insulated Substation (GIS) execution up to 220 KV",
      "Compact footprint requiring 70–80% less space than AIS",
      "Sealed SF6 insulation immune to atmospheric pollution",
      "Complete HV switchgear, transformers, CT/PT & SCADA",
      "Rigorous SF6 gas purity, dielectric testing & CEIG approvals",
    ];
  }

  if (slug === "clean-renewable-energy" || service.id === 7) {
    return [
      "Utility-scale solar park electrical balance of plant (eBoP)",
      "Dedicated 33 KV / 11 KV power evacuation line corridors",
      "Inverter-duty step-up transformers & pooling switchyards",
      "DC/AC HT cabling, earthing grids & lightning protection",
      "Grid synchronization, harmonics compliance & commissioning",
    ];
  }

  return [
    "State-of-the-art AC & DC fast EV charging hardware",
    "OCPP 2.0.1 & OCPI 2.2.1 protocol interoperability",
    "Real-time telemetry, energy analytics & enterprise security",
    "Mobile driver app, web dashboard & smart locator",
    "Turnkey electrical infrastructure, DISCOM sanction & CEIG clearances",
  ];
};

// Small square cards for Key Applications / Highlights (Matching Image 1, NO ICONS)
const getSquareHighlights = (service) => {
  if (!service) return [];

  if (service.highlights && service.highlights.length > 0) {
    return service.highlights.map((h) => ({
      title: h.title,
      description: h.description,
    }));
  }
  return [];
};

// Sequential 6-color palette matching the reference image (Coral Pink, Mint Green, Sky Blue, Steel Blue, Violet, Amber)
const capsuleColors = [
  {
    ring: "#FCA5A5", // Coral pink ring
    ribbon: "#FAB3B9", // Soft pink ribbon connector
    accent: "#F43F5E", // Rose accent divider
    lightBg: "#FFF1F2",
  },
  {
    ring: "#86EFAC", // Mint sage green ring
    ribbon: "#BFE0D7", // Soft mint ribbon connector
    accent: "#10B981", // Emerald accent divider
    lightBg: "#ECFDF5",
  },
  {
    ring: "#7DD3FC", // Sky cyan blue ring
    ribbon: "#8FBFD6", // Soft sky ribbon connector
    accent: "#0284C7", // Cyan accent divider
    lightBg: "#F0F9FF",
  },
  {
    ring: "#93C5FD", // Steel blue ring
    ribbon: "#BFDBFE", // Soft ocean blue ribbon connector
    accent: "#2563EB", // Blue accent divider
    lightBg: "#EFF6FF",
  },
  {
    ring: "#D8B4FE", // Violet purple ring
    ribbon: "#E9D5FF", // Soft violet ribbon connector
    accent: "#7C3AED", // Purple accent divider
    lightBg: "#FAF5FF",
  },
  {
    ring: "#FDE68A", // Amber gold ring
    ribbon: "#FDE68A", // Soft amber ribbon connector
    accent: "#D97706", // Amber accent divider
    lightBg: "#FFFBEB",
  },
];

const ServiceDetail = ({ service }) => {
  if (!service) {
    return (
      <div className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-[#102A43]">Service Not Found</h2>
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0098db] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const checklist = getServiceChecklist(service);
  const features = getServiceFeatures(service);
  const squareHighlights = getSquareHighlights(service);

  const scopeList = service.scopeOfWork || [];
  const equipmentList = (service.equipmentList || []).slice(0, 6);
  const clientProjects = service.clientProjects || [];
  const commercialSectors = service.commercialSectors || [];

  // Check if right column has content to display (Scope of Work is removed for Transmission & Distribution)
  const isTransmission = service.slug === "transmission-distribution" || service.id === 1;
  const showScopeOfWork = scopeList.length > 0 && !isTransmission;
  const hasRightColumn = showScopeOfWork;

  return (
    <div className="w-full bg-white text-[#102A43]">
      {/* =========================================================
          1. HERO SECTION (REDUCED PADDING, NO BOTTOM BORDER)
      ========================================================= */}
      <section className="relative w-full bg-white pt-5 pb-6 sm:pt-6 sm:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Left Back Button - Simple Arrow without circle */}
          <div className="mb-3">
            <Link
              to="/services"
              className="inline-flex items-center text-[#102A43] transition-colors hover:text-[#0098db]"
              title="Back to All Services"
            >
              <ArrowLeft className="h-6 w-6 stroke-[2.2]" />
            </Link>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* LEFT COLUMN: Title, Blue Contact Button, Trust Badge, Checklist */}
            <div className="lg:col-span-6 xl:col-span-6">
              {/* Heading */}
              <h1 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-4xl lg:text-[42px] lg:leading-tight">
                {service.title}
              </h1>

              {/* Action Button (Blue as logo) + Trust Badge */}
              <div className="mt-5 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-5">
                <a
                  href="https://wa.me/919890061374?text=Hello%20Atharva%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full bg-[#0098db] px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0082bd]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>

                {/* Social Proof Badge */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#475569]">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#E0F2FE] text-[#0098db]">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#D1FAE5] text-[#059669]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#FEE2E2] text-[#DC2626]">
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <span className="text-[#102A43]">
                    Trusted by <strong className="text-[#0098db]">100+</strong> Enterprise Clients
                  </span>
                </div>
              </div>

              {/* Checklist — 5 Key Points */}
              {checklist && checklist.length > 0 && (
                <div className="mt-6 space-y-3">
                  {checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EBF5FF] text-[#0098db]">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-[15px] sm:text-base font-medium text-[#334155]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: HOW IT WORKS Card (Line ONLY from 1 to 3, nothing after 3) */}
            <div className="lg:col-span-6 xl:col-span-6 w-full">
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 sm:p-7 shadow-sm">
                {/* Card Top: Only HOW IT WORKS badge */}
                <div className="flex items-center justify-start border-b border-[#F1F5F9] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                    HOW IT WORKS
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#102A43]">
                  3 simple steps
                </h3>

                {/* Stepper Timeline (Line strictly between 1->2 and 2->3 only) */}
                <div className="mt-6 space-y-6">
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      1
                    </div>
                    {/* Line connecting step 1 to step 2 */}
                    <div className="absolute top-7 left-[13px] h-[calc(100%+24px)] w-[2px] bg-[#CBD5E1]" />
                    <div>
                      <h4 className="text-[15px] sm:text-base font-bold text-[#102A43]">
                        Share Scope & Site Details
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                        Provide electrical requirements, site parameters, and project load capacity.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      2
                    </div>
                    {/* Line connecting step 2 to step 3 */}
                    <div className="absolute top-7 left-[13px] h-[calc(100%+24px)] w-[2px] bg-[#CBD5E1]" />
                    <div>
                      <h4 className="text-[15px] sm:text-base font-bold text-[#102A43]">
                        Engineering & Erection Execution
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                        Procurement of certified equipment, structural erection, cabling, and panel mounting.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 (NO LINE BELOW 3) */}
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      3
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-base font-bold text-[#102A43]">
                        Testing & Grid Energisation
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                        Complete pre-commissioning checks, protection testing, and DISCOM synchronization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. EXECUTIVE OVERVIEW & METHODOLOGY + RIGHT-SIDE SCOPE OF WORK
      ========================================================= */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${hasRightColumn ? "lg:grid-cols-12 lg:gap-10" : "max-w-4xl"}`}>
            {/* LEFT COLUMN: Executive Overview, Methodology & Plain Equipment List */}
            <div className={`${hasRightColumn ? "lg:col-span-7" : "w-full"} space-y-6`}>
              {/* 1. Executive Overview */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A43]">
                  Executive Overview
                </h3>
                <p className="mt-2 text-base sm:text-[17px] leading-relaxed text-[#334155]">
                  {service.bestParagraph}
                </p>
              </div>

              {/* 2. Engineering Methodology */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A43]">
                  Engineering Methodology & Approach
                </h3>
                <p className="mt-2 text-[15px] sm:text-base leading-relaxed text-[#475569]">
                  {service.descriptionParagraph1}
                </p>
                <p className="mt-2 text-[15px] sm:text-base leading-relaxed text-[#475569]">
                  {service.descriptionParagraph2}
                </p>
                {service.turnkeyContext && (
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#64748B]">
                    <strong className="text-[#102A43]">Full Lifecycle Delivery: </strong>
                    {service.turnkeyContext}
                  </p>
                )}
              </div>

              {/* Major Equipment Handled for Substation & GIS */}
              {equipmentList.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-lg font-bold text-[#102A43] mb-3">
                    Major Equipment Handled
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {equipmentList.map((eq, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-[#334155]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0098db]" />
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Scope of Work (Hidden for Transmission & Distribution) */}
            {hasRightColumn && (
              <div className="lg:col-span-5 space-y-6">
                {showScopeOfWork && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5 mb-3.5">
                      <h4 className="text-lg font-bold text-[#102A43]">
                        Scope of Work
                      </h4>
                      <span className="text-xs font-bold text-[#0098db]">
                        {scopeList.length} Items
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {scopeList.map((scope, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-[#334155]"
                        >
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#0098db] stroke-[2.5]" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL SECTORS & ESTABLISHMENTS (HORIZONTAL CARDS WITH IMAGES)
      ========================================================= */}
      {commercialSectors.length > 0 && (
        <section className="bg-white py-8 sm:py-10 border-t border-[#F1F5F9]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Industry Focus
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Commercial Sectors & Establishments
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-[#64748B]">
                Specialized electrical contracting and turnkey power infrastructure across diverse commercial domains
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {commercialSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0098db]/50 hover:shadow-md"
                >
                  {/* Image Container with pure white background */}
                  <div className="flex h-28 sm:h-32 w-full items-center justify-center overflow-hidden bg-white p-2.5 sm:p-3 border-b border-[#F1F5F9]">
                    <img
                      src={sector.image}
                      alt={sector.sector}
                      className="h-auto w-auto max-h-[85px] sm:max-h-[95px] max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Heading & Details Under Image */}
                  <div className="flex flex-1 flex-col p-3 sm:p-3.5 bg-white">
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-[#102A43] leading-snug group-hover:text-[#0098db] transition-colors">
                      {sector.sector}
                    </h3>
                    {sector.clients && (
                      <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-[#64748B] line-clamp-2">
                        {sector.clients}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          3. CAPABILITIES SECTION (REDUCED GAP, NO BOTTOM BORDER LINE)
      ========================================================= */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
              End-to-End Capabilities
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
              Turnkey Engineering & Project Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] md:grid-cols-2 md:gap-x-12 md:divide-y-0">
            {/* Left Column */}
            <div className="space-y-5 divide-y divide-[#E2E8F0] md:space-y-6">
              {features.slice(0, 3).map((item, idx) => (
                <div key={idx} className={idx > 0 ? "pt-5 md:pt-6" : ""}>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#102A43]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 pb-2 text-sm sm:text-base leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-5 divide-y divide-[#E2E8F0] pt-5 md:space-y-6 md:pt-0">
              {features.slice(3, 6).map((item, idx) => (
                <div key={idx} className={idx > 0 ? "pt-5 md:pt-6" : ""}>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#102A43]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 pb-2 text-sm sm:text-base leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. KEY APPLICATIONS & HIGHLIGHTS (CAPSULE RIBBON UI)
      ========================================================= */}
      {squareHighlights.length > 0 && (
        <section className="bg-white py-8 sm:py-10 border-t border-[#F1F5F9]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Core Focus & Applications
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Key Technical Applications & Highlights
              </h2>
            </div>

            <div className="relative rounded-3xl bg-white p-4 sm:p-5 lg:p-7 shadow-xs overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 lg:gap-3 xl:gap-4 items-stretch justify-center">
                {squareHighlights.map((item, idx) => {
                  const color = capsuleColors[idx % capsuleColors.length];
                  const isNotLast = idx < squareHighlights.length - 1;

                  return (
                    <div
                      key={idx}
                      className="group relative flex flex-col items-center justify-center"
                    >
                      {/* Diagonal Connector Ribbon to next capsule on desktop */}
                      {isNotLast && (
                        <div
                          className="hidden lg:block absolute top-[10%] -right-[24%] w-[48%] h-[78%] z-0 pointer-events-none transform -skew-y-12 rounded-2xl opacity-80 transition-all duration-300 group-hover:opacity-95"
                          style={{ backgroundColor: color.ribbon }}
                        />
                      )}

                      {/* White Stadium Capsule Card */}
                      <div className="relative z-10 w-full min-h-[220px] sm:min-h-[240px] lg:min-h-[250px] rounded-[46px] sm:rounded-[50px] bg-white px-3.5 py-5 sm:px-4 sm:py-6 flex flex-col items-center justify-center text-center shadow-[0_8px_22px_rgba(16,42,67,0.06)] border border-slate-100/90 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(16,42,67,0.12)]">
                        <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wide text-[#102A43] leading-snug">
                          {item.title}
                        </h3>

                        <div
                          className="my-2.5 sm:my-3 h-1 w-6 rounded-full opacity-80"
                          style={{ backgroundColor: color.accent }}
                        />

                        <p className="text-[11px] sm:text-xs leading-relaxed text-[#526579]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;
