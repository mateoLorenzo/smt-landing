import React from "react";

export const LetsBuild = () => {
  return (
    <section
      className="relative w-full md:w-[95%] mx-auto md:rounded-2xl flex items-center justify-center bg-[#0a3041] py-10 md:py-20"
      id="lets-build"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-[120px] w-full">
        {/* <div className="grid md:grid-cols-2 gap-16 items-center"> */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text content */}
          <div className="md:pr-8 flex flex-col items-center md:items-start mb-10 md:mb-0">
            <p className="text-xs md:text-sm uppercase text-[#38777C] mb-3 md:mb-6 font-medium">
              LET&apos;S BUILD SOMETHING REAL
            </p>
            <h2 className="text-2xl text-center tracking-[-1px] md:text-start md:text-4xl font-normal text-white mb-4 md:mb-8 md:tracking-[-2px] leading-tight">
              Have an idea or a product <br /> worth building?
            </h2>
            <p className="text-[#8FA1A8] max-w-md text-center text-sm md:text-start md:text-lg leading-relaxed md:max-w-md md:tracking-[-1px]">
              We help teams and businesses design and build digital products,
              from high-impact landing pages to full platforms
            </p>
          </div>

          {/* Right side - Project mockups grid */}
          <div className="relative">
            {/* Grid of mockup placeholders */}
            <div className="grid grid-cols-2 gap-4">
              {/* Row 1 */}
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 1</span>
                </div>
              </div>
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 2</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 3</span>
                </div>
              </div>
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 4</span>
                </div>
              </div>

              {/* Row 3 */}
              {/* <div className="bg-[#153B4B] rounded-2xl aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 5</span>
                </div>
              </div>
              <div className="bg-[#153B4B] rounded-2xl aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 6</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
