import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="desc">
        <h1 style={{ textAlign = "center" }}>About me</h1>
        <p>
          Hi there! My name is Sharna Hossain. I’m a web developer based in NYC.{" "}
          <br />I thrive at the juncture between science and art, and build
          things for the web that are both beautifully designed and efficiently
          coded. <br />
          I'm an inquisitive, ambitious, and passionate coder seeking{" "}
          <a href="#contact">
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
          .{" "}<br />
          In 2021, I earned <a
            href="https://www.credential.net/ef0243e9-2c7f-4d2f-a355-8eb3c85e82a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Unity Immersive Design Certificate
          </a> from NYU.
        </p>
        <h2>Technologies I love</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>C++</li>
          <li>React.js</li>
          <li>Firebase</li>
          <li>Node.js</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effects</li>
        </ul>
      </div>
    );
  }
}

export default Description;
