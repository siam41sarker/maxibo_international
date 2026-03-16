import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

export default function InstallationProcess() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched installation steps:", data.installation?.steps);
        setSteps(data.installation?.steps || []);
      })
      .catch((err) => console.error("Failed to fetch steps:", err));
  }, []);

  return (
    <section className="bg-[#f1f4f5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Our Installation <span className="text-orange-500">Process</span>
          </h2>
          <p className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto">
            A systematic approach to ensure flawless equipment installation and integration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

          {steps.length === 0 ? (
            <p className="text-center text-gray-400 col-span-4">
              Loading installation steps...
            </p>
          ) : (
            steps.map((item, index) => {
              const stepNumber = item.step || String(index + 1).padStart(2, "0");

              return (
                <div key={index} className="relative">

                  {/* Arrow Connector */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-orange-300 pointer-events-none">
                      <MoveRight size={26} />
                    </div>
                  )}

                  <div className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500">

                    {/* Step Number */}
                    <div className="text-[52px] leading-none font-bold text-orange-200 mb-6">
                      {stepNumber}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold font-outfit mb-3 transition-colors duration-300 group-hover:text-orange-500">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 font-inter text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })
          )}

        </div>
      </div>
    </section>
  );
}