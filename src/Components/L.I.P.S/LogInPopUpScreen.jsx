import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SigninPopUpScreen from "./S.I.P.U/SigninPopUpScreen";
import Dublcated from "./S.I.P.U/Dublcated"; 
const LogInPopUpScreen = ({ loginPopup, toggleLoginPopup }) => {
  const loginPopupRef = useRef();
  const [showSignIn, setShowSignIn] = useState(false); 

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginPopupRef.current && loginPopupRef.current === e.target) {
        toggleLoginPopup();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleLoginPopup]);

  return (
    <div>
      {loginPopup && (
        <div
          ref={loginPopupRef}
          className="top-0 left-0 z-50 fixed flex justify-center items-center bg-black/50 w-full h-full overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 shadow-custom-inset backdrop-blur-lg p-6 rounded-xl sm:w-[600px] md:w-[380px] duration-1000"
          >
            {/* عرض النموذج حسب الحالة */}
            {showSignIn ? (
              <SigninPopUpScreen setShowSignIn={setShowSignIn} />
            ) : (
              <Dublcated setShowSignIn={setShowSignIn} />
            )}

          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LogInPopUpScreen;
