import React, { Component } from "react";
import Logo from "./Logo.js";
import anime from "animejs/lib/anime.es.js";

class Home extends Component {
  componentDidMount() {
    anime({
      targets: "#whiteStrokeBlob",
      d: [
        {
          value:
            "M375.321,114c18.27,103.1774,86.3143,277.0517-50,283-157.2085,6.86-258.0878,39.3474-282-52C.0543,179.7159-2.4,218.1619,82.321,82,162.96-47.6008,358.4088,18.4919,375.321,114Z"
        },
        {
          value:
            "M360,115.7186c18.27,103.1774,97.942,263.6039-38.3723,269.5522-157.2085,6.86-245.64,52.9751-269.5523-38.3723C10.8085,181.6144,7.7264,213.5082,92.4475,77.3463,173.0863-52.2546,345.0876,20.2105,362,115.7186Z"
        }
      ],
      duration: 2000,
      easing: "linear",
      loop: true
    });
    anime({
      targets: "#blueblob",
      d: [
        {
          value:
            "M385.321,165c10.178,43.5445-5.42,270.9523-119,236-23.5424-7.2448-182.4293-12.7223-231-106-39.8718-76.5719-31.3322-163.7059,106-242C335.4167-57.6554,360.9722,60.8287,385.321,165Z"
        },
        {
          value:
            "M394.1084,159.7417c10.178,43.5444-4.2323,289.6919-117.8123,254.74-23.5423-7.2447-206.9844-22.755-255.5551-116.0327-39.8718-76.572-19.52-176.4456,117.8123-254.74C332.649-66.9465,369.76,55.57,394.1084,159.7417Z"
        }
      ],
      duration: 3500,
      easing: "easeOutQuad",
      loop: true
    });
    let tl = anime.timeline({
      loop: false
    });
    tl.add({
      targets: ".seg",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeOutQuad",
      duration: 2500,
      delay: (el, i) => 50 * i
    })
      .add(
        {
          targets: ["#pink"],
          fill: "#FF1A82",
          easing: "linear",
          duration: 1000
        },
        2000
      )
      .add(
        {
          targets: ["#blue"],
          fill: "#00B7FF",
          easing: "linear",
          duration: 1000
        },
        2000
      );
  }
  render() {
    return (
      <div className="section" id="main">
        <Logo />
        <h1>
          Hi, I'm <span style={{ color: "#FF1A77" }}>Sharna</span>.
        </h1>
        <h1 style={{ fontSize: "23px" }}>I'm a Web Developer.</h1>
      </div>
    );
  }
}

export default Home;
