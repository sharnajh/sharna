import React, { Component } from "react";

class Navbar extends Component {
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
