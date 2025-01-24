import React from "react";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const easeInOut = [0.42, 0, 0.58, 1]; // cubic-bezier curve

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: easeInOut,
    },
  },
});

const LowerBanner = () => {
  return (
    <section className="py-12 font-varela text-center">
      <div className="container">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
            borderRadius: "1rem",
            transition: { duration: 0.4, ease: easeInOut },
          }}
          className="bg-gradient-to-t from-primary to-primary/60 shadow-md p-8 rounded-xl font-bold text-white"
        >
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
            <motion.p
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="mx-auto max-w-[700px] text-2xl leading-normal"
            >
              We offer value for your money plus exceptional service 24/7.
            </motion.p>
          </UpdateFollower>
        </motion.div>
      </div>
    </section>
  );
};

export default LowerBanner;
