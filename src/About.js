import React, { Component } from "react";
import Description from "./Description";
import Astronaut from "./assets/models/Astronaut";

class About extends Component {
  render() {
    return (
      <div className="section" id="about">
        <div id="bio">
          <Description />
          {document.body.clientWidth < 600 ? "" : <Astronaut />}
        </div>
      </div>
    );
  }
}

export default About;
