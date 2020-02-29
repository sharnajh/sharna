import React, { Component } from "react";
import Logo from "./Logo.js";

class Home extends Component {
  render() {
    return (
      <div className="section" id="main">
        <Logo />
        <h1>
          Hi, I'm <span style={{ color: "#FF1A77" }}>Sharna</span>.
        </h1>
        <h1 style={{ fontSize: "23px" }}>I'm a Web Developer.</h1>
       
      </div>
    );
  }
}

export default Home;
