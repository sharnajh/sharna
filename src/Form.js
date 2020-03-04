import React, { Component } from "react";
import { IoMdRocket, IoIosCopy, IoIosRocket } from "react-icons/io";
import anime from "animejs/lib/anime.es.js";
import Loading from "./assets/SVGs/Loading";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    focused: "",
    isSending: false,
    success: false,
    anim: false
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
  sendFeedback(template_id, variables) {
    window.emailjs
      .send("gmail", template_id, variables)
      .then(res => {
        console.log("Email successfully sent!");
        this.setState({ success: true });
      })
      .catch(err => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  }

  timeline = () => {
    const moo = () => {
      this.setState({ anim: false });
    };
    let tl = anime.timeline({
      easing: "easeInOutSine",
      changeComplete: function() {
        moo();
      }
    });
    tl.add({
      targets: ".inp",
      translateX: "100%",
      opacity: [1, 0],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i
    })
      .add({
        targets: "#submit",
        outlineWidth: "0px",
        duration: 100,
        easing: "easeInOutSine"
      })
      .add({
        targets: ".siz",
        color: "#00b7ff",
        duration: 450
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
      });
  };
  reverseAnim = () => {
    const moo = () => {
      this.setState({ anim: false });
    };
    this.setState(
      {
        name: "",
        email: "",
        message: "",
        isSending: false,
        success: false,
        anim: true
      },
      () => {
        let tl = anime.timeline({
          easing: "easeInOutSine",
          changeComplete: function() {
            moo();
          }
        });
        tl.add({
          targets: ".inp",
          translateX: "0%",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 350,
          delay: (el, i) => 150 * i
        })
          .add({
            targets: ".siz",
            translateY: "0%",
            translateX: "0%",
            color: "#fff",
            duration: 100
          })
          .add({
            targets: "#submit",
            outlineWidth: "1px",
            duration: 500,
            easing: "easeInOutSine"
          })
      }
    );
  };
  send = e => {
    e.preventDefault();
    const template_id = "template_7vTIGRG7";
    this.setState({ anim: true, isSending: true }, () => {
      this.sendFeedback(template_id, {
        message_html: this.state.message,
        from_name: this.state.name,
        reply_to: this.state.email
      });
    });
    this.timeline();
  };
  toggleClipboardBubble = toggle => {
    if (toggle) {
      this.refs.bubble.innerHTML = "Copy to clipboard?";
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
          "Your browser does not support this function.";
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
    const { isSending, success, anim } = this.state;
    return (
      <form id="contactform" onSubmit={this.send}>
        {isSending && anim === false && success === false && (
          <div id="update">
            <Loading />
          </div>
        )}
        {isSending && anim === false && success && (
          <div id="update">
            <IoIosRocket size={40} />
            <p>Your message is on it's way!</p>
            <button id="btn" onClick={this.reverseAnim}>
              Send another
            </button>
          </div>
        )}
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
          {document.body.clientWidth > 600 && (
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
          )}
        </div>
      </form>
    );
  }
}

export default Form;
