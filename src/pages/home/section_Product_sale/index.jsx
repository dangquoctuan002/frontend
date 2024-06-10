import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./index.css";

import { EffectCards } from "swiper/modules";

function index() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const variants1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
     
      <section className="section_product_sale ">
        <div className="text-center p-8">
          <div className="flex justify-center items-center my-4 text-white">
            <h2 className="block text-3xl text-white my-4">Sản Phẩm Nổi Bật</h2>
          </div>
          <div className="content grid grid-cols-2 gap-4">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="rounded-2xl bg-white flex justify-center items-center"
            >
              <div>
                <p className="name font-bold text-xl pb-4">Name</p>
                <p className="title text-xs font-thin text-gray-500">
                  Độc quyền tại chỗ tao
                </p>

                <div className=" ">
                  <button className="py-2 px-4 my-4 text-white text-xs bg-black rounded-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: 0.9 }}
              className="rounded-2xl bg-white flex items-center"
            >
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <picture className="flex justify-center items-center">
                      <img
                        className="py-4"
                        src="https://img.zing.vn/products/taydu2/mansite/skin-2023/prod/taydu_mansite/char/images/thanh/char-1.png"
                        alt=""
                      />
                    </picture>
                    <p className="name font-bold text-xl pb-4">Name</p>
                    <p className="title text-xs font-thin text-gray-500">
                      Độc quyền tại chỗ tao
                    </p>

                    <div className=" ">
                      <button className="py-2 px-4 my-4 text-white text-xs bg-black rounded-full">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
              {/* <picture className="flex justify-center items-center">
                <img
                  className="w-1/2 py-4"
                  src="https://img.zing.vn/products/taydu2/mansite/skin-2023/prod/taydu_mansite/char/images/thanh/char-1.png"
                  alt=""
                />
              </picture>
              <p className="name font-bold text-xl pb-4">Name</p>
              <p className="title text-xs font-thin text-gray-500">
                Độc quyền tại chỗ tao
              </p>

              <div className=" ">
                <button className="py-2 px-4 my-4 text-white text-xs bg-black rounded-full">
                  Buy Now
                </button>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
