import React from "react";

export const HowWeWork = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-white pt-30 md:pt-5 pb-20"
      id="how-we-work"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-[100px] w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-sm uppercase text-[#38777C] mb-4 font-medium">
            HOW WE WORK
          </p>
          <h2 className="text-2xl md:text-4xl tracking-[-1px] md:text-4.2xl font-normal text-[#0a3041] md:tracking-[-3px]">
            Professionalism from scratch
          </h2>
        </div>

        {/* Grid of cards */}
        {/* <div className="grid md:grid-cols-2 gap-6 max-w-[100px] "> */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 1 - Think before we build */}
          <div className="bg-[#F5F9FA] rounded-xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-center md:text-start text-xl md:text-3xl tracking-[-1px] font-medium text-[#0a3041] mb-4 md:tracking-[-2px]">
              Think before we build
            </h3>
            <p className="text-center md:text-start text-sm md:text-[16px] text-[#666666] leading-relaxed tracking-[-0.5px]">
              We take the time to understand your problem, context, and goals
              before writing a single line of code so every decision has a clear
              purpose.
            </p>
          </div>

          {/* Card 2 - Build with ownership */}
          <div className="bg-[#F5F9FA] rounded-xl md:rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="text-center md:text-start text-xl md:text-3xl tracking-[-1px] font-medium text-[#0a3041] mb-4 md:tracking-[-2px]">
              Build with ownership
            </h3>
            <p className="text-center md:text-start text-sm md:text-[16px] text-[#666666] leading-relaxed tracking-[-0.5px]">
              We treat every project as if it were our own making thoughtful
              decisions around quality, performance, and long-term reliability.
            </p>
          </div>
        </div>

        {/* Card 3 - Solid foundations with chart - Full width */}
        <div className="md:col-span-2 mt-4 bg-[#F5F9FA] rounded-xl md:rounded-3xl p-10 ">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Left side - Text content */}
            <div className="flex-1">
              <h3 className="text-center md:text-start text-xl md:text-3xl tracking-[-1px] font-medium text-[#0a3041] mb-4 md:tracking-[-2px]">
                Solid foundations, real outcomes
              </h3>
              <p className="text-center md:text-start text-sm md:text-[16px] text-[#666666] leading-relaxed mb-6">
                We don&apos;t chase quick wins.
              </p>
              <p className="text-[#666666] mb-5 leading-relaxed text-sm md:text-[16px] text-center md:text-start max-w-[500px]">
                We focus on clear design and solid foundations that work today,
                creating reliable products that deliver value today and remain
                flexible as your business grows.
              </p>
            </div>

            {/* Right side - Chart */}
            <div className="flex-1 md:w-[50%] pl-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Chart header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-[#666666] mb-1">Summary</p>
                    <p className="text-2xl font-semibold text-[#0a3041]">
                      $1,876,580
                    </p>
                  </div>
                  <select className="text-xs text-[#666666] border border-gray-200 rounded-lg px-3 py-2">
                    <option>6 Months</option>
                    <option>3 Months</option>
                    <option>1 Year</option>
                  </select>
                </div>

                {/* Chart area */}
                <div className="relative h-40">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 160"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    <line
                      x1="0"
                      y1="40"
                      x2="400"
                      y2="40"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="80"
                      x2="400"
                      y2="80"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="120"
                      x2="400"
                      y2="120"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />

                    {/* Gradient area under the line */}
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#A9D3D9"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#A9D3D9"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d="M 0 120 L 0 100 L 80 90 L 160 70 L 240 60 L 320 45 L 400 30 L 400 160 L 0 160 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Line chart */}
                    <path
                      d="M 0 100 L 80 90 L 160 70 L 240 60 L 320 45 L 400 30"
                      stroke="#38777C"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-xs text-[#999999] mt-3">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
