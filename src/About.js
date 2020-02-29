import React, { Component } from "react";
import Astronaut from "./Astronaut";

class About extends Component {
  render() {
    return (
      <div className="section" id="about">
        <div id="bio">
          <div className="desc">
            <h1>About Me</h1>
            <p>
              Hi there! My name is Sharna Hossain. I’m a web developer based in
              NYC. <br />I thrive at the juncture between science and art, and
              build things for the web that are both beautifully designed and
              efficiently coded. <br />
              I'm an organized, ambitious, and passionate coder currently
              seeking {" "}
              <a href="/contact">
                <span>new opportunities</span>
              </a>{" "}
              as a web or frontend developer.
              <br />
              <br />
              In 2018, I graduated from the{" "}
              <a
                href="https://nycda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                New York Code + Design Academy
              </a>{" "}
              with a certificate in Full Stack Web Development. <br />
              In 2020, I was certified in React via{" "}
              <a
                href="https://graduation.udacity.com/confirm/DQ5HARTQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Udacity
              </a>
              .{" "}
            </p>
            <h2>Technologies I love</h2>
            JavaScript (ES6+), React.js, Node, Anime.js, Three.js, SVGs,
            Blender, Adobe Illustrator, Git, SASS
          </div>
          <Astronaut />
        </div>
      </div>
    );
  }
}

export default About;
