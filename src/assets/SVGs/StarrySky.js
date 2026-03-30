import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import ShootingStars from "./ShootingStars"

class StarrySky extends Component {
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
    anime({
      targets: [".sky .star-0"],
      opacity: [
        {
          duration: 1200,
          value: 0.22
        },
        {
          duration: 1600,
          value: 0.78
        }
      ],
      easing: "easeInOutSine",
      loop: true,
      delay: (el, i) => 110 * i
    });

    anime({
      targets: [".sky .star-1"],
      opacity: [
        {
          duration: 1900,
          value: 0.14
        },
        {
          duration: 2100,
          value: 0.58
        }
      ],
      easing: "easeInOutSine",
      loop: true,
      delay: (el, i) => 85 * i
    });
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
