import { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiSmile,
  FiArrowUpRight,
  FiTool,
  FiSettings,
  FiMessageSquare,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

// ================= ICON MAPS =================

// Stats icons
const statIconMap = {
  CheckCircle: FiCheckCircle,
  Users: FiUsers,
  Clock: FiClock,
  Smile: FiSmile,
};

// Service icons
const serviceIconMap = {
  Wrench: FiTool,
  GraduationCap: FaGraduationCap,
  Settings: FiSettings,
  MessageSquare: FiMessageSquare,
};

const ServiceStats = () => {
  const [stats, setStats] = useState([]);
  const [services, setServices] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const statsData = data.statistics;

        setStats(statsData);
        setServices(data.services);

        const targets = statsData.map((item) =>
          parseInt(item.value.replace(/[^0-9]/g, ""))
        );

        setCounts(new Array(targets.length).fill(0));
        startCounter(targets);
      });
  }, []);

  // Counter
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
    <section className="relative z-30 mt-10 lg:-mt-8 mb-24 px-4">

      {/* ================= STATS CARD ================= */}
      <div className="lg:w-11/12 mx-auto bg-gray-100 rounded-2xl shadow-2xl py-12 px-6 md:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => {
            const Icon = statIconMap[item.icon];

            return (
              <div key={index}>
                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                  <Icon size={28} />
                </div>

                {/* Number */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 font-outfit">
                  {counts[index]?.toLocaleString()}
                  {item.value.includes("+") && "+"}
                </h3>

                {/* Label */}
                <p className="mt-3 text-gray-600 font-inter font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* ================= SUPPORT SOLUTIONS ================= */}
      <div className="lg:w-11/12 mx-auto mt-24">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Complete <span className="text-orange-500">Support</span> Solutions
          </h2>

          <p className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto">
            We provide end-to-end services to maximize your equipment
            investment and ensure operational excellence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon] || FiTool;

            return (
              <a
                key={service.id}
                href={service.href}
                className="
                  group bg-white border border-gray-200 rounded-xl p-8
                  transition-all duration-300
                  hover:shadow-2xl hover:border-orange-500
                "
              >
                {/* Top Row */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                    <Icon size={22} />
                  </div>

                  {/* Arrow */}
                  <FiArrowUpRight
                    size={20}
                    className="
                      text-orange-500 opacity-70
                      transition-transform duration-300
                      group-hover:translate-x-1 group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold font-outfit mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 font-inter text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 font-inter"
                    >
                      <FiCheckCircle className="text-orange-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default ServiceStats;