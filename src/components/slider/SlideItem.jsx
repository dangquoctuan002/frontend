import { useEffect, useRef } from "react";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

function SlideItem() {
  return (
    <>
      <div className="container w-full h-full flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
        <div className="dark-slide-info w-full md:w-1/3 text-center md:text-left p-8">
          <h2 className="name text-[30px] md:text-[60px] font-bold">
            SYSTEN XS
          </h2>
          <div className="model text-lg md:text-1xl text-[#23c050]">
            best mode SX-200
          </div>
          <div className="price text-[25px] md:text-[50px] text-[#f57212]">
            $1.699
          </div>
          <motion.a href="#" tabIndex="-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d1d5db",
                color: "black",
              }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="btn btn-green w-full md:w-1/2 py-2 md:py-4 rounded-lg text-lg md:text-2xl text-gray-100 font-light tracking-wide"
            >
              Buy Now
            </motion.button>
          </motion.a>
        </div>
        <img
          className="dark-slide-img block object-cover w-full md:w-2/3 mt-4 md:mt-0"
          src="https://html.rovadex.com/html-creto/assets/img/dark-slide-1.png"
          alt="img"
        />
      </div>
    </>
  );
}

export default SlideItem;
