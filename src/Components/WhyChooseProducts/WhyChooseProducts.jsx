import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const WhyChooseProducts = () => {
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setAdvantages(data.productAdvantages || []))
      .catch((err) => console.error("Failed to load product advantages:", err));
  }, []);

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#1e3f73] to-[#355f9c] border border-[#CED6E0] rounded-2xl shadow-lg px-8 py-16 md:flex md:items-center md:justify-between">

          {/* Left Column: Advantages List */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-outfit">
              Why Choose <span className="text-orange-400">Our Products?</span>
            </h2>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white font-inter">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="text-blue-100 font-inter mb-6">
              Get in touch with our team to discuss your requirements and receive a customized solution for your manufacturing needs.
            </p>
            <NavLink to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 text-center rounded-xl transition duration-300 shadow">
              Get a Custom Quote →
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseProducts;