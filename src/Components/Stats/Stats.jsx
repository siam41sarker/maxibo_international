import { useEffect, useState } from "react";
import { FiSettings, FiCpu, FiAward, FiUsers } from "react-icons/fi";

const iconMap = {
  FiSettings: FiSettings,
  FiCpu: FiCpu,
  FiAward: FiAward,
  FiUsers: FiUsers,
};

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [counts, setCounts] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => {
        const statsData = data.stats.home;
        setStats(statsData);

        const targets = statsData.map((item) =>
          parseInt(item.value.replace(/[^0-9]/g, ""))
        );

        setCounts(new Array(targets.length).fill(0));
        startCounter(targets);
      });

    fetch("/homeCard.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data.features));
  }, []);

  const startCounter = (targets) => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = duration / frameRate;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;

      setCounts(
        targets.map((target) =>
          Math.min(Math.floor((target * frame) / totalFrames), target)
        )
      );

      if (frame === totalFrames) clearInterval(counter);
    }, frameRate);
  };

  return (
    <section className="relative z-20 mt-10 lg:-mt-4 mb-20 px-4">

      {/* STATS CARD */}
      <div className="lg:w-11/12 mx-auto bg-gray-100 rounded-2xl shadow-2xl py-12 px-6 md:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 font-outfit">
                {counts[index]?.toLocaleString()}
                {item.value.includes("+") && "+"}
              </h3>

              <p className="mt-3 text-gray-600 font-inter font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* FEATURES SECTION */}
      <div className="lg:w-11/12 mx-auto mt-20">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Why Choose <span className="text-orange-500">Maxibo?</span>
          </h2>

          <p className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto">
            We bring together the best technology partners to deliver
            comprehensive solutions for your manufacturing needs.
          </p>
        </div>

        {/* feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-orange-500"
              >

                {/* icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 mb-6">
                  <Icon size={24} />
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold font-outfit mb-3 transition-colors duration-300 group-hover:text-orange-500">
                  {feature.title}
                </h3>

                {/* description */}
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;