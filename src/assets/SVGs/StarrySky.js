import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import ShootingStars from "./ShootingStars"

class StarrySky extends Component {
  animations = [];

  state = {
    num: 120,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };

  componentDidMount() {
    this.starryNight();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    this.animations.forEach((animation) => animation.pause());
  }

  handleResize = () => {
    this.setState({
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    });
  };

  randomRadius = () => {
    return Math.random() * 1.35 + 0.35;
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
        className={`star star-${y % 2}`}
        opacity={Math.random() * 0.45 + 0.24}
      />
    ));
  };

  starryNight = () => {
    const primaryTwinkle = anime({
      targets: [".sky .star-0"],
      opacity: [0.22, 0.78],
      duration: (el, i) => 1500 + ((i % 7) * 120),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: (el, i) => 95 * i
    });

    const secondaryTwinkle = anime({
      targets: [".sky .star-1"],
      opacity: [0.16, 0.56],
      duration: (el, i) => 2100 + ((i % 9) * 110),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: (el, i) => 80 * i
    });

    this.animations = [primaryTwinkle, secondaryTwinkle];
  };

  render() {
    return (
      <div id="skywrapper">
        <ShootingStars />
        <div className="sky-glow sky-glow-left" />
        <div className="sky-glow sky-glow-right" />
        <div className="sky-glow sky-glow-center" />
        <svg className="sky">{this.paintstars()}</svg>
      </div>
    );
  }
}

export default StarrySky;
