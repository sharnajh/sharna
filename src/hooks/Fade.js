import React, { useState, useEffect } from "react";

const Fade = ({ children, show }) => {
  const [shouldRender, setRender] = useState(show);
  useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  console.log(show)
  return (
    <span
      className="scroll-action"
      style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }}
    >
      {children}
    </span>
  );
};

export default Fade;
