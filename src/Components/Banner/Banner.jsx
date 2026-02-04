import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/banner.json")
      .then(res => res.json())
      .then(data => setSlider(data.slides)) // access the slides array
      .catch(err => console.error("Failed to load slides:", err));
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] min-h-[420px] max-h-[900px]">
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
              <div className="absolute inset-0 bg-[#0b2c4d]/80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
