import { User, Phone, Mail } from "lucide-react";
import profileImage from "../../assets/unnamed.jpg";

const Leadership = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1c3f73] to-[#2f5b97] py-20 px-6 md:px-12 lg:px-20">
      <div className="lg:w-11/12 mx-auto">

        {/* Heading */}
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white">
            Our <span className="text-orange-500">Leadership</span>
          </h2>

          <p className="text-gray-200 font-inter max-w-xl mx-auto">
            Meet the team driving innovation in Bangladesh's apparel industry.
          </p>
        </div>

        {/* Card */}
        <div className="w-full lg:w-11/12 2xl:w-1/2 mt-10 bg-[#385E95] border border-gray-400 rounded-2xl p-8 flex flex-col md:flex-row items-center  gap-8 mx-auto">

          {/* Text Content */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#4b6fa5] flex items-center justify-center">
              <User className="text-orange-500 w-8 h-8" />
            </div>

            {/* Name */}
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold">
              Istiak Ahmmed
            </h3>

            {/* Position */}
            <span className="text-orange-500 font-semibold text-xl md:text-2xl font-outfit">
              CEO
            </span>

            {/* Contact */}
            <div className="flex items-center gap-2 text-gray-200 text-base font-inter">
              <Phone size={24} className="text-orange-500" />
              +8801680 329598
            </div>

            <div className="flex items-center gap-2 text-gray-200 text-base font-inter">
              <Mail size={24} className="text-orange-500" />
              maxibobd@gmail.com
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              className="w-full h-auto object-cover rounded-xl"
              src={profileImage}
              alt="profile"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;