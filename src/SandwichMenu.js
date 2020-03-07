import React, { Component } from "react";

class SandwichMenu extends Component {
  render() {
    return (
    <div id="sm">
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
    </div>);
  }
}

export default SandwichMenu;
