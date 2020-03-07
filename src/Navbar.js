import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import SandwichMenu from "./SandwichMenu";
import { MdMenu } from "react-icons/md";

class Navbar extends Component {
  state = {
    toggle: false
  };
  componentDidMount() {
    anime({
      targets: "#navbar",
      translateY: [-80, 0],
      duration: 800,
      easing: "linear"
    });
  }
  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div id="navbar">
          <a href="https://www.sharna.dev">
            <div id="logo-nav">
              <p>SHARNA.DEV</p>
            </div>
          </a>
          {document.body.clientWidth < 600 ? (
            <MdMenu
              size={30}
              id="v"
              onClick={() => this.setState({ toggle: !toggle })}
            />
          ) : (
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
              >
                <li id="resume">Resume</li>
              </a>
            </ul>
          )}
        </div>
        {toggle && (
          <div id="sm" onClick={() => this.setState({ toggle: !toggle })}>
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
              >
                <li id="resume">Resume</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
