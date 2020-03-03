import React from "react";
import "./assets/CSS/App.css";
import StarrySky from "./assets/SVGs/StarrySky";
import FixedInfo from "./FixedInfo";
import Home from "./Home";
import About from "./About";
//import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <StarrySky />
      <FixedInfo />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
