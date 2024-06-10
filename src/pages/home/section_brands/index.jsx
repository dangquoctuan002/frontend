import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function index() {

  return (
    <>
      <section className="brand">
        <div className="text-center p-8">
          <div className="content grid grid-cols-1">
            <motion.div className="rounded-2x flex flex-wrap justify-center items-center gap-10">
                <img src="https://html.rovadex.com/html-creto/assets/img/client-1.svg" alt="" />
                <img src="https://html.rovadex.com/html-creto/assets/img/client-2.svg" alt="" />
                <img src="https://html.rovadex.com/html-creto/assets/img/client-3.svg" alt="" />
                <img src="https://html.rovadex.com/html-creto/assets/img/client-4.svg" alt="" />
                <img src="https://html.rovadex.com/html-creto/assets/img/client-5.svg" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
