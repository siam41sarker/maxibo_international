import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const IndustriesServe = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setIndustries(data.consultancy?.industries || []);
      })
      .catch((err) => console.error("Failed to fetch industries:", err));
  }, []);

  return (
    <section className="w-full bg-[#0f3b70] py-20 px-6 md:px-12 lg:px-20">
      <div className="lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: Industries */}
        <div className="text-white">
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <p className="font-inter text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
            Our consultants have deep experience across various manufacturing sectors within the textile and apparel industry.
          </p>

          {/* Grid for 3 rows x 2 columns */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 font-inter text-gray-200">
            {industries.map((industry, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-orange-500 w-6 h-6" />
                {industry}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center md:justify-start lg:justify-end">
          <div className="bg-[#3a5a8c] border border-gray-400 rounded-2xl p-8 md:p-10 max-w-2xl text-white">
            <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
              Schedule a Consultation
            </h3>
            <p className="font-inter text-gray-200 leading-relaxed mb-6">
              Speak with our experts to discuss your challenges and explore how we can help transform your manufacturing operations.
            </p>
            <NavLink to="/contact"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold font-inter px-6 py-3 rounded transition-all duration-300"
            >
              Book Meeting &rarr;
            </NavLink>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesServe;