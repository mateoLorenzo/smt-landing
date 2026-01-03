import React from "react";

export const Home = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-[#F5F9FA] overflow-visible px-6"
      id="home"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-[26px] leading-[1.2] md:text-[68px] md:leading-tight font-normal text-[#0a3041] mb-6 tracking-tight">
          We design and build scalable digital products
        </h1>

        <p className="text-[14px] md:text-[18px] text-[#666666] max-w-3xl mx-auto mb-10 leading-relaxed px-4">
          Ever wondered who&apos;s behind every great tech company? Exactly,
          It&apos;s people like us: Real problem solvers, detail-oriented
          builders, and long-term thinkers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center px-4">
          <a
            href="#what-we-do"
            className="w-full sm:w-[150px] h-[50px] flex items-center justify-center rounded-xl text-sm font-normal border-2 border-[#0a3041] text-[#0a3041] transition-all duration-200 hover:bg-[#0a3041] hover:text-white"
          >
            About us
          </a>
          <a
            href="#contact"
            className="w-full sm:w-[150px] h-[50px] flex items-center justify-center bg-[#0a3041] text-white rounded-xl text-sm border-2 border-transparent font-normal transition-all duration-200 hover:bg-[#0a4051] hover:shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#what-we-do"
          className="flex flex-col items-center gap-2 text-[#0a3041]/60 hover:text-[#0a3041] transition-colors"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
