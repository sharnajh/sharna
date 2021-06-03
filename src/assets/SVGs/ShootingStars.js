import React, { } from "react";
import anime from "animejs/lib/anime.es.js";
//import { connect } from "react-redux";

// Technically this isn't an SVG.

const ShootingStars = () => {
  const num = 15;
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };
  const paintshooters = () => {
    return [...Array(num)].map((x, y) => (
      <div
        key={y}
        className="wish"
        style={{
          left: `${getRandomY()}px`,
          top: `${getRandomX()}px`
        }}
      />
    ));
  };
  const shootingStars = () => {
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
  shootingStars();
  return <div id="shootingstars">{paintshooters()}</div>;
}


// function mapStateToProps({ loaded }) {
//   return {
//     loaded
//   };
// }

export default (ShootingStars);
