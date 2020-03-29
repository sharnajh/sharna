import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import { MdMenu } from "react-icons/md";
import SocialMediaIcons from "./SocialMediaIcons";

class Navbar extends Component {
  state = {
    toggleMobile: false,
    toggleWeb: true,
    scrollPos: 0
  };
  handleScroll = () => {
    const { scrollPos } = this.state;
    const currentPos = window.pageYOffset;
    if (currentPos >= 200) {
      this.setState({ toggleWeb: scrollPos > currentPos });
    } 
    this.setState({ scrollPos: currentPos });
  };
  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
  }
  toggleMobile = () => {
    const { toggleMobile } = this.state;
    this.setState({ toggleMobile: !toggleMobile }, () => {
      if (toggleMobile === false) {
        anime({
          targets: "#burger .layer",
          backgroundColor: "#ff1a82",
          duration: 400,
          easing: "linear"
        });
        anime({
          targets: ".layer-top",
          rotate: "43deg",
          translateY: "-3px",
          duration: 400,
          easing: "linear"
        })
        anime({ 
          targets: ".layer-middle",
          opacity: [1,0],
          translateX: -30,
          duration: 300,
          easing: "linear"
        })
        anime({
          targets: ".layer-bottom",
          rotate: "-43deg",
          translateY: "3px",
          duration: 400,
          easing: "linear"
        })
        anime({
          targets: "#sm",
          translateY: [-500, 0],
          duration: 400,
          easing: "linear"
        });
      } else if (toggleMobile) {
        anime({
          targets: "#burger .layer",
          backgroundColor: "#fff"
        })
        anime({
          targets: ".layer-top",
          translateY: 0,
          rotate: "0deg",
          duration: 400,
          easing: "linear"
        })
        anime({
          targets: ".layer-bottom",
          translateY: 0,
          rotate: "0deg",
          duration: 400,
          easing: "linear"
        })
        anime({ 
          targets: ".layer-middle",
          opacity: [0,1],
          translateX: 0,
          duration: 400,
          easing: "linear"
        })
      }
    });
  };
  render() {
    const { toggleMobile, toggleWeb, scrollPos } = this.state;
    return (
      <div>
        <div
          id="navbar"
          style={{
            background: scrollPos === 0 && "transparent",
            top: toggleWeb || document.body.clientWidth < 600 ? "0" : "-80px",
            boxShadow:
              (scrollPos === 0 && toggleMobile === false) && "none"
          }}
        >
          <a href="https://www.sharna.dev">
            <div id="logo-nav">
              <svg
                id="charsvg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 584 592"
              >
                <path
                  d="M157.6408,40.8852,52.3676,135.65A156.8333,156.8333,0,0,0,3.8847,284.8013L33.3166,423.353A156.833,156.833,0,0,0,138.244,539.916l134.7052,43.787a156.8334,156.8334,0,0,0,153.41-32.5882L531.6325,456.35a156.8336,156.8336,0,0,0,48.4829-149.1513L550.6837,168.6472A156.8333,156.8333,0,0,0,445.7564,52.084L311.0511,8.297A156.8336,156.8336,0,0,0,157.6408,40.8852Z"
                  fill="#ff1a82"
                  id="charblob"
                />
                <path
                  d="M373.4843,217.3348l-31.45,14.81q-6.9728-15.2844-14.1113-20.4158-7.3992-5.7893-19.84-6.9739-15.2825-1.4535-26.1857,6.2507A26.97,26.97,0,0,0,269.778,231.47q-1.6943,17.8026,23.7359,31.1861l23.3151,12.2321q28.4738,14.79,40.5387,33.3413t9.681,43.5969q-3.1916,33.5535-27.6422,53.3217-24.6265,19.91-58.0182,16.7331-31.6623-3.0131-50.5139-23.72c-12.3579-13.7852-19.3342-32.318-20.3587-55.329l37.9892-4.362c.2088,14.4437,2.3045,24.4478,5.9874,30.307q9.8424,16.8324,31.5807,18.8986,17.1675,1.6323,29.6053-8.7881,12.435-10.417,14.1128-28.0618a41.0673,41.0673,0,0,0-.7323-13.1828A33.1639,33.1639,0,0,0,323.95,326.19a49.3782,49.3782,0,0,0-9.9066-10.32,104.6228,104.6228,0,0,0-14.9654-9.7681l-22.5418-12q-47.9284-25.8558-44.0605-66.4985,2.6077-27.4078,25.3114-43.8459,22.7151-16.5919,53.9077-13.6276Q353.753,174.1315,373.4843,217.3348Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </a>
          {document.body.clientWidth < 600 ? (
            // <MdMenu size={30} id="v" onClick={this.toggleMobile} />
            <div id="burger" onClick={this.toggleMobile}>
              <div className="layer layer-top" />
              <div className="layer layer-middle" />
              <div className="layer layer-bottom" />
            </div>
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
        {toggleMobile && (
          <ul id="sm" onClick={this.toggleMobile}>
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
            <li style={{ borderBottom: "0px" }}>
              <SocialMediaIcons />
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default Navbar;
