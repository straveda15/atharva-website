
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

      const easedProgress =
        progress < 1 ? 1 - Math.pow(1 - progress, 4) : 1;

      setCount(Math.round(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
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
    <section className="relative w-full overflow-hidden bg-[#EDE9EA]">
      {/* HERO */}
      <div className="relative flex min-h-[380px] items-center sm:min-h-[440px] lg:min-h-[500px]">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-y-0 left-[20%] right-0 z-0 bg-cover bg-right bg-no-repeat sm:left-[30%]"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
          aria-hidden="true"
        />

        {/* BACKGROUND FADE */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#EDE9EA] via-[#EDE9EA]/95 via-70% to-[#EDE9EA]/40 sm:via-45% sm:to-[#EDE9EA]/10" />

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-10 bg-gradient-to-t from-[#EDE9EA] to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
          <div className="max-w-xl lg:max-w-2xl">
            {/* TOP LABEL */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] sm:text-[13px]">
                Powering Progress Since 1970
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-2xl font-bold leading-[1.15] tracking-[-0.025em] text-[#102A43] sm:text-4xl lg:text-[52px]">
              End-to-End Electrical
              <br />
              <span className="text-[#0098db]">
                Contracting & Engineering
              </span>
              <br />
              <span className="text-[#0098db]">Services</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#5F6C7B] sm:text-base sm:leading-7">
              <span className="font-bold text-black">The Legacy</span>{" "}
              of Electrical Excellence, Built Over Five Decades. Government
              Licensed Electrical Contractor serving Western India and beyond.
            </p>

            {/* CONVICTION TAGLINE — ABOVE BUTTONS */}
            <p className="mt-5 mb-3 text-left text-[clamp(8px,1.3vw,16px)] font-black uppercase tracking-[0.08em] text-black">
              CONVICTION IN CONTRACTING TOWARDS SUSTAINABLE ENGINEERING
            </p>

            {/* BUTTONS */}
            <div className="flex flex-row items-center gap-2.5 sm:mt-7 sm:gap-3">
              {/* EXPLORE SERVICES */}
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#0098db] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0082bd] hover:shadow-md sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>

              {/* VIEW PROJECTS */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#CBD5E1] bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#102A43] shadow-sm transition-all duration-200 hover:border-[#0098db] hover:text-[#0098db] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span>View Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS — NO TOP HORIZONTAL BORDER */}
      <div className="bg-[#EDE9EA]">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 md:gap-8 lg:grid-cols-5">
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

            {/* STAT 5 */}
            <div className="col-span-2 border-l-2 border-[#0098db] pl-3.5 sm:col-span-1">
              <div className="flex items-baseline text-2xl font-extrabold leading-none text-[#0098db] sm:text-3xl">
                <CountUp end={32} suffix=" k" />
              </div>
              <div className="mt-1.5 text-xs font-medium text-[#475569] sm:text-sm">
                Subscription
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
