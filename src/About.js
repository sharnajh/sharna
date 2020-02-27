import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import Pic from "./profilepic.png";

class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="section" id="about">
        <h1>About Me</h1>
        <div id="bio">
          <p className="desc">
            Hi there! My name is Sharna Hossain. I’m a web developer based in
            NYC. <br />I thrive at the intersection of science and art, and
            build things for the web that are both beautifully designed and
            efficiently coded. <br />
            <br />
            In 2018, I graduated from the{" "}
            <a href="https://nycda.com/">New York Code + Design Academy</a> with
            a certificate in Full Stack Web Development. <br />
            In 2020, I was certified in React via{" "}
            <a href="https://graduation.udacity.com/confirm/DQ5HARTQ">
              Udacity
            </a>
            .{" "}
          </p>
        <a href="https://github.com/sharnajh">
          <div
            id="pic"
            src={Pic}
            alt="A girl smiling with black hair and brown eyes."
          />
          </a>
        </div>
        <h2>Technologies I love</h2>
      </div>
    );
  }
}

export default About;
