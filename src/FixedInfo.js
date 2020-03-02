import React, { Component } from "react";
import SocialMediaIcons from "./SocialMediaIcons";

class FixedInfo extends Component {
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
