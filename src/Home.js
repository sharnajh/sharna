import React, { useState, useEffect } from "react";
import Logo from "./assets/SVGs/Logo.js";
import Fade from "./hooks/Fade";

const Home = () => {
  const [showScrollAction, toggleScrollAction] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset <= 100) {
      toggleScrollAction(true);
    } else {
      toggleScrollAction(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="section" id="main">
      <div id="logowrapper">
        <Logo />
      </div>

      <h1>
        Hi, I'm <span style={{ color: "#FF1A77" }}>Sharna</span>
      </h1>
      <h1 style={{ fontSize: "23px" }}>I'm a Software Engineer</h1>
      <Fade className="scroll-action" show={showScrollAction}>
        Scroll
      </Fade>
    </div>
  );
};

export default Home;
