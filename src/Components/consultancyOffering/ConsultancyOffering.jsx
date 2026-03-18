import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const ConsultancyOffering = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then((data) => setPrograms(data.consultancy?.services || []))
      .catch((err) => console.error("Failed to load consultancy services:", err));
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="font-outfit text-3xl md:text-5xl font-bold mb-3">
          Our Consultancy <span className="text-orange-500">Offerings</span>
        </h2>

        <p className="font-inter text-gray-500 mt-5 text-lg mb-14">
          Comprehensive consulting services to support your manufacturing excellence journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="
                group bg-white border border-gray-200 rounded-xl p-7
                transition-all duration-300 ease-in-out
                hover:border-orange-500 hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-outfit font-bold text-2xl transition-colors duration-300 group-hover:text-orange-500">
                  {program.title}
                </h3>
              </div>

              <p className="font-inter text-gray-500 text-base mb-5">
                {program.description}
              </p>

              <p className="font-inter text-base font-semibold text-gray-700 mb-3">
                Deliverables:
              </p>

              <ul className="space-y-2 text-base text-gray-600 font-inter">
                {program.deliverables?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyOffering;