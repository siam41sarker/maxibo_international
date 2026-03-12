import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B2759] text-white">
      <div className="w-11/12 md:w-10/12 lg:w-11/12 mx-auto py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 - Logo + Description + Social */}
        <div>
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="h-20 md:h-24 select-none" />
            <h2 className="text-base md:text-lg font-outfit font-semibold">
              Maxibo <span className="text-[#CED6E0]">International</span>
            </h2>
          </div>

          <p className="mt-6 text-base leading-relaxed text-[#CED6E0] max-w-[300px] font-inter">
            Impel you to Next. We deliver optimal solutions for the apparel
            industry with globally renowned products and expert consultancy.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-[#1B3D7A] p-3 rounded-full hover:bg-[#2B9EC0] transition cursor-pointer"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-[#1B3D7A] p-3 rounded-full hover:bg-[#2B9EC0] transition cursor-pointer"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="#"
              className="bg-[#1B3D7A] p-3 rounded-full hover:bg-[#2B9EC0] transition cursor-pointer"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div className="lg:pt-7">
          <h3 className="font-semibold text-lg mb-5 text-white font-outfit">Company</h3>
          <ul className="space-y-3 text-[#CED6E0] font-inter">
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
            <li><a href="/partners" className="hover:text-orange-500">Partners</a></li>
            <li><a href="/products" className="hover:text-orange-500">Products</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="lg:pt-7">
          <h3 className="font-semibold text-lg mb-5 text-white font-outfit">Services</h3>
          <ul className="space-y-3 text-[#CED6E0] font-inter">
            <li><a href="/services/installation" className="hover:text-orange-500">Installation & Setup</a></li>
            <li><a href="/services/training" className="hover:text-orange-500">Training & Education</a></li>
            <li><a href="/services/consultancy" className="hover:text-orange-500">Consultancy</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="lg:pt-7">
          <h3 className="font-semibold text-lg mb-5 text-white font-outfit">Contact Us</h3>
          <ul className="space-y-4 font-inter text-[#CED6E0]">

            {/* Phone */}
            <li>
              <a
                href="tel:+8801680329598"
                className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer"
              >
                <MdPhone className="text-orange-500 text-xl shrink-0" />
                <span>+8801680329598</span>
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:maxibobd@gmail.com"
                className="flex items-center gap-3 hover:text-orange-500 transition cursor-pointer"
              >
                <MdEmail className="text-orange-500 text-xl shrink-0" />
                <span>maxibobd@gmail.com</span>
              </a>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-orange-500 text-2xl mt-1 shrink-0" />
              <span>
                House# 17 (5th Floor), Road# 05, Sector# 12, Uttara,
                Dhaka-1230
              </span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="w-11/12 md:w-10/12 mx-auto py-5 flex flex-col sm:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© 2026 Maxibo International. All rights reserved.</p>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-500">Terms of Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
