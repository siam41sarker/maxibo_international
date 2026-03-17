import { useEffect, useState } from "react";
import {
  Clock,
  Shield,
  Cog,
  Users,
  Monitor,
  BookOpen,
  Award
} from "lucide-react";

// Map JSON icons to lucide-react icons
const iconMap = {
  Clock,
  Shield,
  Cog,
  Users,
  Monitor,
  BookOpen,
  Award,
};

const TrainingCard = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.training?.features || []);
      });
  }, []);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:w-11/12 mx-auto px-4 py-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={index}
                className="
                  group bg-white border border-gray-200 rounded-xl p-8
                  text-center transition-all duration-300
                  hover:scale-105 hover:shadow-xl hover:border-orange-500
                "
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 mb-6">
                  {Icon ? <Icon size={24} /> : null}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold font-outfit mb-3 transition-colors duration-300 group-hover:text-orange-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
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

export default TrainingCard;