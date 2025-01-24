import React from "react";
import Image1 from "../../assets/Blogs/Blogs (1).jpg";
import Image2 from "../../assets/Blogs/Blogs (2).jpg";
import Image3 from "../../assets/Blogs/Blogs (3).jpg";
import Image4 from "../../assets/Blogs/Blogs (4).jpg";
import Image5 from "../../assets/Blogs/Blogs (5).jpg";
import Image6 from "../../assets/Blogs/Blogs (6).jpg";
import Image7 from "../../assets/Blogs/Blogs (7).jpg";
import Image8 from "../../assets/Blogs/Blogs (8).jpg";
import Image9 from "../../assets/Blogs/Blogs (9).jpg";
import Image10 from "../../assets/Blogs/Blogs (10).jpg";
import Image11 from "../../assets/Blogs/Blogs (11).jpg";
import Image12 from "../../assets/Blogs/Blogs (12).jpg";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    desc: "Explore a wide range of high-quality joysticks, perfect for gaming enthusiasts, available now at unbeatable prices.",
    img: Image1,
    title: "Joysticks",
  },
  {
    id: 2,
    desc: "Discover premium quality headphones at unbeatable prices . Experience crystal-clear sound, cutting-edge designs, and unmatched comfor.",
    img: Image2,
    title: "HeadPhones",
  },
  {
    id: 3,
    desc: "Upgrade your typing and gaming experience with our premium keyboards. From mechanical to ergonomic designs, find the perfect fit for productivity and play!",
    img: Image3,
    title: "KeyBoards",
  },
  {
    id: 4,
    desc: "Enhance your precision and control with high-performance mouses. Whether for gaming or work, explore ergonomic designs, customizable buttons, and lightning-fast responsiveness.",
    img: Image4,
    title: "Mouses",
  },
  {
    id: 5,
    desc: "Discover reliable and efficient printers. From high-speed laser printers to versatile all-in-ones, find the perfect solution for your home or office!",
    img: Image5,
    title: "printers",
  },
  {
    id: 6,
    desc: "Explore premium screens for PCs and laptops. From ultra-clear 4K monitors to portable laptop screens, find the perfect display for work, gaming, and entertainment",
    img: Image6,
    title: "Screens",
  },
  {
    id: 7,
    desc: "Immerse yourself in rich, crystal-clear audio with speakers for PCs and laptops. From compact designs to powerful sound systems, elevate your listening experience today.",
    img: Image7,
    title: "Speakers",
  },
  {
    id: 8,
    desc: "Find durable and reliable laptop chargers. Compatible with top brands, our chargers ensure fast and safe power delivery!",
    img: Image8,
    title: "Laptops charger",
  },
  {
    id: 9,
    desc: "durable and reliable hard disks. Compatible with top systems, our drives provide fast and secure data storage. explore SSDs and HDDs at good prices",
    img: Image9,
    title: "Hard Disks",
  },
  {
    id: 10,
    desc: "our Rams high-performance RAMs. Designed for top-tier compatibility, our memory options boost speed and multitasking efficiency.perfect for gaming, work, or everyday use!",
    img: Image10,
    title: "Rams",
  },
  {
    id: 11,
    desc: "Find durable and reliable laptop chargers. Compatible with top brands, our chargers ensure fast and safe power delivery!",
    img: Image11,
    title: "Graphics cards",
  },
  {
    id: 12,
    desc: "Find durable and reliable laptop chargers. Compatible with top brands, our chargers ensure fast and safe power delivery!",
    img: Image12,
    title: "Cables ",
  },
];
const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.5 },
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
});
const Blog = ({toggleLoginPopup}) => {
  return (
    <div>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1,
          scale: 2,
          mixBlendMode: "difference",
          rotate: -720,
          text: "read",
        }}
      >
        <section className="bg-gray-50">
          <div className="py-14 container">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1,
                scale: 4,
                rotate: -720,
                text: "read",
              }}
            >
              <motion.h1
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className="pb-8 font-bold font-Poppins text-3xl text-center"
              >
                Blog
              </motion.h1>
            </UpdateFollower>
            <div className="">
              <motion.div
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4"
              >
                {BlogsData.map((data) => {
                  return (
                    <motion.div
                      variants={fadeUp(1)}
                      initial="hidden"
                      whileInView="show"
                      className="flex flex-col justify-center items-center bg-white hover:bg-primary shadow-lg hover:shadow-3xl mx-auto p-5 rounded-md hover:rounded-3xl max-w-[300px] text-center translate-all hover:-translate-y-6 duration-500 overflow-hidden hover:scale-105"
                    >
                      <UpdateFollower
                        mouseOptions={{
                          backgroundColor: "white",
                          zIndex: 999,
                          followSpeed: 1,
                          scale: 3,
                          mixBlendMode: "difference",
                          rotate: -720,
                          text: "read",
                        }}
                      >
                        <img
                          src={data.img}
                          alt=""
                          className="hover:shadow-lg hover:mb-2 rounded-md hover:rounded-3xl translate-all duration-500 hover:scale-110"
                        />
                        <hi className="justify-center items-center mt-2 mb-2 font-bold font-varela text-center">
                          {data.title}
                        </hi>
                        <p className="font-normal font-Poppins text-center">
                          {data.desc}
                        </p>
                        <button 
                        onClick={toggleLoginPopup}
                        className="border-[#e33343] border-2 hover:bg-[#e33343] mt-3 px-4 py-2 rounded-md hover:rounded-2xl text-[#e33343] hover:text-white translate-all duration-700 hover:scale-110">
                        Shop Now !
                        </button>
                      </UpdateFollower>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </UpdateFollower>
    </div>
  );
};

export default Blog;
