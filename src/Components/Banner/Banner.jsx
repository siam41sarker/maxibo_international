import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import slide1 from '../../assets/banner.jpg';
import slide2 from "../../assets/banner2.jpg";
import slide3 from "../../assets/header2.jpg"
const slides = [
  slide1,
  slide2,
  slide3,
];

const Banner = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#0b2c4d]/80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
