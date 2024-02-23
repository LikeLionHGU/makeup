import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import banner1 from "./img/banner1.png";
import banner2 from "./img/banner2.png";
import banner3 from "./img/banner3.png";

import "./Slider.module.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Slider() {
  // const swiperStyle = {
  //   // position: "relative",
  //   width: "100%",
  //   height: "550px",
  // };

  return (
    <Swiper
      style={{ margin: "auto", whiteSpace: "pre-wrap" }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 1,
        },
      }}
      // freeMode={true} // 자유로운가
      loop={true} // 무한 루프
      speed={1000} // 슬라이드 이동 속도
      // loopedSlides={1}
      lazyLoading={true}
      loopAdditionalSlides={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }} // 자동 이동
      slideToClickedSlide={true} // 슬라이드 클릭 시 이동
      className="swiper"
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={banner1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} />
      </SwiperSlide>
    </Swiper>
  );
}
