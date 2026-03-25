import { FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const WhyChooseServices = () => {
  const points = [
    "Factory-trained technicians with global certifications",
    "Quick response times and emergency support",
    "Genuine spare parts from original manufacturers",
    "Comprehensive documentation and reporting",
    "Cost-effective service packages",
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">

        {/* ================= LEFT (Why Choose Services) ================= */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
            Why Choose Our{" "}
            <span className="text-orange-500">Services</span>
          </h2>

          <p className="text-gray-600 font-inter mb-8">
            With decades of combined experience and partnerships with global
            manufacturers, we deliver service excellence that keeps your
            production running smoothly.
          </p>

          <ul className="space-y-5">
            {points.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle
                  className="text-orange-500 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700 font-inter">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT (Quote Card) ================= */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 w-full max-w-xl">
            <h3 className="text-2xl font-bold font-outfit mb-3">
              Request a Service Quote
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Tell us about your service needs and we'll provide a customized
              proposal within 24 hours.
            </p>
            <NavLink to="/contact">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition duration-300">
                Get a Quote →
              </button>
            </NavLink>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseServices;