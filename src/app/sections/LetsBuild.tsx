import React from "react";

export const LetsBuild = () => {
  return (
    <section
      className="relative w-full md:w-[95%] mx-auto md:rounded-2xl flex items-center justify-center bg-[#0a3041] py-10 md:py-20"
      id="lets-build"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-[120px] w-full">
        {/* <div className="grid md:grid-cols-2 gap-16 items-center"> */}
        {/* <div className="flex flex-col md:flex-row items-center md:justify-between overflow-hidden"> */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
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

          {/* <div className="flex w-[500px] flex-wrap justify-center gap-[10px] bottom-[10%] h-full absolute right-[120px] bg-red-500"> */}

          <div className="flex w-[500px] flex-wrap justify-center gap-[10px] padding-t-[10%] h-full absolute right-[120px] overflow-hidden">
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 1
            </div>
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 2
            </div>
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 3
            </div>
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 4
            </div>
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 5
            </div>
            <div className="flex items-center justify-center w-[45%] h-[40%] bg-white rounded-xl shadow-2xl">
              Box 6
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
