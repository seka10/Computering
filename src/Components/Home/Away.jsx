import React from "react";
import pc1 from "../../assets/Clone/pic1.png";
import pc2 from "../../assets/Clone/pic2.png";
import pc3 from "../../assets/Clone/pic3.png";
import pc4 from "../../assets/Clone/pic4.png";
import pc5 from "../../assets/Clone/pic5.png";
import pc6 from "../../assets/Clone/pic6.png";

import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, delay, easeInOut, motion } from "framer-motion";
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
      Transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      scale: 1,
      Transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};
const ImageData = [
  {
    id: 1,
    title: "Desktop PCs",
    price: "8,400 E.P",
    discription:
    "An average performance PC suitable for daily tasks like browsing, office programs, and watching videos. Ideal for home and office use, offering efficient multitasking and smooth performance for routine activities",
    image: pc1,
    model: "Tower",
    bgColor: "#6e6e6e",
  },
  {
    id: 2,
    title: "Gaming PCs",
    price: "13,600 E.P",
    discription:
      "A powerful processor and excellent graphics card (NVIDIA RTX/AMD Radeon) with a good cooling system to prevent overheating. Designed to run modern games at high resolution with smooth performance.",
    image: pc2,
    model: "Pre-built Gaming PCs",
    bgColor: "#ff0000",
  },
  {
    id: 3,
    title: "Workstations",
    price: "23,700 E.P",
    discription:
    "Multi-core processors, large RAM, and high-performance storage for professional tasks like 3D design, video editing, and software development. Ensures smooth handling of resource-intensive applications and multitaskin",
    image: pc3,
    model: "Dual Processor Workstation",
    bgColor: "#7bff00",
  },
  {
    id: 4,
    title: "Mini PCs",
    price: "6,100 E.P",
    discription:
    "A compact design, ideal for simple tasks like internet browsing, watching videos, and office work. Offers efficiency for everyday use without the need for high-end hardware",
    image: pc4,
    model: "Raspberry Pi",
    bgColor: "#ff00bf",
  },
  {
    id: 5,
    title: "Servers",
    price: "12,800 E.P",
    discription:
      "Designed for continuous operation, featuring powerful performance and high reliability. Ideal for database management, website hosting, and cloud services, ensuring smooth and efficient handling of demanding tasks",
    image: pc5,
    model: "Rackmount Servers",
    bgColor: "#9900ff",
  },
  {
    id:6,
    title: "All-in-One",
    price: "9,999 E.P",
    discription:
      "A compact screen with integrated device components, offering a simple and elegant design. Perfect for small offices or homes, where space-saving and functionality are essentia",
    image: pc6,
    model: "All-in-One Desktop",
    bgColor: "#00f7ff",
  },

];

const Home = ({toggleLoginPopup}) => {
  const [activeData, setActiveData] = React.useState(ImageData[0]);
  return (
    <div>
      <section className="bg-brandDark font-varela text-white">
        <div className="flex md:flex-row flex-col justify-between items-center gap-10 mx-auto px-5 py-10 container">
          {/* Left Side - Product Information */}
          <div className="flex flex-col justify-center items-center md:items-center space-y-5 md:max-w-[600px] text-center">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1,
                  scale: 7,
                  mixBlendMode: "difference",
                  rotate: -720,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={fadeUp(0.5)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ color: activeData.bgColor }}
                  className="font-bold text-3xl lg:text-6xl translate-all duration-1000"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1,
                scale: 4,
                mixBlendMode: "difference",
                rotate: -720,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.7)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="translate-all duration-1000"
                >
                  {activeData.discription}
                </motion.p>
              </AnimatePresence>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: activeData.bgColor,
                zIndex: 999,
                followSpeed: 1,
                scale: 5,
                rotate: -3600,
                backgroundElement: (
                  <div>
                    <img src={activeData.image} alt="" />
                  </div>
                ),
              }}
            >
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeData.id}
                  variants={fadeUp(1)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ backgroundColor: activeData.bgColor }}
                  onClick={toggleLoginPopup}
                  className="inline-block justify-center items-center mt-6 px-4 py-2 rounded-md hover:rounded-2xl font-normal text-center transition-all duration-700 hover:scale-110"
                >
                  Buy And Enjoy
                </motion.button>
              </AnimatePresence>
            </UpdateFollower>

            {/* Image List */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-10">
              <div
                style={{ backgroundColor: activeData.bgColor }}
                className="w-24 h-[1px]"
              ></div>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1,
                  scale: 3,
                  mixBlendMode: "difference",
                  rotate: -720,
                }}
              >
                <motion.p
                  variants={fadeUp(1)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm uppercase"
                >
                  Top Products For You
                </motion.p>
              </UpdateFollower>
              <div
                style={{ backgroundColor: activeData.bgColor }}
                className="w-24 h-[1px]"
              ></div>
            </div>

            {/* Image Switcher */}
            <div className="gap-10 grid grid-cols-3 mt-10">
              {ImageData.map((item) => {
                return (
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 999,
                      followSpeed: 1,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                      rotate: -360,
                    }}
                  >
                    <motion.div
                      variants={fadeUp(1.5)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      key={item.id}
                      className="place-items-center grid grid-cols-2 cursor-pointer"
                      onClick={() => setActiveData(item)}
                    >
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-[200px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="font-normal text-wrap text-xs">
                          {item.model}
                        </p>
                        <p className="font-bold text-base">{item.price}</p>
                      </div>
                    </motion.div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                variants={fadeUp(0.7)}
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  y: 100,
                  transition: { duration: 0.5 },
                }}
                src={activeData.image}
                alt={activeData.title}
                loading="eager"
                className="w-[200px] md:w-[400px] xl:w-[550px] translate-all duration-1000"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
