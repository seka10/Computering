import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Dublcated = ({ setShowSignIn }) => {
    const [showPassword, setShowPassword] = useState(false); 
  return (
    <div>
      <div className="p-6">
        <h1 className="mx-auto mb-4 font-bold text-3xl text-center text-white">
          Logging In
        </h1>
        <form className="flex flex-col gap-3">
          <div className="">
            <label htmlFor="Email" className="input-lable">
              Insert Your Email
            </label>
            <input type="email" id="Email" className="input" />
          </div>
         <div className="relative mb-1"> 
                     <label htmlFor="pass" className="input-lable">
                       Enter The Password
                     </label>
                     <input
                       type={showPassword ? "text" : "password"} 
                       id="pass"
                       className="pr-10 input" 
                     />
                     <div
                       className="top-9 right-3 absolute text-gray-500 cursor-pointer"
                       onClick={() => setShowPassword(!showPassword)} 
                     >
                       {showPassword ? (
                         <AiFillEyeInvisible className="text-xl translate-y-1" />
                       ) : (
                         <AiFillEye className="text-xl translate-y-1" />
                       )}
                     </div>
                   </div>
                   <div className="text-white hover:text-blue-400 -translate-y-2 translate-all translate-x-2 duration-700">
                    <a href="">Forget Your Password !</a>
                   </div>
        </form>
        <button className="block bg-gradient-to-r hover:bg-gradient-to-r from-blue-400 hover:from-blue-600 to-blue-600 hover:to-blue-400 shadow-custom-inset mt-7 px-5 py-2 rounded-full w-full text-white hover:text-black -translate-y-7 translate-all duration-700 hover:scale-105">
          LogIn
        </button>
        <hr className="-translate-y-2" />
        <div className="-translate-y-2">
        <p className="my-3 text-center text-sm text-white">Or login with</p>
        <div className="flex justify-center gap-6">
          <div className="flex items-center bg-white shadow-custom-inset rounded-full w-9 h-9 transform translate-all translate-x-4 duration-700 cursor-pointer hover:scale-110">
            <FcGoogle className="text-3xl transform translate-x-[3px]" />
          </div>
          <div className=""></div>
        </div>
        </div>
        <div className="text-white -translate-x-7 translate-y-4">
          <p>
            Don't have an account?{" "}
            <button
              className="hover:text-blue-400 translate-all duration-1000 cursor-pointer hover:scale-110"
              onClick={() => setShowSignIn(true)}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dublcated;
