import React from "react";
import { GoRepoForked } from "react-icons/go";

const Footer = () => {
  return (
    <div id="footer">
      <a
        href="https://github.com/sharnajh/sharna"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoRepoForked size={11} /> Coded & Designed by Sharna
      </a>
    </div>
  );
};

export default Footer;
