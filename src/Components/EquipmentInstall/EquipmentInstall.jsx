import React, { useEffect, useState } from "react";
import { CheckCircle, Award } from "lucide-react";

const EquipmentInstall = () => {
  const [equipment, setEquipment] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data.installation?.equipmentTypes || []);
        setCertifications(data.installation?.certifications || []);
      })
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-[#1c3f73] to-[#2f5b97] py-20 px-6 md:px-12 lg:px-20">
      <div className="lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white">
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Equipment We <span className="text-orange-500">Install</span>
          </h2>

          <p className="font-inter text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
            Our certified technicians are trained to install and configure the complete range of equipment from all our partner manufacturers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter text-gray-200">
            {equipment.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-orange-500 w-6 h-6 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center md:justify-start lg:justify-end">
          <div className="bg-[#4C5370] backdrop-blur-md border border-orange-400/40 rounded-2xl p-8 md:p-10 max-w-2xl text-white text-left">
            
            {/* Award Icon */}
            <div className="mb-6">
              <Award className="text-orange-500 w-12 h-12" />
            </div>

            <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
              Factory Certified
            </h3>

            <p className="font-inter text-gray-200 leading-relaxed mb-6">
              All our installation technicians are factory-trained and certified by the original equipment manufacturers, ensuring installations meet the highest standards.
            </p>

            <ul className="space-y-3 font-inter text-gray-100">
              {certifications.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="text-orange-500 w-4 h-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EquipmentInstall;