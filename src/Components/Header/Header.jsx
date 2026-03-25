import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Installation & Setup", path: "/services/Installation" },
    { name: "Training & Education", path: "/services/trainingandeducation" },
    { name: "Consultancy", path: "/services/Consultancy" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full lg:w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center shrink-0">
            <img src={logo} alt="Logo" className="h-10 md:h-16 w-auto" />
            <span
              className={`md:text-lg sm:text-sm font-semibold mt-1 text-center transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Maxibo <span className="text-[#2B9EC0]">International</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm lg:text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`
                }
              >
                Services <ChevronDown size={16} />
              </NavLink>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {serviceLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm rounded-md transition ${
                        isActive
                          ? "text-orange-500 bg-orange-50"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm lg:text-base font-semibold px-4 lg:px-5 py-2.5 rounded-lg transition shadow"
            >
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md ${open ? "block" : "hidden"}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium py-2 transition-colors duration-300 ${
                  isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition-colors duration-300 ${
                isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            Services
          </NavLink>
          <div className="pl-4 flex flex-col gap-1">
            {serviceLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm text-gray-600 hover:text-orange-500 py-1 ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/contact"
            className="mt-3 bg-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get a Quote
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;