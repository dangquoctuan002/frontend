import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="section_category min-h-[100vh] ">
        <div className="text-center p-8">
          <h2 className="block text-3xl text-black my-4">Sản Phẩm Nổi Bật</h2>
          <ul className="flex justify-center items-center gap-5 my-4 text-black">
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
          </ul>
          <div className="content grid grid-cols-4 gap-4">
            <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants2}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 rounded-2xl bg-white">
              <picture className="">
                <img
                  className="rounded-2xl w-full"
                  src="https://img.zing.vn/products/taydu2/mansite/skin-2023/prod/taydu_mansite/char/images/thanh/char-1.png"
                  alt=""
                />
              </picture>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white"
            >
              <picture className="flex justify-center items-center">
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
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white"
            >
              <picture className="flex justify-center items-center">
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
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="rounded-2xl bg-white"
            >
              <picture className="flex justify-center items-center">
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
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 0.9 }}
              className="rounded-2xl bg-white"
            >
              <picture className="flex justify-center items-center">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
