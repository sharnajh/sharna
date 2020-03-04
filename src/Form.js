import React, { Component } from "react";
import { IoMdRocket, IoIosCopy } from "react-icons/io";
import anime from "animejs/lib/anime.es.js";
import { FaBlackTie } from "react-icons/fa";

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
    let tl = anime.timeline({
      easing: "easeInOutSine"
    });
    tl.add({
      targets: ".inp",
      translateX: "100%",
      opacity: [1, 0],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i
    })
      // .add({
      //   targets: ".inp",
      //   height: "0",
      //   width: "0",
      //   padding: 0,
      //   marginBottom: 0,
      //   easing: "easeInOutSine",
      //   duration: 400
      // })
      // .add({
      //   targets: "#submit",
      //   height: "250px",
      //   duration: 400,
      //   easing: "easeInOutSine"
      // })
      .add({
        targets: "#submit",
        outlineWidth: "0px",
        duration: 100,
        easing: "easeInOutSine",
      })
      .add({
        targets: ".siz",
        color: "#00b7ff",
        duration:450
      })
      .add({
        targets: ".siz",
        translateY: "20px",
        duration: 250
      })
      .add({
        targets: ".siz",
        translateY: "-300px",
        duration: 250
      })
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
        this.refs.bubble.innerHTML =
          "Your browser does not support clipboard copying.";
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
          className="inp"
          name="name"
          value={this.state.name}
          type="text"
          placeholder="Name"
          onFocus={this.setFocus}
          onChange={this.setData}
          minLength={3}
          required
        />
        <input
          className="inp"
          name="email"
          value={this.state.email}
          type="text"
          placeholder="Email"
          onFocus={this.setFocus}
          onChange={this.setData}
          multiple={false}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <textarea
          className="inp"
          name="message"
          value={this.state.message}
          placeholder="Message"
          onFocus={this.setFocus}
          onChange={this.setData}
        />
        <button id="submit" type="submit">
          <IoMdRocket size={30} className="siz" />
        </button>
        <div id="clipboardwrapper">
          <a href="mailto:sharnajh@gmail.com">sharnajh@gmail.com</a>{" "}
          {document.body.clientWidth > 600 ? (<div
            id="clipboard"
            onMouseEnter={() => this.toggleClipboardBubble(true)}
            onMouseLeave={() => this.toggleClipboardBubble(false)}
          >
            <div id="bubble" ref="bubble">
              Copy to clipboard?
            </div>
            <IoIosCopy onClick={this.copyToClipboard} />
          </div>) : ""}
        </div>
      </form>
    );
  }
}

export default Form;
