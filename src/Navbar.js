import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

import { MdMenu } from "react-icons/md";

class Navbar extends Component {
  componentDidMount() {
    anime({
      targets: "#navbar",
      translateY: [-80, 0],
      duration: 800,
      easing: "linear"
    });
  }
  render() {
    return (
      <div id="navbar">
        <a href="#main">
          <div id="logo-nav"><p>SHARNA.DEV</p></div>
        </a>
     
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a
              href="https://github.com/sharnajh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <a
              href="https://sharna.dev/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            ><li id="resume">Resume</li></a>
            
          </ul>

      </div>
    );
  }
}

export default Navbar;
