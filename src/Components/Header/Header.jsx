import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../../assets/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    { name: "Automation Solutions", path: "/services/automation" },
    { name: "Consulting Services", path: "/services/consulting" },
    { name: "Technical Support", path: "/services/support" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full lg:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center shrink-0">
            <img
              src={logo}
              alt="Maxibo International Logo"
              className="h-10 md:h-20 sm:h-12 w-auto"
            />
            <span
              className={`md:text-xl sm:text-sm font-semibold mt-1 text-center font-outfit transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Maxibo <span className="text-[#2B9EC0]">International</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative font-inter">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm lg:text-base font-medium transition ${
                  scrolled ? "text-gray-700" : "text-white hover:text-orange-300"
                }`}
              >
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-medium transition ${
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

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/quote"
              className={`bg-orange-500 hover:bg-orange-600 text-white text-sm lg:text-base font-semibold px-4 lg:px-5 py-2.5 rounded-lg transition shadow`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-gray-100"
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition ${
                isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition ${
                isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            About
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-left text-base font-medium text-gray-700 py-2 hover:text-orange-500 transition"
            >
              Services{" "}
              <ChevronDown className={`transition ${servicesOpen ? "rotate-180" : ""}`} size={18} />
            </button>

            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {serviceLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm transition ${
                        isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium py-2 transition ${
                  isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/quote"
            className="mt-3 bg-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
