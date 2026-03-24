import { useEffect, useState } from "react";
import { CheckCircle, Award } from "lucide-react";

const PartnerShowcaseCard = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("/partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data.partners || []));
  }, []);

  return (
    <div className="lg:w-11/12 mx-auto px-4 py-12 space-y-6 font-inter">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="group rounded-2xl border border-gray-300 
                     bg-[#f8f9fb] 
                     transition-all duration-500 ease-out
                     hover:shadow-xl hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center justify-center text-center p-8 
                            bg-[#f3f4f6] md:border-r border-gray-300 rounded-l-2xl">
              
              {/* Logo Container Link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 mb-5"
              >
                <div className="w-full h-full flex items-center justify-center 
                                bg-white border border-gray-200 rounded-xl shadow-sm 
                                transition-all duration-300 ease-out
                                hover:border-orange-500 hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 object-contain"
                  />
                </div>
              </a>

              {/* Title */}
              <h3 className="font-outfit font-semibold text-gray-800 text-lg">
                {partner.name}
              </h3>

              {/* Country */}
              <p className="text-sm text-orange-500 mt-2 flex items-center gap-1">
                🌐 {partner.country}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-2 p-8 space-y-5">

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed">
                {partner.description}
              </p>

              {/* Highlights Title */}
              <div className="flex items-center gap-2 text-gray-800 font-outfit font-semibold text-base">
                <Award size={18} className="text-orange-500" />
                Key Highlights
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {partner.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-500 text-base">
                    <CheckCircle
                      size={18}
                      className="text-orange-500 mt-[2px]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerShowcaseCard;