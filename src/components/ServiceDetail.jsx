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

// =========================================================
// 6 FEATURES PER SERVICE
// =========================================================
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

  // =========================================================
  // GIS
  // =========================================================
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

  // =========================================================
  // EV
  // =========================================================
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

// =========================================================
// 5 KEY CHECKLIST POINTS
// =========================================================
const getServiceChecklist = (service) => {
  if (!service) return [];

  const slug = service.slug || "";

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

  // =========================================================
  // GIS CHECKLIST
  // =========================================================
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

// =========================================================
// HIGHLIGHTS
// =========================================================
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

// =========================================================
// SERVICE DETAIL
// =========================================================
const ServiceDetail = ({ service }) => {
  if (!service) {
    return (
      <div className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-[#102A43]">
          Service Not Found
        </h2>

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

  // =========================================================
  // SERVICE DATA
  // =========================================================
  const scopeList = service.scopeOfWork || [];
  const equipmentList = service.equipmentList || [];
  const commercialSectors = service.commercialSectors || [];

  const isTransmission =
    service.slug === "transmission-distribution" || service.id === 1;

  const showScopeOfWork = scopeList.length > 0 && !isTransmission;

  const hasRightColumn = showScopeOfWork;

  return (
    <div className="w-full bg-white text-[#102A43]">
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative w-full bg-[#EDE9EA] pt-5 pb-6 sm:pt-6 sm:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
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

            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}
            <div className="lg:col-span-6 xl:col-span-6">

              <h1 className="text-2xl font-bold tracking-tight text-[#102A43] sm:text-4xl lg:text-[42px] lg:leading-tight">
                {service.title}
              </h1>

              {/* Contact + Trust */}
              <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">

                <a
                  href="https://wa.me/919890061374?text=Hello%20Atharva%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0098db] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0082bd] sm:gap-2 sm:px-6 sm:py-2.5 sm:text-[15px]"
                >
                  <span>Contact Us</span>

                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>

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
                    Trusted by{" "}
                    <strong className="text-[#0098db]">100+</strong>{" "}
                    Enterprise Clients
                  </span>
                </div>
              </div>

              {/* Checklist */}
              {checklist.length > 0 && (
                <div className="mt-6 space-y-3">

                  {checklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EBF5FF] text-[#0098db]">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>

                      <span className="text-[15px] font-medium text-[#334155] sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* =====================================================
                RIGHT COLUMN — HOW IT WORKS
            ===================================================== */}
            <div className="w-full lg:col-span-6 xl:col-span-6">

              <div className="rounded-3xl border border-[#E2E8F0] bg-gray-100 p-5 shadow-sm sm:p-7">

                <div className="flex items-center justify-start border-b border-[#F1F5F9] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                    HOW IT WORKS
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#102A43]">
                  3 simple steps
                </h3>

                <div className="mt-6 space-y-6">

                  {/* STEP 1 */}
                  <div className="relative flex items-start gap-4">

                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      1
                    </div>

                    <div className="absolute left-[13px] top-7 h-[calc(100%+24px)] w-[2px] bg-[#CBD5E1]" />

                    <div>
                      <h4 className="text-[15px] font-bold text-[#102A43] sm:text-base">
                        Share Scope & Site Details
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                        Provide electrical requirements, site parameters, and
                        project load capacity.
                      </p>
                    </div>

                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex items-start gap-4">

                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      2
                    </div>

                    <div className="absolute left-[13px] top-7 h-[calc(100%+24px)] w-[2px] bg-[#CBD5E1]" />

                    <div>
                      <h4 className="text-[15px] font-bold text-[#102A43] sm:text-base">
                        Engineering & Erection Execution
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                        Procurement of certified equipment, structural erection,
                        cabling, and panel mounting.
                      </p>
                    </div>

                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex items-start gap-4">

                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0098db] text-xs font-bold text-white shadow-xs">
                      3
                    </div>

                    <div>
                      <h4 className="text-[15px] font-bold text-[#102A43] sm:text-base">
                        Testing & Grid Energisation
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                        Complete pre-commissioning checks, protection testing,
                        and DISCOM synchronization.
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
          2. EXECUTIVE OVERVIEW + METHODOLOGY + SCOPE
      ========================================================= */}
      <section className="bg-[#EDE9EA] py-6 sm:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className={`grid gap-8 ${
              hasRightColumn
                ? "lg:grid-cols-12 lg:gap-10"
                : "max-w-4xl"
            }`}
          >

            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}
            <div
              className={`${
                hasRightColumn ? "lg:col-span-7" : "w-full"
              } space-y-6`}
            >

              {/* EXECUTIVE OVERVIEW */}
              <div>

                <h3 className="text-xl font-bold tracking-tight text-[#102A43] sm:text-2xl">
                  Executive Overview
                </h3>

                <p className="mt-2 text-base leading-relaxed text-[#334155] sm:text-[17px]">
                  {service.bestParagraph}
                </p>

              </div>

              {/* ENGINEERING METHODOLOGY */}
              <div>

                <h3 className="text-xl font-bold tracking-tight text-[#102A43] sm:text-2xl">
                  Engineering Methodology & Approach
                </h3>

                <p className="mt-2 text-[15px] leading-relaxed text-[#475569] sm:text-base">
                  {service.descriptionParagraph1}
                </p>

                <p className="mt-2 text-[15px] leading-relaxed text-[#475569] sm:text-base">
                  {service.descriptionParagraph2}
                </p>

                {service.turnkeyContext && (
                  <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-[15px]">
                    <strong className="text-[#102A43]">
                      Full Lifecycle Delivery:{" "}
                    </strong>

                    {service.turnkeyContext}
                  </p>
                )}

              </div>

              {/* =====================================================
                  MAJOR EQUIPMENT
              ===================================================== */}
              {equipmentList.length > 0 && (
                <div className="pt-2">

                  <h4 className="mb-3 text-lg font-bold text-[#102A43]">
                    Major Equipment Handled
                  </h4>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">

                    {equipmentList.map((eq, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#334155] sm:text-[15px]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0098db]" />

                        <span>{eq}</span>
                      </div>
                    ))}

                  </div>
                </div>
              )}
            </div>

{/* =====================================================
    RIGHT COLUMN — EPC + SCOPE OF WORK
===================================================== */}
{hasRightColumn && (
  <div className="space-y-8 lg:col-span-5">

    {/* =================================================
        GIS — EPC
    ================================================= */}
    {service.slug === "gas-insulated-substation" &&
      service.epcHeading &&
      service.epcDescription && (
        <div className="pt-2">
          <h4 className="mb-3 text-lg font-bold text-[#102A43]">
            We are in EPC
          </h4>

          <h5 className="text-base font-bold text-blue-600 sm:text-[17px]">
            Engineering, Procurement & Construction (EPC)
          </h5>

          <p className="mt-2 text-sm leading-6 text-[#475569] sm:text-[15px]">
            {service.epcDescription}
          </p>
        </div>
      )}

    {/* =================================================
        SCOPE OF WORK — BELOW EPC
    ================================================= */}
    {showScopeOfWork && (
      <div>
        <div className="mb-3.5 flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
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
              className="flex items-start gap-2.5 text-sm leading-relaxed text-[#334155] sm:text-[15px]"
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
          COMMERCIAL SECTORS
      ========================================================= */}
      {commercialSectors.length > 0 && (
        <section className="border-t border-[#F1F5F9] bg-[#EDE9EA] py-8 sm:py-10">

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-6 sm:mb-8">

              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Industry Focus
              </span>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Commercial Sectors & Establishments
              </h2>

              <p className="mt-1.5 text-sm text-[#64748B] sm:text-base">
                Specialized electrical contracting and turnkey power
                infrastructure across diverse commercial domains
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">

              {commercialSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0098db]/50 hover:shadow-md"
                >

                  <div className="flex h-28 w-full items-center justify-center overflow-hidden border-b border-[#F1F5F9] bg-white p-2.5 sm:h-32 sm:p-3">

                    <img
                      src={sector.image}
                      alt={sector.sector}
                      className="h-auto w-auto max-h-[85px] max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[95px]"
                      loading="lazy"
                    />

                  </div>

                  <div className="flex flex-1 flex-col bg-gray-100 p-3 sm:p-3.5">

                    <h3 className="text-xs font-bold leading-snug text-[#102A43] transition-colors group-hover:text-[#0098db] sm:text-[13.5px]">
                      {sector.sector}
                    </h3>

                    {sector.clients && (
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#64748B] sm:text-xs">
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
    3. END-TO-END CAPABILITIES
========================================================= */}
<section className="bg-[#EDE9EA] py-6 sm:py-8">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mb-6">
      <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
        End-to-End Capabilities
      </span>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
        Turnkey Engineering & Project Delivery
      </h2>
    </div>

    {/* Two Column Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">

      {/* LEFT COLUMN */}
      <div>
        {features.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className={idx > 0 ? "mt-5 pt-5 md:mt-6 md:pt-6" : ""}
          >
            <h3 className="text-lg font-bold text-[#102A43] sm:text-[19px]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-sm leading-relaxed text-[#475569] sm:text-base">
              {item.description}
            </p>

            {/* Full-Width Blue Line Below Paragraph */}
            <div className="mt-4 h-[2px] w-full bg-blue-200" />
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="mt-5 pt-5 md:mt-0 md:pt-0">
        {features.slice(3, 6).map((item, idx) => (
          <div
            key={idx}
            className={idx > 0 ? "mt-5 pt-5 md:mt-6 md:pt-6" : ""}
          >
            <h3 className="text-lg font-bold text-[#102A43] sm:text-[19px]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-sm leading-relaxed text-[#475569] sm:text-base">
              {item.description}
            </p>

            {/* Full-Width Blue Line Below Paragraph */}
            <div className="mt-4 h-[2px] w-full bg-blue-200" />
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* =========================================================
          4. CORE FOCUS & APPLICATIONS
      ========================================================= */}
      {squareHighlights.length > 0 && (
        <section className="w-full bg-[#EDE9EA] py-8 sm:py-10">

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-6 sm:mb-8">

              <span className="text-xs font-bold uppercase tracking-wider text-[#0098db]">
                Core Focus & Applications
              </span>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                Key Technical Applications & Highlights
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {squareHighlights.map((item, idx) => {

                const isBlueCard = idx % 2 === 1;

                return (
                  <div
                    key={idx}
                    className={`group flex min-h-[190px] flex-col rounded-xl border px-5 py-6 transition-all duration-300 hover:-translate-y-1 ${
                      isBlueCard
                        ? "border-[#93C5FD] bg-gradient-to-br from-[#E0F2FE] to-[#BFDBFE] shadow-[0_6px_18px_rgba(37,99,235,0.10)]"
                        : "border-[#E2E8F0] bg-white shadow-[0_5px_18px_rgba(16,42,67,0.05)] hover:border-[#CBD5E1] hover:shadow-[0_10px_24px_rgba(16,42,67,0.08)]"
                    }`}
                  >

                    <div className="flex flex-1 flex-col">

                      <h3 className="min-h-[48px] text-[15px] font-bold leading-snug tracking-tight text-[#102A43] sm:text-[16px]">
                        {item.title}
                      </h3>

                      <p
                        className={`text-[13px] leading-6 sm:text-[14px] ${
                          isBlueCard
                            ? "text-[#334155]"
                            : "text-[#526579]"
                        }`}
                      >
                        {item.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;