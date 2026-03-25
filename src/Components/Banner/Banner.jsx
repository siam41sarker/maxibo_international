import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = ({
  mode = "slider",
  image = "",
  title,
  subtitle,
  description,
  buttons = true,
  size = "medium",
  icon: Icon = null,
  subtitleStyle = "service",
}) => {
  const [slider, setSlider] = useState([]);
  const [company, setCompany] = useState(null);

  /* ---------- Load slider ---------- */
  useEffect(() => {
    if (mode === "slider") {
      fetch("/banner.json")
        .then((res) => res.json())
        .then((data) => setSlider(data.slides));
    }
  }, [mode]);

  /* ---------- Load company data ---------- */
  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => setCompany(data.company));
  }, []);

  if (!company) return null;

  /* =========================================================
     HEIGHT LOGIC (mobile very large for small devices)
     ========================================================= */
  const heightClass =
    size === "small"
      ? "h-[70vh] md:h-[55vh] lg:h-[60vh] min-h-[360px]"
      : size === "medium"
      ? "h-[70vh] md:h-[80vh] lg:h-[85vh] min-h-[520px]"
      : "h-[130vh] md:h-[95vh] lg:h-screen min-h-[520px]";

  /* ---------- Default content ---------- */
  const defaultTitle = (
    <>
      Optimal Solutions for the <br />
      <span className="text-orange-500">Apparel Industry</span>
    </>
  );

  const headingTitle = title || defaultTitle;
  const headingDesc = description || company.description;

  /* =========================================================
     CONTENT BLOCK
     ========================================================= */
  const Content = (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b2c4d]/80"></div>

      <div
        className="
        relative z-10 h-full flex items-center
        pt-24 md:pt-28 lg:pt-32
        lg:w-11/12 mx-auto
        px-4 sm:px-6 md:px-5 lg:px-6
      "
      >
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl text-white">
          {/* Subtitle */}
          {subtitle !== null &&
            (subtitleStyle === "pill" ? (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 font-inter">
                ⚡ {subtitle || company.tagline}
              </div>
            ) : (
              <p className="text-orange-400 font-semibold mb-6 font-inter">
                {subtitle || company.tagline}
              </p>
            ))}

          {/* Icon */}
          {Icon && (
            <div className="mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <Icon className="text-orange-500 w-7 h-7" />
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="font-outfit font-bold leading-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {headingTitle}
          </h1>

          {/* Description */}
          <p className="font-inter text-gray-200 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
            {headingDesc}
          </p>

          {/* Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-3">
              <NavLink to="services" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition">
                Explore Solutions →
              </NavLink>

              <NavLink to="/contact" className="border border-gray-300 px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Contact Us
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );

  /* =========================================================
     RENDER
     ========================================================= */
  return (
    <section className={`relative w-full ${heightClass}`}>
      {mode === "slider" ? (
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full"
        >
          {slider.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bg.src})` }}
              >
                {Content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : mode === "gradient" ? (
        <div className="relative w-full h-full bg-gradient-to-r from-[#1f4c8f] via-[#2a5fa3] to-[#3568a8]">
          {Content}
        </div>
      ) : (
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          {Content}
        </div>
      )}
    </section>
  );
};

export default Banner;