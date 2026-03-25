import { useEffect, useState } from "react";
import { Mail, Eye, Lock, Users, FileText } from "lucide-react";

const icons = { Eye, FileText, Lock, Users, Mail };

const PrivacyContent = () => {
  const [privacySections, setPrivacySections] = useState([]);

  useEffect(() => {
    fetch("/privacyData.json")
      .then((res) => res.json())
      .then((data) => setPrivacySections(data))
      .catch((err) => console.error("Error fetching privacy data:", err));
  }, []);

  return (
    <section className="lg:w-11/12 mx-auto px-4 py-16 space-y-12">
      {privacySections.map((section) => {
        const Icon = icons[section.icon];
        return (
          <div key={section.id} className="flex flex-col">
            <div className="flex gap-4 md:gap-6 items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <h2 className="font-outfit font-bold text-lg md:text-xl text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="font-inter text-gray-600 text-sm md:text-base whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="border-b border-gray-200" />
          </div>
        );
      })}
    </section>
  );
};

export default PrivacyContent;