import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#0a3041] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-[120px]">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SM Technologies</h3>
            <p className="text-[#B8CDD4] text-sm leading-relaxed mb-6 max-w-sm">
              We help businesses design and build digital products that solve
              real problems and support long-term growth. From strategy and
              design to development and delivery.
            </p>
            <a
              href="https://wa.me/5491140392404"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#B8CDD4] text-sm hover:text-white transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+54 9 11 4039-2404</span>
            </a>
          </div>

          {/* Column 2 - Sections */}
          <div>
            <h4 className="text-base font-semibold mb-6">Sections</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#what-we-do"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  href="#products-platforms"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  Our products
                </a>
              </li>
              <li>
                <a
                  href="#our-vision"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  Our vision
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h4 className="text-base font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  Cutmakers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  Webcar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  GeoWirePlus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B8CDD4] text-sm hover:text-white transition-colors"
                >
                  Comahue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[#B8CDD4] text-sm">
            ©SM Technologies 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
