import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center -mt-[10vh] "
      id="what-we-do"
    >
      <div className="w-full h-[300px] bg-[#F5F9FA] absolute" />
      {/* Card container with white background */}
      <div className="relative z-10 px-5 w-full max-w-[1500px] mx-[6vw] bg-white rounded-[32px] shadow-2xl py-[10vh] md:px-[100px] md:py-[10vh]">
        {/* Header section */}
        <div className="mb-16">
          <p className="text-center md:text-left text-sm uppercase text-[#38777C] mb-4 font-medium">
            WHAT WE DO
          </p>
          <div className="flex flex-col text-center md:flex-row md:text-start justify-between items-center">
            {/* <h2 className="text-5xl md:text-4.1xl font-normal text-[#0a3041] leading-tight tracking-[-2px]"> */}
            <h2 className="text-2xl tracking-[-1px] max-w-[400px] md:text-[42px] font-normal text-[#0a3041] leading-tight md:tracking-[-2px]">
              Software designed to deliver results
            </h2>

            <p className="pt-4 block md:hidden max-w-[310px] text-xs text-[#666666] md:pt-2">
              We design and develop digital products with a strong focus on
              design, clarity, and real business impact, supported by
              maintainable foundations that grow with your needs.
            </p>

            <p className="hidden max-w-[460px] md:block text-base text-[#666666] pt-2">
              We design and develop digital products with a strong focus on
              design, clarity, and real business impact, supported by
              maintainable foundations that grow with your needs.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-15 md:mt-20">
          {/* Feature 1 - Product-first mindset */}
          <div className="flex flex-col items-center md:items-start gap-4 ">
            <div className="w-10 h-10 mb-2">
              <Image
                src="/icons/brain-smt.svg"
                alt="Product-first mindset"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Product-first mindset
            </h3>
            <p className="text-center md:text-start text-[#666666] text-sm leading-relaxed max-w-[290px]">
              We approach every project with a product mindset focusing 90 user
              experience and business goals from day one.
            </p>
          </div>

          {/* Feature 2 - Scalable architecture */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-10 h-10 mb-2">
              <Image
                src="/icons/scalable.svg"
                alt="Scalable architecture"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Scalable architecture
            </h3>
            <p className="text-center md:text-start text-[#666666] text-sm leading-relaxed max-w-[290px]">
              Every project we handle is built on clean and solid foundations so
              scaling later is never a problem.
            </p>
          </div>

          {/* Feature 3 - Quality & reliability */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-10 h-10 mb-2">
              <Image
                src="/icons/shield.svg"
                alt="Quality & reliability"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium text-[#0a3041]">
              Quality & reliability
            </h3>
            <p className="text-center md:text-start text-[#666666] text-sm leading-relaxed max-w-[290px]">
              Detail-oriented development with a strong focus on code quality,
              performance, and long-term reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
