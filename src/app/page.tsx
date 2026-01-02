import Header from "./components/Header";
import { Home } from "./sections/Home";
import { WhatWeDo } from "./sections/WhatWeDo";
import { HowWeWork } from "./sections/HowWeWork";
import { ProductsAndPlatforms } from "./sections/ProductsAndPlatforms";
import { OurVision } from "./sections/OurVision";
import { LetsBuild } from "./sections/LetsBuild";
import { ContactUs } from "./sections/ContactUs";

export default function Page() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen">
        <Home />
        <WhatWeDo />
        <HowWeWork />
        <ProductsAndPlatforms />
        <OurVision />
        <LetsBuild />
        <ContactUs />
      </div>
    </>
  );
}
