import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.webp";

const CountUp = ({ end, suffix = "", duration = 2200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress =
        progress < 1
          ? 1 - Math.pow(1 - progress, 4)
          : 1;

      const currentValue = Math.round(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Always finish exactly at the target number
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* HERO */}
      <div className="relative flex min-h-[380px] items-center sm:min-h-[440px] lg:min-h-[500px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-y-0 left-[20%] sm:left-[30%] right-0 z-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
          aria-hidden="true"
        />

        {/* WHITE FADE — KEEPS TEXT READABLE ON MOBILE & DESKTOP */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/95 via-70% to-white/40 sm:via-45% sm:to-white/10" />

        {/* LIGHT BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-10 bg-gradient-to-t from-white to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10">

          <div className="max-w-xl lg:max-w-2xl">

            {/* TOP LABEL */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#0098db]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] sm:text-[13px]">
                Powering Progress Since 1970
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-2xl sm:text-4xl lg:text-[52px] font-bold leading-[1.15] tracking-[-0.025em] text-[#102A43]">
              End-to-End Electrical
              <br />
              <span className="text-[#0098db]">
                Contracting & Engineering
              </span>
              <br />
              <span className="text-[#0098db]">
                Services
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#5F6C7B] sm:text-base sm:leading-7">
              A Legacy of Electrical Excellence, Built Over Five Decades.
              Government Licensed Electrical Contractor serving Western India
              and beyond.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-row items-center gap-2.5 sm:mt-7 sm:gap-3">

              {/* EXPLORE SERVICES */}
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0098db] px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0082bd] hover:shadow-md whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>

              {/* VIEW PROJECTS */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-[#CBD5E1] bg-white/95 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#102A43] shadow-sm transition-all duration-200 hover:border-[#0098db] hover:text-[#0098db] whitespace-nowrap"
              >
                <span>View Projects</span>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4 md:gap-10">

            {/* STAT 1 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                <CountUp end={50} suffix="+" />
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Years of Expertise
              </div>
            </div>

            {/* STAT 2 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                <CountUp end={1000} suffix="+" />
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Projects Completed
              </div>
            </div>

            {/* STAT 3 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                <CountUp end={55} suffix="+" />
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Years of Trust
              </div>
            </div>

            {/* STAT 4 */}
            <div className="border-l-2 border-[#0098db] pl-3.5">
              <div className="text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                <CountUp end={100} suffix="%" />
              </div>

              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                On Time
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;