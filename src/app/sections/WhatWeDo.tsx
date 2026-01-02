import React from "react";
import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center snap-start -mt-[10vh] "
      id="what-we-do"
    >
      <div className="w-full h-[300px] bg-[#F5F9FA] absolute" />
      {/* Card container with white background */}
      <div className="relative z-10 w-full max-w-[1500px] mx-[4vw] bg-white rounded-[32px] shadow-2xl py-[10vh] md:px-[100px] md:py-[10vh]">
        {/* Header section */}
        <div className="mb-16">
          <p className="text-sm uppercase text-[#38777C] mb-4 font-medium">
            WHAT WE DO
          </p>
          {/* <div className="grid md:grid-cols-2 gap-8"> */}
          <div className="flex justify-between items-center">
            <h2 className="text-[48px] font-normal text-[#0a3041] leading-tight tracking-[-3px]">
              Software designed to <br /> deliver results
            </h2>
            <p className="text-base text-[#666666] leading-relaxed pt-2">
              We design and develop digital products with a strong focus <br />{" "}
              on design, clarity, and real business impact, supported by <br />{" "}
              maintainable foundations that grow with your needs.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {/* Feature 1 - Product-first mindset */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 mb-2">
              <Image
                src="/icons/brain-smt.svg"
                alt="Product-first mindset"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Product-first mindset
            </h3>
            <p className="text-[#666666] leading-relaxed">
              We approach every project with a product <br /> mindset focusing
              on user experience and <br /> business goals from day one.
            </p>
          </div>

          {/* Feature 2 - Scalable architecture */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 mb-2">
              <Image
                src="/icons/scalable.svg"
                alt="Scalable architecture"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Scalable architecture
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Every project we handle is built on clean and <br /> solid
              foundations so scaling later is never a <br /> problem.
            </p>
          </div>

          {/* Feature 3 - Quality & reliability */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 mb-2">
              <Image
                src="/icons/shield.svg"
                alt="Quality & reliability"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Quality & reliability
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Detail-oriented development with a strong <br /> focus on code
              quality, performance, and <br /> long-term reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
