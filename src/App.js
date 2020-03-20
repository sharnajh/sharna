import React, { Component } from "react";
import "./assets/CSS/App.css";
import StarrySky from "./assets/SVGs/StarrySky";
import FixedInfo from "./FixedInfo";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
//import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <StarrySky />
      {document.body.clientWidth > 600 && <FixedInfo />}
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
