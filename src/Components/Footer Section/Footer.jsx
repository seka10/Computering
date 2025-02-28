import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaGoogle,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import creditCards from "../../assets/creditCards.png";
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
const Footer = () => {
  return (
    <div>
      <footer className="bg-primary mx-auto pt-12 pb-8 rounded-t-xl hover:rounded-t-3xl max-w-[97%] text-white translate-all translate-y-[527px] hover:-translate-y-0 duration-[2s] hover:trensform">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Mega Frame Details Section */}
            <div className="flex md:flex-row flex-col items-start md:items-center md:space-x-6 space-y-6 md:space-y-0 font-semibold text-xl">
              <div>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1,
                    scale: 2.7,
                    mixBlendMode: "difference",
                    rotate: -720,
                    text: "read",
                  }}
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
                    <motion.img
                      variants={fadeUp(0.5)}
                      initial="hidden"
                      whileInView="show"
                      src={Logo}
                      alt=""
                      className="w-[60px] h-[60px] transform hover:transform -translate-y-4 translate-all duration-700 cursor-pointer hover:scale-125"
                    />
                  </UpdateFollower>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559834291332"
                    className="font-Poppins uppercase hover:normal-case hover:transform translate-all hover:translate-x-2 duration-700"
                    target="_blank"
                  >
                    <motion.span
                      variants={fadeUp(0.9)}
                      initial="hidden"
                      whileInView="show"
                      className="hover:uppercase"
                    >
                      Mega
                    </motion.span>{" "}
                    <motion.span
                      variants={fadeUp(0.7)}
                      initial="hidden"
                      whileInView="show"
                      className="font-extralight text-white/70"
                    >
                      /Frame
                    </motion.span>
                  </a>
                </UpdateFollower>
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
                  <motion.p
                    variants={fadeUp(1)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-4 font-varela lowercase"
                  >
                    Unlock your digital potential with expert computer services,
                    tailored solutions, and 24/7 support to keep your devices
                    running smoothly, efficiently, and securely. From repairs
                    and upgrades to custom setups and troubleshooting, we’ve got
                    everything you need to maximize performance and reliability.
                    Your tech, our passion!{" "}
                  </motion.p>
                </UpdateFollower>
                <br />
                <motion.hr
                  variants={fadeUp(1.1)}
                  initial="hidden"
                  whileInView="show"
                />
                <br />
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
                  <motion.p
                    variants={fadeUp(1)}
                    initial="hidden"
                    whileInView="show"
                    className="flex items-center gap-2 mt-4"
                  >
                    <MdOutlinePhonelinkRing className="translate-all duration-700 hover:scale-150 hover:rotate-[360deg]" />
                    <span
                      onClick={() => {
                        const phoneNumber = "01007596050";
                        navigator.clipboard
                          .writeText(phoneNumber)
                          .then(() => {
                            alert(
                              "Mr. Ayman's number has been copied to your clipboard ! You can call him now 🤍"
                            );
                          })
                          .catch((errorCatcher) => {
                            alert(
                              " Sorry but we couldn't save Mr. Ayman's number to your clipboard ... Maybe you have some issues with your browser .. you can try later perhaps after updating it 🤦‍♂️" +
                                errorCatcher
                            );
                          });
                      }}
                      className="hover:font-bold -translate-y-[3px] translate-all duration-700 cursor-pointer hover:scale-110"
                    >
                      (+20 ) 100-759-6050
                    </span>
                  </motion.p>
                  <a
                    href="https://www.google.com/maps/place/31%C2%B025'41.1%22N+31%C2%B039'38.1%22E/@31.4281026,31.6599,282m/data=!3m1!1e3!4m4!3m3!8m2!3d31.42809!4d31.660588?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                    className="font-Poppins -translate-x-3 translate-all hover:translate-x-3 duration-700"
                    target="_blank"
                  >
                    <motion.p
                      variants={fadeUp(1.1)}
                      initial="hidden"
                      whileInView="show"
                      className="flex items-center gap-2 mt-2"
                    >
                      <MdOutlineAddLocationAlt className="w-[30px] h-[30px] font-light transform -translate-x-2 translate-all duration-700 hover:scale-125 hover:rotate-[360deg]" />
                      Damietta, New Seaidy St behind Arzak Market{" "}
                    </motion.p>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/31%C2%B023'23.8%22N+31%C2%B041'11.8%22E/@31.3899351,31.6859709,282m/data=!3m2!1e3!4b1!4m10!1m5!3m4!2zMzHCsDIzJzIzLjYiTiAzMcKwNDEnMTIuMCJF!8m2!3d31.3898889!4d31.6866667!3m3!8m2!3d31.389934!4d31.686616?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="font-varela -translate-x-3 translate-all hover:translate-x-3 duration-700"
                  >
                    <motion.p
                      variants={fadeUp(1.2)}
                      initial="hidden"
                      whileInView="show"
                      className="flex items-center gap-2 mt-2"
                    >
                      <LiaLocationArrowSolid className="w-[30px] h-[30px] transform -translate-x-2 translate-all duration-700 hover:scale-150 hover:rotate-[360deg]" />{" "}
                      Damietta, EL-Tawfikia In front of the School
                    </motion.p>
                  </a>
                </UpdateFollower>
              </div>
            </div>
            {/* Footer Mega Frame Details Section */}

            {/* Quick Links Section */}
            <div className="mt-8 md:mt-0">
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
                <motion.h1
                  variants={fadeUp(0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="mb-4 font-bold font-Poppins text-3xl"
                >
                  Quick Links
                </motion.h1>
              </UpdateFollower>
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
                <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                  <motion.ul
                    variants={fadeUp(1.3)}
                    initial="hidden"
                    whileInView="show"
                    className="space-y-2 font-varela"
                  >
                    <li className="hover:text-black translate-all hover:translate-x-2 duration-700 cursor-pointer">
                      Home
                    </li>
                    <li className="hover:text-black translate-all hover:translate-x-2 duration-700 cursor-pointer">
                      About
                    </li>
                    <li className="hover:text-black translate-all hover:translate-x-2 duration-700 cursor-pointer">
                      Contact US
                    </li>
                    <li className="hover:text-black translate-all hover:translate-x-2 duration-700 cursor-pointer">
                      Privacy Policy
                    </li>
                  </motion.ul>
                  {/* Dev Projects Section */}
                  <div className="md:mt-0 lg:transform lg:-translate-y-[50px]">
                    <motion.h1
                      variants={fadeUp(0.7)}
                      initial="hidden"
                      whileInView="show"
                      className="mb-4 font-bold font-Poppins text-3xl"
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
                        Dev Projects
                      </UpdateFollower>
                    </motion.h1>
                    <motion.ul
                      variants={fadeUp(1.4)}
                      initial="hidden"
                      whileInView="show"
                      className="space-y-2 font-varela"
                    >
                      <li>
                        <a
                          className="hover:opacity-70 hover:text-orange-500 translate-all duration-700"
                          href="https://online-e-store007.netlify.app/"
                        >
                          Shopiby E-commercial
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opacity-70 hover:text-gray-600 translate-all duration-700"
                          href="https://egypt0mini.netlify.app/"
                        >
                          Traviling In Egypt
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opacity-70 hover:text-red-400 translate-all duration-700"
                          href="https://resto-x-project.vercel.app/"
                        >
                          Foody Zone Resturant
                        </a>
                      </li>
                      <li>
                        <a href=""></a>
                      </li>
                    </motion.ul>
                  </div>
                </div>
              </UpdateFollower>
            </div>
            {/* Social Mega Frame Links Section */}
            <div className="space-y-6">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1,
                  scale: 4,
                  mixBlendMode: "difference",
                  rotate: -720,
                  text: "read",
                }}
              >
                <motion.h1
                  variants={fadeUp(0.8)}
                  initial="hidden"
                  whileInView="show"
                  className="font-bold font-Poppins text-3xl"
                >
                  Follow ME
                </motion.h1>
              </UpdateFollower>
              <div className="flex items-center gap-3 mt-6">
                <motion.a
                  variants={fadeUp(1.5)}
                  initial="hidden"
                  whileInView="show"
                  href="https://www.facebook.com/profile.php?id=100014948612662"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  variants={fadeUp(1.6)}
                  initial="hidden"
                  whileInView="show"
                  href="https://www.instagram.com/Sayed_X_ayman"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  variants={fadeUp(1.7)}
                  initial="hidden"
                  whileInView="show"
                  href="https://github.com/seka10"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  variants={fadeUp(1.8)}
                  initial="hidden"
                  whileInView="show"
                  href="https://api.whatsapp.com/send/?phone=201095463272"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  variants={fadeUp(1.9)}
                  initial="hidden"
                  whileInView="show"
                  href="https://linkedin.com/in/xseka10x"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  variants={fadeUp(2)}
                  initial="hidden"
                  whileInView="show"
                  href="http://t.me/XSeka10X"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaTelegram />
                </motion.a>
                <motion.a
                  variants={fadeUp(2.1)}
                  initial="hidden"
                  whileInView="show"
                  href="mailto:e.auwk1911@gmail.com"
                  aria-label="For Comunication With The Devoloper Directly ❤"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaGoogle />
                </motion.a>
                <motion.a
                  variants={fadeUp(2.2)}
                  initial="hidden"
                  whileInView="show"
                  href="https://x.com/sayedayman92?mx=2"
                  className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
                >
                  <FaTwitter />
                </motion.a>
              </div>
              <div className="mb-2 px-4 py-8">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1,
                    scale: 4,
                    mixBlendMode: "difference",
                    rotate: -720,
                    text: "read",
                  }}
                >
                  <motion.h1
                    variants={fadeUp(2.3)}
                    initial="hidden"
                    whileInView="show"
                    className="mb-3 font-bold font-varela text-2xl"
                  >
                    Payment Methods{" "}
                  </motion.h1>
                  <motion.img
                    variants={fadeUp(2.4)}
                    initial="hidden"
                    whileInView="show"
                    className="w-[75%] h-[75%] cursor-pointer"
                    src={creditCards}
                    alt=""
                  />
                </UpdateFollower>
              </div>
            </div>
            {/* Copyright Sec */}
            <a
              href="https://seka10.github.io/Portfolio-V3.0/"
              alt="Click here to See more Project Including those Project "
            >
              <p className="justify-center items-center text-center text-xl hover:text-green-400 translate-all sm:translate-x-[510px] duration-1000">
                {" "}
                | All Copyrights Receved To The Devoloper |{" "}
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
