import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import ShootingStars from "./ShootingStars"

class StarrySky extends Component {
  state = {
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
  randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };
  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };
  paintstars = () => {
    const { num } = this.state;
    return [...Array(num)].map((x, y) => (
      <circle
        cx={this.getRandomX()}
        cy={this.getRandomY()}
        r={this.randomRadius()}
        stroke="none"
        strokeWidth="0"
        fill="white"
        key={y}
        className="star"
        opacity="0.7"
      />
    ));
  };
  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0"
        },
        {
          duration: 700,
          value: "0.7"
        }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };
  componentDidMount() {
    this.starryNight();
  }
  render() {
    return (
      <div id="skywrapper">
        <ShootingStars />
        <svg className="sky">{this.paintstars()}</svg>
      </div>
    );
  }
}

export default StarrySky;
