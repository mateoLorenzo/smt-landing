import React from "react";

export const LetsBuild = () => {
  return (
    <section
      // className="min-h-screen flex items-center justify-center snap-start bg-[#0a3041] py-20"
      className="relative w-[95%] mx-auto rounded-2xl flex items-center justify-center snap-start bg-[#0a3041] py-10"
      id="lets-build"
    >
      <div className="max-w-[1500px] mx-auto px-[120px] w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="pr-8">
            <p className="text-sm uppercase text-[#38777C] mb-6 font-medium">
              LET&apos;S BUILD SOMETHING REAL
            </p>
            <h2 className="text-5xl md:text-4xl font-normal text-white mb-8 tracking-[-3px] leading-tight">
              Have an idea or a product <br /> worth building?
            </h2>
            <p className="text-[#8FA1A8] text-lg leading-relaxed">
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
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 1</span>
                </div>
              </div>
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 2</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
                  <span className="text-[#5A9B93] text-sm">Project 3</span>
                </div>
              </div>
              <div className="bg-[#153B4B] rounded-2xl aspect-[3/2] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a5c] to-[#0d2833] flex items-center justify-center">
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
