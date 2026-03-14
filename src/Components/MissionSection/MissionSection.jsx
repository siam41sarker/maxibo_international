import { CheckCircle, Target } from "lucide-react";
const MissionSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1c3f73] to-[#2f5b97] py-20 px-6 md:px-12 lg:px-20">

      <div className="lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">

          {/* Title */}
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Mission</span>
          </h2>

          {/* Description */}
          <p className="font-inter text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
            Our mission is to find new technologies for the apparel industry, enabling our customers to optimize their production facilities. We
            firmly believe in the boundless potential of technology and strive
            to encourage our clients to adopt forward-thinking strategies.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 font-inter text-gray-200">

            <li className="flex items-center gap-3">
              <CheckCircle className="text-orange-500 w-6 h-6" />
              Advanced technologies and solutions
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-orange-500 w-6 h-6" />
              Expert consultancy and support
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-orange-500 w-6 h-6" />
              Industry 4.0 integration
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-orange-500 w-6 h-6" />
              Continuous innovation
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center md:justify-start lg:justify-end">

          <div className="bg-[#4C5370] backdrop-blur-md border border-orange-400/40 rounded-2xl p-8 md:p-10 max-w-2xl text-white">

            {/* Icon */}
            <div className="mb-6">
              <Target className="text-orange-500 w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
              Our Goal
            </h3>

            {/* Description */}
            <p className="font-inter text-gray-200 leading-relaxed">
              To elevate industry satisfaction and success by offering globally
              renowned products, services, and expert consultancy to the
              apparel sector in Bangladesh and beyond.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;