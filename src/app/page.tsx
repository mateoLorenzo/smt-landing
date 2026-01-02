import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen">
        <section
          className="h-screen flex items-center justify-center snap-start bg-white"
          id="home"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">Home</h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-[#f5f5f5]"
          id="what-we-do"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">What we do</h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-white"
          id="how-we-work"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">How we work</h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-[#f5f5f5]"
          id="products-platforms"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">
            Products & Platforms
          </h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-white"
          id="our-vision"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">Our vision</h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-[#f5f5f5]"
          id="lets-build"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">
            Lets build something real
          </h1>
        </section>

        <section
          className="h-screen flex items-center justify-center snap-start bg-white"
          id="contact"
        >
          <h1 className="text-5xl font-semibold text-[#0a3041]">Contact us</h1>
        </section>
      </div>
    </>
  );
}
