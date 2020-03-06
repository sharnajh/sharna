import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class Navbar extends Component {
    componentDidMount() {
        anime({
            targets: "#navbar",
            translateY: [-80, 0],
            duration: 800,
            easing: "linear"
        })
    }
  render() {
    return (
      <div id="navbar">
        <a href="#main">
          <div id="logo-nav">Sharna.dev</div>
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
        </ul>
      </div>
    );
  }
}

export default Navbar;
