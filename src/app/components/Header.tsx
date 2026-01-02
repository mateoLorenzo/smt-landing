export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg border-b border-white/20 shadow-sm z-1000 px-10 lg:px-6 md:px-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20 md:h-[70px]">
        <div className="text-lg font-semibold text-[#0a3041] md:text-base">
          <a
            href="#home"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            SM Technologies
          </a>
        </div>

        <nav className="flex gap-10 items-center lg:gap-6">
          <a
            href="#home"
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Home
          </a>
          <a
            href="#what-we-do"
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            About
          </a>
          <a
            href="#how-we-work"
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            How we work
          </a>
          <a
            href="#products-platforms"
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Our products
          </a>
          <a
            href="#contact"
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Contact
          </a>
        </nav>

        <div className="flex">
          <a
            href="#contact"
            className="bg-[#0a3041] text-white px-5 py-3 rounded-xl text-base font-normal transition-all duration-200 hover:bg-[#0a4051] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(10,48,65,0.2)] "
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
