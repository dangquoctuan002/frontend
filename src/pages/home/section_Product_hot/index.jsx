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
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
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
      <section className="product_hot">
        <div className="text-center p-8">
        <h2 className="block text-3xl text-white my-4">Sản Phẩm Nổi Bật</h2>
          <ul className="flex justify-center items-center gap-5 my-4 text-white">
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
            <li>ưu đãi</li>
          </ul>
          <div className="content grid grid-cols-1">
            <motion.div className="rounded-2xl bg-white">
              <motion.picture
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ duration: 0.9 }}
                className="flex justify-center items-center"
              >
                <img
                  className="w-1/2 py-4"
                  src="https://img.zing.vn/products/taydu2/mansite/skin-2023/prod/taydu_mansite/char/images/thanh/char-1.png"
                  alt=""
                />
              </motion.picture>
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
