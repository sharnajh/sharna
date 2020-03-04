import React from "react";
import {
  FaLinkedinIn,
  FaCodepen,
  FaStackOverflow,
  FaGithub
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <span>
      <a
        href="https://github.com/sharnajh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/sharnahossain/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="icon" size={20} />
      </a>
      <a
        href="https://codepen.io/sharnajh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen className="icon" size={20} />
      </a>
      <a
        href="https://stackoverflow.com/users/11864970/sharna-j"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow className="icon" size={20} />
      </a>
    </span>
  );
};

export default SocialMediaIcons;
