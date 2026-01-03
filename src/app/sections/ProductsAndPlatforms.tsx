import React from "react";

export const ProductsAndPlatforms = () => {
  const products = [
    {
      title: "Cutmakers",
      description:
        "Corporate landing page for an energy-focused company, designed to clearly communicate services, positioning, and technical capabilities.",
    },
    {
      title: "WebCar",
      description:
        "Digital platform for an automotive business, designed to showcase vehicles, and centralize the dealership's online presence.",
    },
    {
      title: "GeoWirePlus",
      description:
        "Marketing and corporate website built to support an industrial energy solution, focused on clarity, trust, and technical credibility.",
    },
    {
      title: "ConnectHub",
      description:
        "End-to-end web platform for business networking, including onboarding flows, profile management, and digital presence.",
    },
  ];

  return (
    <section
      // className="relative md:min-[80vh] flex items-center justify-center bg-[#0a3041] py-10 md:py-20"
      className="relative flex items-center justify-center bg-[#0a3041] py-10 md:py-15"
      id="products-platforms"
    >
      {/* <div className="max-w-[1500px] mx-auto px-5 md:px-[120px] w-full"> */}
      <div className="max-w-[1500px] mx-auto  w-full">
        {/* Header */}
        <div className="mb-8 px-5 md:px-[120px] md:mb-12">
          <p className="text-sm uppercase text-[#5A9B93] mb-4 font-medium">
            PRODUCTS & PLATFORMS
          </p>
          <h2 className="text-xl tracking-[-1px] md:text-4xl font-normal text-white mb-2 md:mb-6 md:tracking-[-2px]">
            Real products, built and shipped
          </h2>
          <p className="text-[#B8CDD4] font-light text-sm md:text-lg max-w-3xl leading-relaxed md:max-w-[600px]">
            These are products and platforms we&apos;ve designed and developed{" "}
            from concept to production across different industries and use
            cases.
          </p>
        </div>

        {/* Products Cards - Horizontal scroll */}
        <div className="relative">
          {/* <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-[120px] pb-4 scrollbar-hide"> */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:pl-[120px] pb-4 scrollbar-hide">
            {products.map((product, index) => (
              <div
                key={index}
                // className="shrink-0 max-w-[75vw] md:w-[480px] md:min-h-[250px] bg-[#153B4B] rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-col justify-between "
                className="shrink-0 max-w-[75vw] md:w-[480px] bg-[#153B4B] rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-col justify-between "
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-6 tracking-[-1px] bg-linear-to-b from-white from-0% to-[#0B3A4F] to-88% bg-clip-text text-transparent">
                    {product.title}
                  </h3>
                  <p className="text-xs md:text-[16px] text-[#8FA1A8] leading-relaxed mb-4 md:mb-8">
                    {product.description}
                  </p>
                </div>
                <button className="text-white text-sm md:text-base font-normal hover:text-[#5A9B93] transition-colors duration-200 text-left cursor-pointer">
                  View product →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator hint */}
        {/* <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {products.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === 0 ? "w-8 bg-[#5A9B93]" : "w-2 bg-[#B8CDD4]/30"
                }`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
