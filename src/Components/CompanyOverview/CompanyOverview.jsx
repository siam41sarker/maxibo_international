import { CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CompanyOverview = () => {
  const [missionPoints, setMissionPoints] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => {
        setMissionPoints(data.missionPoints);
      });
  }, []);

  return (
    <section className="bg-white py-24 px-4">
      <div className="lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
            Company <span className="text-orange-500">Overview</span>
          </h2>

          <p className="text-gray-600 font-inter mb-6 leading-relaxed">
            MAXIBO International boasts a professional team of skilled and
            experienced technicians dedicated to delivering optimal solutions
            for the apparel industry. Our primary goal is to elevate industry
            satisfaction and success by offering globally renowned products,
            services, and expert consultancy.
          </p>

          <p className="text-gray-600 font-inter mb-8 leading-relaxed">
            We firmly believe in the boundless potential of technology and
            strive to encourage our clients to adopt forward-thinking
            strategies to achieve their goals.
          </p>
          <NavLink to="/contact">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-inter font-medium hover:bg-orange-600 transition">
              Contact Our Team
              <ArrowRight size={18} />
            </button>
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold font-outfit mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 font-inter mb-6">
            To find new technologies for the apparel industry, enabling our
            customers to optimize their production facilities and adopt
            forward-thinking strategies to achieve their goals.
          </p>

          <ul className="space-y-4">
            {missionPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <span className="font-inter text-gray-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;