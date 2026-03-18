import { useEffect, useState } from "react";
import {
  Lightbulb,
  TrendingUp,
  Target
} from "lucide-react";

// Map JSON icons to lucide-react icons
const iconMap = {
  Lightbulb,
  TrendingUp,
  Target
};

const ConsultancyIndex = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.consultancy?.benefits || []);
      });
  }, []);

  return (
    <div className="bg-[#F9FAFB]">

      {/* Centered container with balanced vertical spacing */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Grid: exactly 3 cards per row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10">

          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={index}
                className="
                  group bg-white border border-gray-200 rounded-2xl p-10
                  text-center transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:border-orange-500
                "
              >
                {/* Larger Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 mb-8">
                  {Icon ? <Icon size={32} /> : null}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-outfit mb-4 transition-colors duration-300 group-hover:text-orange-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 font-inter text-base leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default ConsultancyIndex;