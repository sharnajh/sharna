import React from "react";
import "./assets/CSS/App.css";
import StarrySky from "./assets/SVGs/StarrySky";
import FixedInfo from "./FixedInfo";
import Home from "./Home";
import About from "./About";
//import Portfolio from "./Portfolio";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <StarrySky />
      <FixedInfo />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
};

export default App;
