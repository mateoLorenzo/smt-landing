"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    console.log("href", href);
    const sectionId = href?.substring(1);

    // Cerrar drawer
    setOpen(false);

    // Esperar a que el drawer se cierre y luego hacer scroll
    setTimeout(() => {
      if (sectionId) {
        scrollToSection(sectionId);
      }
    }, 300);
  };

  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const sectionId = href?.substring(1);

    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg border-b border-white/20 shadow-sm z-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20 md:h-[70px]">
        {/* Logo */}
        <div className="text-lg font-semibold text-[#0a3041] md:text-base">
          <a
            href="#home"
            onClick={handleDesktopNavClick}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            SM Technologies
          </a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex gap-10 items-center lg:gap-6">
          <a
            href="#home"
            onClick={handleDesktopNavClick}
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Home
          </a>
          <a
            href="#what-we-do"
            onClick={handleDesktopNavClick}
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            About
          </a>
          <a
            href="#how-we-work"
            onClick={handleDesktopNavClick}
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            How we work
          </a>
          <a
            href="#products-platforms"
            onClick={handleDesktopNavClick}
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Our products
          </a>
          <a
            href="#contact"
            onClick={handleDesktopNavClick}
            className="text-base text-[#333333] transition-colors duration-200 hover:text-[#0a3041] lg:text-[15px]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button - Hidden on mobile */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            onClick={handleDesktopNavClick}
            className="bg-[#0a3041] text-white px-5 py-3 rounded-xl text-base font-normal transition-all duration-200 hover:bg-[#0a4051] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(10,48,65,0.2)]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button
                className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                aria-label="Open menu"
              >
                <span className="w-6 h-0.5 bg-[#0a3041] transition-all"></span>
                <span className="w-6 h-0.5 bg-[#0a3041] transition-all"></span>
                <span className="w-6 h-0.5 bg-[#0a3041] transition-all"></span>
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[85%] mt-0 rounded-none bg-white border-none shadow-2xl flex flex-col">
              <DrawerHeader className="text-left border-b border-gray-100 py-6 px-6">
                <DrawerTitle className="text-[#0a3041] text-xl font-semibold">
                  SM Technologies
                </DrawerTitle>
              </DrawerHeader>
              <nav className="flex flex-col p-6 gap-1 flex-1">
                <a
                  href="#home"
                  onClick={handleMobileNavClick}
                  className="text-base text-[#333333] hover:text-[#0a3041] hover:bg-[#F5F9FA] transition-all py-4 px-4 rounded-lg"
                >
                  Home
                </a>
                <a
                  href="#what-we-do"
                  onClick={handleMobileNavClick}
                  className="text-base text-[#333333] hover:text-[#0a3041] hover:bg-[#F5F9FA] transition-all py-4 px-4 rounded-lg"
                >
                  About
                </a>
                <a
                  href="#how-we-work"
                  onClick={handleMobileNavClick}
                  className="text-base text-[#333333] hover:text-[#0a3041] hover:bg-[#F5F9FA] transition-all py-4 px-4 rounded-lg"
                >
                  How we work
                </a>
                <a
                  href="#products-platforms"
                  onClick={handleMobileNavClick}
                  className="text-base text-[#333333] hover:text-[#0a3041] hover:bg-[#F5F9FA] transition-all py-4 px-4 rounded-lg"
                >
                  Our products
                </a>
                <a
                  href="#contact"
                  onClick={handleMobileNavClick}
                  className="text-base text-[#333333] hover:text-[#0a3041] hover:bg-[#F5F9FA] transition-all py-4 px-4 rounded-lg"
                >
                  Contact
                </a>
              </nav>
              {/* Bottom CTA Button */}
              <div className="p-6 pt-0 pb-8 border-t border-gray-100 mt-auto">
                <a
                  href="#contact"
                  onClick={handleMobileNavClick}
                  className="block bg-[#0a3041] text-white px-6 py-4 rounded-xl text-base font-normal text-center hover:bg-[#0a4051] transition-colors shadow-md"
                >
                  Get in touch
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
