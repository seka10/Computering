import React, { useEffect } from "react";
import pannerBG from "../../assets/Panner.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UpdateFollower } from "react-mouse-follower";

const easeInOut = [0.42, 0, 0.58, 1]; // cubic-bezier curve
const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Panner = ({toggleLoginPopup}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { duration: 1, delay: 0.7, ease: "easeInOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -100,
        rotate: -180,
      });
    }
  }, [inView, controls]);

  return (
    <div>
      <section>
        <div className="gap-12 space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-2 py-14 container">
          {/* Panner Image  */}
          <motion.div
            ref={ref}
            className="translate-x-10"
          >
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={controls}
              src={pannerBG}
              alt=""
              className="w-[300px] md:w-[400px]"
            />
          </motion.div>
          {/* Panner Text Info  */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 lg:max-w-[450px] text-center md:text-left">
              <motion.h3
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="font-Poppins font-semibold text-3xl lg:text-4xl duration-500 transtion-all"
              >
                More Version From Famous Laptops Companies With Modern
                Technology
              </motion.h3>

              <motion.p
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
              >
                In our online store offers a wide selection of top-quality
                laptops, featuring the latest technology designed for high
                performance, sleek style, and long-lasting reliability to meet
                all your computing needs
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1,
                  scale: 5,
                  mixBlendMode: "difference",
                  rotate: -720,
                }}
              >
                <motion.button
                onClick={toggleLoginPopup}
                  variants={fadeUp(1)}
                  initial="hidden"
                  whileInView="show"
                  className="border-[#e33343] border-2 hover:bg-[#e33343] px-4 py-2 rounded-md hover:rounded-2xl text-[#e33343] hover:text-white translate-all duration-700 hover:scale-110"
                >
                  Shop Now !
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panner;
