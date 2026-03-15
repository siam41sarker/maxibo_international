import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const Banner = ({
  mode = "slider", // slider | image | gradient
  image = "",
  title,
  subtitle,
  description,
  buttons = true,
  size = "large",
}) => {
  const [slider, setSlider] = useState([]);
  const [company, setCompany] = useState(null);

  // Load slider images (homepage)
  useEffect(() => {
    if (mode === "slider") {
      fetch("/banner.json")
        .then((res) => res.json())
        .then((data) => setSlider(data.slides));
    }
  }, [mode]);

  // Load company info
  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => setCompany(data.company));
  }, []);

  if (!company) return null;

  // Banner height control
  const heightClass =
    size === "small"
      ? "h-[45vh] md:h-[55vh] lg:h-[60vh] min-h-[320px]"
      : size === "medium"
      ? "h-[70vh] md:h-[80vh] lg:h-[85vh] min-h-[420px]"
      : "h-[90vh] md:h-[95vh] lg:h-screen min-h-[520px]";

  const defaultTitle = (
    <>
      Optimal Solutions for the <br />
      <span className="text-orange-500">Apparel Industry</span>
    </>
  );

  const headingTitle = title || defaultTitle;
  const headingDesc = description || company.description;

  const Content = (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b2c4d]/80"></div>

      {/* Content */}
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
          {subtitle !== null && (
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              ⚡ {subtitle || company.tagline}
            </div>
          )}

          {/* Title — Outfit Font */}
          <h1
            className="
            font-outfit font-bold leading-tight mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          "
          >
            {headingTitle}
          </h1>

          {/* Description — Inter Font */}
          <p
            className="
            font-inter text-gray-200 mb-6
            text-sm sm:text-base md:text-lg lg:text-xl
          "
          >
            {headingDesc}
          </p>

          {/* Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition">
                Explore Solutions →
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <section className={`relative w-full ${heightClass}`}>
      {/* HOMEPAGE SLIDER */}
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
        /* GRADIENT BACKGROUND */
        <div className="relative w-full h-full bg-gradient-to-r from-[#1f4c8f] via-[#2a5fa3] to-[#3568a8]">
          {Content}
        </div>
      ) : (
        /* STATIC IMAGE */
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