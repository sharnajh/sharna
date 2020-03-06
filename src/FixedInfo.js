import React, { Component } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import anime from "animejs/lib/anime.es.js";

class FixedInfo extends Component {
  componentDidMount() {
    anime({
        targets: "#info",
        opacity: [0,1],
        duration: 1000,
        easing: "linear"
    })
}
  render() {
    return (
      <div id="info">
        <div id="socialmedia">
          <SocialMediaIcons />
        </div>
        <div id="email"><a
            href="mailto:sharnajh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >sharnajh@gmail.com</a></div>
      </div>
    );
  }
}

export default FixedInfo;
