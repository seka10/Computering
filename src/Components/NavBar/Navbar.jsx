import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { MdGTranslate } from "react-icons/md";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";

const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
    hideOnMobile: true,  
  },
  {
    id: 2,
    title: "Category",
    link: "#",
    hideOnMobile: true,
  },
  {
    id: 3,
    title: "Blogs",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
    hideOnMobile: true,
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
    hideOnMobile: true,
  },
];

const Navbar = ({toggleLoginPopup}) => {
  return (
    <div>
      <div className="bg-brandDark hover:shadow-lg backdrop-blur-sm hover:backdrop-blur-lg py-3 font-varela text-white">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative flex justify-between items-center container"
        >
          {/* -- Logo Sec -- */}
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1,
              scale: 3,
              mixBlendMode: "difference",
            }}
          >
            <div className="flex items-center space-x-2 font-semibold text-xl uppercase transform translate-x-10">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <img
                  src={Logo}
                  alt="Mega Frame Logo"
                  className="w-[45px] h-[45px] hover:transform translate-all duration-700 hover:scale-125"
                />
              </UpdateFollower>
              <a
                href="https://www.facebook.com/profile.php?id=61559834291332" target="_blank"
                className="hover:normal-case hover:transform translate-all hover:translate-x-2 duration-700"
              >
                <span className="hover:uppercase">Mega</span>{" "}
                <span className="font-extralight text-white/70">/Frame</span>
              </a>
            </div>
          </UpdateFollower>
          {/* -- Menu Sec -- */}
          <div className="md:block hidden">
            <ul className="flex items-center gap-4">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 2.5,
                  mixBlendMode: "difference",
                }}
              >
                <button className="text-xl translate-all translate-y-1 duration-700 hover:scale-150">
                  <FaComputer />
                </button>
              </UpdateFollower>
              {NavBarMenu.map((item) =>
                item.hideOnMobile ? (
                  <li key={item.id} className="md:block hidden">
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                    >
                      <a href={item.link} className="inline-block px-3 py-2 text-sm uppercase">
                        {item.title}
                      </a>
                    </UpdateFollower>
                  </li>
                ) : (
                  <li key={item.id}>
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                    >
                      <a href={item.link} className="inline-block px-3 py-2 text-sm uppercase">
                        {item.title}
                      </a>
                    </UpdateFollower>
                  </li>
                )
              )}
              <div className="md:hidden mr-5">
              </div>
            </ul>
          </div>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 3,
                  mixBlendMode: "difference",
                }}
              >
                <button className="w-1 text-xl translate-all translate-x-1 translate-y-1 sm:translate-y-1 duration-700 hover:scale-150">
                  <MdGTranslate />
                </button>
              </UpdateFollower>
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 0.5,
              scale: 4,
              mixBlendMode: "difference",
            }}
          >
            <button onClick={toggleLoginPopup} className="hover:bg-white rounded-md hover:rounded-3xl w-16 h-7 hover:text-black -translate-x-5 translate-all duration-700 hover:scale-125">
              LogIn
            </button>
          </UpdateFollower>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
