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
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const variants1 = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="product_new">
        <div className="text-center p-8">
          <div className="flex justify-between items-center my-4 text-white">
            <h2 className="block text-3xl text-white my-4">Sản Phẩm Nổi Bật</h2>
            <button className="px-4 py-2 border rounded-full hover:underline ">Sản phẩm khác</button>
          </div>
          <div className="content grid grid-cols-5 gap-4">
            <motion.div
              // ref={ref}
              // animate={controls}
              // initial="hidden"
              // variants={variants}
              // transition={{ duration: 0.4 }}
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
              // ref={ref}
              // animate={controls}
              // initial="hidden"
              // variants={variants1}
              // transition={{ duration: 0.5 }}
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
              // ref={ref}
              // animate={controls}
              // initial="hidden"
              // variants={variants2}
              // transition={{ duration: 0.6 }}
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
              // ref={ref}
              // animate={controls}
              // initial="hidden"
              // variants={variants3}
              // transition={{ duration: 0.7 }}
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
              // ref={ref}
              // animate={controls}
              // initial="hidden"
              // variants={variants4}
              // transition={{ duration: 0.8 }}
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
