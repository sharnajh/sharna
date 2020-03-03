import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import { connect } from "react-redux";

// Technically this isn't an SVG.

class ShootingStars extends Component {
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
  paintshooters = () => {
    const { num } = this.state;
    return [...Array(num)].map((x, y) => (
      <div
        key={y}
        className="wish"
        style={{
          left: `${this.getRandomY()}px`,
          top: `${this.getRandomX()}px`
        }}
      />
    ));
  };
  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 3000 * i,
      opacity: [
        {
          duration: 700,
          value: "1"
        }
      ],
      width: [
        {
          value: "150px"
        },
        {
          value: "0px"
        }
      ],
      translateX: 350
    });
  };
  render() {
    const { loaded } = this.props;
    if (this.state.vw > 600) {
      if (loaded.model) {
        this.shootingStars();
      }
    } else {
      this.shootingStars();
    }
    return <div id="shootingstars">{this.paintshooters()}</div>;
  }
}

function mapStateToProps({ loaded }) {
  return {
    loaded
  };
}

export default connect(mapStateToProps)(ShootingStars);
