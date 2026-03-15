import { useEffect, useState } from "react";
import { Target, Lightbulb, Award, Users } from "lucide-react";

const iconMap = {
  Target,
  Lightbulb,
  Award,
  Users,
};

const OurCoreValues = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => {
        setValues(data.values);
      });
  }, []);

  return (
    <section className="relative bg-[#F1F4F5]  py-24 px-4">

      <div className="lg:w-11/12 mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Our Core <span className="text-orange-500">Values</span>
          </h2>

          <p className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto">
            The principles that guide everything we do at Maxibo International.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {
            const Icon = iconMap[value.icon];

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500"
              >

                {/* icon */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 mb-6">
                  {Icon && <Icon size={24} />}
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold font-outfit mb-3 transition-colors duration-300 group-hover:text-orange-500">
                  {value.title}
                </h3>

                {/* description */}
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default OurCoreValues;