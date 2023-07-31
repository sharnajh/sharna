import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="desc">
        <h1 style={{ textAlign: "center" }}>About me</h1>
        <p>
          Hi there! My name is Sharna Hossain. I’m a web developer based in NYC.{" "}
          <br />
          <br />
          <br />
          I'm a Computer Science student at Columbia University. <br />
          In 2021, I graduated from BMCC with my Associate's in Computer Science. <br />
          I do fun stuff with front-end development!
        </p>
        <h2>Technologies I love</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>C++</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
        </ul>
      </div>
    );
  }
}

export default Description;
