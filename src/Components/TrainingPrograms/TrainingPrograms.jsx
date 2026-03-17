import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const TrainingPrograms = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setPrograms(data.training?.programs || []))
      .catch((err) => console.error("Failed to load training programs:", err));
  }, []);

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="font-outfit text-3xl md:text-5xl font-bold mb-3">
          Training <span className="text-orange-500">Programs</span>
        </h2>

        <p className="font-inter text-gray-500 mt-5 text-lg mb-14">
          Customized training programs for every role in your organization.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

          {programs.map((program, idx) => (
            <div
              key={idx}
              className="
                group
                bg-white border border-gray-200 rounded-xl p-7
                transition-all duration-300 ease-in-out
                hover:border-orange-500
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-4">

                <h3
                  className="
                    font-outfit font-bold text-2xl
                    transition-colors duration-300
                    group-hover:text-orange-500
                  "
                >
                  {program.title}
                </h3>

                <span className="font-inter text-base bg-orange-100 text-orange-500 px-3 py-1 rounded-full font-medium">
                  {program.duration}
                </span>
              </div>

              {/* Description */}
              <p className="font-inter text-gray-500 text-base mb-5">
                {program.description}
              </p>

              {/* Topics */}
              <p className="font-inter text-base font-semibold text-gray-700 mb-3">
                Topics Covered:
              </p>

              <ul className="space-y-2 text-base text-gray-600 font-inter">
                {program.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    {topic}
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

export default TrainingPrograms;