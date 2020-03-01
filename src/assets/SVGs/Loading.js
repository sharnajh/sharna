import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        margin="auto"
        background="none"
        display="block"
        shapeRendering="auto"
        width="25%"
        height="25%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="1.48595" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.641025641025641s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#ffffff;#ffffff;#ffffff;#ffffff;#ffffff"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="0" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="8.51396" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.641025641025641s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.641025641025641s"
          ></animate>
        </circle>
        <circle cx="44.9475" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.282051282051282s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.282051282051282s"
          ></animate>
        </circle>
        <circle cx="78.9475" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.923076923076923s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.564102564102564s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.923076923076923s"
          ></animate>
        </circle>
        {/* [ldio] generated by https://loading.io/ */}
      </svg>
    );
  }
}

export default Loading;