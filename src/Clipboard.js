import React from "react";
import { IoIosCopy } from "react-icons/io";
import anime from "animejs/lib/anime.es.js";

const Clipboard = () => {
  const toggleClipboardBubble = toggle => {
    if (toggle) {
      const bubble = document.getElementById("bubble");
      bubble.innerHTML = "Copy to clipboard?";
      anime({
        targets: "#bubble",
        opacity: [0, 1],
        color: "#830095",
        duration: 200,
        easing: "linear"
      });
      anime({
        targets: "#clipboardwrapper",
        color: "#00b7ff",
        easing: "linear",
        duration: 200
      });
    } else {
      anime({
        targets: "#bubble",
        opacity: [1, 0],
        duration: 100,
        easing: "linear"
      });
      anime({
        targets: "#clipboardwrapper",
        color: "#fff",
        easing: "linear",
        duration: 100
      });
    }
  };
  const copyToClipboard = () => {
    const bubble = document.getElementById("bubble");
    const email = "sharnajh@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
        bubble.innerHTML = "Successfully copied to clipboard!";
        anime({
          targets: "#bubble",
          color: "#830095",
          easing: "linear",
          duration: 0
        });
      },
      err => {
        console.error("Async: Could not copy text: ", err);
        bubble.innerHTML = "Your browser does not support this function.";
        anime({
          targets: "#bubble",
          color: "#ff1a82",
          easing: "linear",
          duration: 0
        });
      }
    );
  };
  return (
    <div id="clipboardwrapper">
      <a href="mailto:sharnajh@gmail.com">sharnajh@gmail.com</a>{" "}
      {document.body.clientWidth > 600 && (
        <div id="clipboard">
          <div id="bubble">Copy to clipboard?</div>
          <IoIosCopy
            onClick={copyToClipboard}
            onMouseEnter={() => toggleClipboardBubble(true)}
            onMouseLeave={() => toggleClipboardBubble(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Clipboard;
