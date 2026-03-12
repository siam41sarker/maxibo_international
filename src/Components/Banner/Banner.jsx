import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setSlider(data.slides))
      .catch((err) => console.error("Failed to load slides:", err));
  }, []);

  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => setCompany(data.company))
      .catch((err) => console.error("Failed to load company:", err));
  }, []);

  if (!company) return null;

  return (
    <section className="relative w-full h-[90vh] md:h-[95vh] lg:h-screen min-h-[520px] font-inter">

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

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0b2c4d]/80"></div>

              {/* Content */}
              <div className="relative z-10 w-full xl:w-11/12  mx-auto h-full flex items-center px-6 sm:px-10">

                <div className="max-w-xl md:max-w-2xl lg:max-w-3xl text-white">

                  {/* Tagline */}
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6">
                    ⚡ {company.tagline}
                  </div>

                  {/* Title */}
                  <h1 className="font-outfit font-bold leading-tight mb-5 sm:mb-6
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl">

                    Optimal Solutions for the <br />
                    <span className="text-orange-500">
                      Apparel Industry
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-200 mb-7 sm:mb-8
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl">

                    {company.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                    <button className="bg-orange-500 hover:bg-orange-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold transition text-sm sm:text-base">
                      Explore Solutions →
                    </button>

                    <button className="border border-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base">
                      Contact Us
                    </button>

                  </div>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Banner;