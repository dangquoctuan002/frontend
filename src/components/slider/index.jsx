import "./index.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideItem from "./SlideItem";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function index() {
  return (
    <div className="Silder mt-[60px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          background:
            "url(https://html.rovadex.com/html-creto/assets/img/bg-slider-2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
        }}
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
