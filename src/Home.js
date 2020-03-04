import React from "react";
import Logo from "./assets/SVGs/Logo.js";

const Home = () => {
  return (
    <div className="section" id="main">
      <div id="logowrapper">
        <Logo />
      </div>

      <h1>
        Hi, I'm <span style={{ color: "#FF1A77" }}>Sharna</span>.
      </h1>
      <h1 style={{ fontSize: "23px" }}>I'm a Web Developer.</h1>
    </div>
  );
};


export default Home;
