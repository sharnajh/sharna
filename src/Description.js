import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="desc">
        <h1>About Me</h1>
        <p>
          Hi there! My name is Sharna Hossain. I’m a web developer based in NYC.{" "}
          <br />I thrive at the juncture between science and art, and build
          things for the web that are both beautifully designed and efficiently
          coded. <br />
          I'm an inquisitive, ambitious, and passionate coder currently seeking{" "}
          <a href="/">
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
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Node.js</li>
          <li>Ruby</li>
          <li>WebGL</li>
          <li>Three.js</li>
          <li>Anime.js</li>
          <li>SVGs</li>
          <li>Blender</li>
          <li>Adobe Illustrator</li>
          <li>Git</li>
          <li>SASS</li>
        </ul>
      </div>
    );
  }
}

export default Description;
