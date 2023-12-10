import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="desc">
        <h1 style={{ textAlign: "center" }}>About me</h1>
        <p>
          Hi there! I'm Sharna, a coding enthusiast with a love for software development.{" "}
          <br />
          <br />
          I'm a Computer Science student at Columbia University. <br />
          In 2021, I graduated from BMCC with my Associate's in Computer Science. <br />
          I will take a year-long hiatus from my studies from 2023 to 2024 to participate
          in an internship program with{" "}
          <a href="https://www.yearup.org/" target="_blank" rel="noreferrer">YearUp</a>,
          aiming to gain practical experience and enhance my skills.
          <br /><br />
          I have an orange tabby cat named Digit 🐈.
        </p>
        <h2>Technologies I love</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>Python</li>
          <li>Unity</li>
        </ul>
      </div>
    );
  }
}

export default Description;
