import React from "react";

export const OurVision = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center snap-start bg-white py-20"
      id="our-vision"
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase text-[#38777C] mb-4 font-medium">
            OUR VISION
          </p>
          <h2 className="text-5xl md:text-4.5xl font-normal text-[#0a3041] mb-6 tracking-[-2px] max-w-3xl mx-auto">
            We build technology with <br /> long-term purpose
          </h2>
          <p className="text-[#666666] text-md max-w-2xl mx-auto leading-relaxed">
            We believe software should be built to last, with <br /> strong
            foundations, and real-world impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-6xl font-medium text-[#0a3041] mb-4 tracking-tight">
              100%
            </h3>
            <p className="text-[#0E5A6F] text-lg font-medium tracking-[-1px]">
              Ownership mindset
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-6xl font-medium text-[#0a3041] mb-4 tracking-tight">
              12k
            </h3>
            <p className="text-[#0E5A6F] text-lg font-medium tracking-[-1px]">
              Hours of experience
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-6xl font-medium text-[#0a3041] mb-4 tracking-tight">
              5+
            </h3>
            <p className="text-[#0E5A6F] text-lg font-medium tracking-[-1px]">
              Products shipped
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
