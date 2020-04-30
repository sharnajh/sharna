import React, { useEffect } from "react";
import gsap from "gsap";

const Fade = ({ children, show, className }) => {
  useEffect(() => {
    if (show) {
      gsap.to(".fade", {
        duration: 0.5,
        opacity: 1,
        ease: "linear"
      });
    } else {
      gsap.to(".fade", {
        duration: 0.5,
        opacity: 0,
        ease: "linear"
      });
    }
  });
  return (
    <span className={className + " fade"} style={{ opacity: "0 !important" }}>
      {children}
    </span>
  );
};

export default Fade;
