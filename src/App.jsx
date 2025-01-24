import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Home from "./Components/Home/Home";
import Services from "./Components/Secound section/Services";
import Panner from "./Components/Panner/Panner";
import LowerBanner from "./Components/Panner/LowerBanner";
import Blog from "./Components/Blogs/Blog";
import Footer from "./Components/Footer Section/Footer";
import LogInPopUpScreen from "../src/Components/L.I.P.S/LogInPopUpScreen";
import SigninPopUpScreen from "./Components/L.I.P.S/S.I.P.U/SigninPopUpScreen";
import Dublcated from "./Components/L.I.P.S/S.I.P.U/Dublcated";
import Away from "./Components/Home/Away";
 
export const App = () => {
  const [loginPopup, setLoginPopup] = React.useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup((prev) => !prev);
  };

  return (
    <>
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "#339DFF",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar toggleLoginPopup={toggleLoginPopup} />
        <Home toggleLoginPopup={toggleLoginPopup}/>
        <Away toggleLoginPopup={toggleLoginPopup}/>
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "#339DFF",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Services />
        <Panner  toggleLoginPopup={toggleLoginPopup}/>
        <LowerBanner />
        <Blog toggleLoginPopup={toggleLoginPopup}/>
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Footer />
      </UpdateFollower>
    </main>
        {/* Log In Pop UP */}
        <LogInPopUpScreen loginPopup= {loginPopup} toggleLoginPopup={toggleLoginPopup}/>

    </>

  );
};

export default App;
