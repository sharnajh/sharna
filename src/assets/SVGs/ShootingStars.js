import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const ShootingStars = () => {
  const num = 10;
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.pow(Math.random(), 1.25) * Math.floor(vh * 0.88)).toString();
  };

  const paintShooters = () =>
    [...Array(num)].map((_, index) => (
      <div
        key={index}
        className="wish"
        style={{
          left: `${getRandomY()}px`,
          top: `${getRandomX()}px`
        }}
      />
    ));

  useEffect(() => {
    const animation = anime({
      targets: "#shootingstars .wish",
      easing: "linear",
      loop: true,
      delay: (el, i) => 2600 * i,
      opacity: [
        {
          duration: 380,
          value: "1"
        },
        {
          duration: 820,
          value: "0"
        }
      ],
      width: [
        {
          value: "170px",
          duration: 280
        },
        {
          value: "0px",
          duration: 900
        }
      ],
      translateX: 360
    });

    return () => {
      animation.pause();
    };
  }, []);

  return <div id="shootingstars">{paintShooters()}</div>;
};

export default ShootingStars;
