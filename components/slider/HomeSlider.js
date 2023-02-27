// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import slider1 from "../../assets/images/home-slider/slider-1.jpg";
import slider2 from "../../assets/images/home-slider/slider-2.jpg";
import slider3 from "../../assets/images/home-slider/slider-3.jpg";
import slider4 from "../../assets/images/home-slider/slider-4.jpg";
import slider5 from "../../assets/images/home-slider/slider-5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

const HomeSlider = () => {
  const sliders = [
    {
      id: 1,
      image: slider1,
    },
    {
      id: 2,
      image: slider2,
    },
    {
      id: 3,
      image: slider3,
    },
    {
      id: 4,
      image: slider4,
    },
    {
      id: 5,
      image: slider5,
    },
  ];
  return (
    <Swiper
      id="home-slider"
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      navigation={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={true}>
      {sliders.map((slider) => (
        <SwiperSlide key={slider.id}>
          <Image src={slider.image} layout="responsive" alt={`Slider ${slider.id}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
