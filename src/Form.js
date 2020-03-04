import React, { Component } from "react";
import { IoMdRocket, IoIosCopy, IoMdCheckmarkCircle } from "react-icons/io";
import anime from "animejs/lib/anime.es.js";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    focused: ""
  };
  setFocus = e => {
    this.setState({ focused: e.target.name });
  };
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
        break;
    }
  };
  send = e => {
    e.preventDefault();
  };
  toggleClipboardBubble = toggle => {
    if (toggle) {
      this.refs.bubble.innerHTML = "Copy to Clipboard?";
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
  copyToClipboard = () => {
    const email = "sharnajh@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
        this.refs.bubble.innerHTML = "Successfully copied to clipboard!";
        anime({
          targets: "#bubble",
          color: "#830095",
          easing: "linear",
          duration: 0
        });
      },
      err => {
        console.error("Async: Could not copy text: ", err);
        this.refs.bubble.innerHTML = "Your browser does not support clipboard copying.";
        anime({
          targets: "#bubble",
          color: "#ff1a82",
          easing: "linear",
          duration: 0
        });
      }
    );
  };
  render() {
    //const { focused } = this.state;
    return (
      <form id="contactform" onSubmit={this.send}>
        <input
          name="name"
          value={this.state.name}
          type="text"
          placeholder="Name"
          onFocus={this.setFocus}
          onChange={this.setData}
          required
        />
        <input
          name="email"
          value={this.state.email}
          type="text"
          placeholder="Email"
          onFocus={this.setFocus}
          onChange={this.setData}
          required
        />
        <textarea
          name="message"
          value={this.state.message}
          placeholder="Message"
          onFocus={this.setFocus}
          onChange={this.setData}
        />
        <button id="submit" type="submit">
          <IoMdRocket size={25} />
        </button>
        <div id="clipboardwrapper">
          <a href="mailto:sharnajh@gmail.com">sharnajh@gmail.com</a>{" "}
          <div
            id="clipboard"
            onMouseEnter={() => this.toggleClipboardBubble(true)}
            onMouseLeave={() => this.toggleClipboardBubble(false)}
          >
            <div id="bubble" ref="bubble">
              Copy to clipboard?
            </div>
            <IoIosCopy onClick={this.copyToClipboard} />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
