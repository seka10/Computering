import React from "react";
import Laptop1 from "../../assets/Pics/1.png";
import Laptop2 from "../../assets/Pics/2.png";
import Laptop3 from "../../assets/Pics/3.png";
import Laptop4 from "../../assets/Pics/4.png";
import Laptop5 from "../../assets/Pics/5.png";
import Laptop6 from "../../assets/Pics/6.png";
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
    title: "Gaming Laptop",
    price: "100$",
    discription:
      "A gaming laptop is designed for high performance, equipped with powerful processors and advanced graphics cards. It offers enhanced cooling systems, fast refresh rates, and superior display quality, making it ideal for smooth gaming and multitasking.",
    image: Laptop1,
    model: "Model Silver",
    bgColor: "#d8d1d1",
  },
  {
    id: 2,
    title: "Business Laptop",
    price: "100$",
    discription:
      "A business laptop is built for productivity, offering reliable performance, long battery life, and portability. It often features a robust design, advanced security options, and efficient processors, making it perfect for professionals who need to work on the go.",
    image: Laptop2,
    model: "Model RGB",
    bgColor: "#3d3d3d",
  },
  {
    id: 3,
    title: "Workstation Laptop",
    price: "100$",
    discription:
      "A workstation laptop is designed for high-performance tasks such as 3D modeling, video editing, and heavy computational work. It comes with powerful processors, large amounts of RAM, and high-quality graphics, making it ideal for professionals in creative fields.",
    image: Laptop3,
    model: "Model red",
    bgColor: "#e05553",
  },
  {
    id: 4,
    title: "Everyday Laptop",
    price: "100$",
    discription:
      "An everyday laptop is built for general tasks like browsing, email, and document editing. It typically features a balance of performance and affordability, with moderate processing power, ample storage, and a comfortable design for daily use and portability.",
    image: Laptop4,
    model: "Model light white",
    bgColor: "#054d77",
  },
  {
    id: 5,
    title: "Ultrabooks Laptop",
    price: "100$",
    discription:
      "Ultrabooks are lightweight, slim, and powerful laptops designed for portability and high performance. They typically feature long battery life, fast processors, and solid-state drives (SSDs), making them ideal for professionals and travelers who require efficiency without sacrificing style.",
    image: Laptop5,
    model: "Model Dark Blue",
    bgColor: "#4551fc",
  },
  {
    id: 6,
    title: "2-in-1 Laptop",
    price: "100$",
    discription:
      "A 2-in-1 laptop combines the functionality of both a laptop and a tablet. With a detachable keyboard or a 360-degree hinge, these devices provide versatility for work, entertainment, and creativity, offering a seamless transition between laptop and tablet modes.",
    image: Laptop6,
    model: "Model Gold",
    bgColor: "#f3d52b",
  },
];

const Home = () => {
  const [activeData, setActiveData] = React.useState(ImageData[0]);
  return (
    <div>
      <section className="bg-brandDark font-varela text-white">
        <div className="flex md:flex-row flex-col justify-between items-center gap-10 mx-auto px-5 py-10 container">
          {/* Left Side - Product Information */}
          <div className="flex flex-col justify-center items-center md:items-center space-y-5 md:max-w-[500px] text-center">
            <AnimatePresence mode="wait">
              <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1,
                scale: 7,
                mixBlendMode: "difference",
                rotate:-720,
              }}
              >
              <motion.h1
                key={activeData.id}
                variants={fadeUp(0.2)}
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
                rotate:-720,
              }}>
                <AnimatePresence mode="wait">
            <motion.p
            key={activeData.id}
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="translate-all duration-1000">
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
                rotate:-3600,
                backgroundElement:(<div>
                  <img src={activeData.image} alt="" />
                </div>)
              }}>
            <AnimatePresence mode="wait">
            <motion.button
            key={activeData.id}
            variants={fadeUp(1)}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ backgroundColor: activeData.bgColor }}
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
                rotate:-720,
              }}>
              <p className="text-sm uppercase">Top Products For You</p>
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
                    backgroundColor:item.bgColor,
                    zIndex: 999,
                    followSpeed: 1,
                    scale: 5,
                    text:"View Details",
                    textFontSize:"3px",
                    rotate:-360,
                    
                  }}
                  >
                  <div
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
                  </div>
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
             initial={{opacity:0, scale:0.5,y:100}}
             animate={{opacity:1, scale:1,y:0}}
             transition={{duration:0.5,delay:0.5, ease:easeInOut}}
             exit={{opacity:0, scale:0.5,y:100,transition:{duration:0.5}}}
             src={activeData.image}
              alt={activeData.title}
              className="w-[300px] md:w-[400px] xl:w-[550px] translate-all duration-1000"
            />
          </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
