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
      className="relative min-h-screen flex items-center justify-center bg-[#0a3041] py-20"
      id="products-platforms"
    >
      <div className="max-w-[1500px] mx-auto px-[120px] w-full">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase text-[#5A9B93] mb-4 font-medium">
            PRODUCTS & PLATFORMS
          </p>
          <h2 className="text-4xl md:text-4.5xl font-normal text-white mb-6 tracking-[-3px]">
            Real products, built and shipped
          </h2>
          <p className="text-[#B8CDD4] font-light text-lg max-w-3xl leading-relaxed">
            These are products and platforms we&apos;ve designed and developed{" "}
            <br />
            from concept to production across different industries and use
            cases.
          </p>
        </div>

        {/* Products Cards - Horizontal scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {products.map((product, index) => (
              <div
                key={index}
                className="shrink-0 w-[380px] bg-[#153B4B] rounded-3xl p-10 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <h3 className="text-4xl font-bold mb-6 tracking-[-1px] bg-linear-to-b from-white from-0% to-[#0B3A4F] to-88% bg-clip-text text-transparent">
                    {product.title}
                  </h3>
                  <p className="text-[#B8CDD4] leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>
                <button className="text-white text-base font-normal hover:text-[#5A9B93] transition-colors duration-200 text-left cursor-pointer">
                  View product →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator hint */}
        <div className="flex justify-center mt-8">
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
        </div>
      </div>
    </section>
  );
};
