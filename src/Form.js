import React, { Component } from "react";
import { IoMdRocket, IoIosCopy, IoIosRocket } from "react-icons/io";
import anime from "animejs/lib/anime.es.js";
import Loading from "./assets/SVGs/Loading";
import Clipboard from "./Clipboard";

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
  validateForm = toggle => {
    const { anim, isSending } = this.state;
    if (anim === false && isSending === false) {
      toggle
        ? anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeOutQuad",
            duration: 650,
            reverse: true
          })
        : anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [0, anime.setDashoffset],
            easing: "easeOutQuad",
            duration: 700,
            reverse: true
          });
    }
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
        duration: 0,
        easing: "easeInOutSine"
      })
      .add({
        targets: ["#rectwrap rect"],
        opacity: 0,
        easing: "easeOutQuad",
        duration: 100
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
      })
      .add({
        targets: ".siz",
        opacity: [1, 0],
        duration: 200
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
            duration: 0
          })
          .add({
            targets: "#submit",
            outlineWidth: "1px",
            duration: 300,
            easing: "easeInOutSine"
          })
          .add({
            targets: ".siz",
            opacity: [0, 1],
            duration: 300
          });
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
  render() {
    const { isSending, success, anim, name, email } = this.state;

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

        <button
          id="submit"
          type="submit"
          onMouseEnter={() => this.validateForm(true)}
          onMouseLeave={() => this.validateForm(false)}
        >
          <svg width="100%" height="100%" id="rectwrap">
            <rect
              width="100%"
              height="100%"
              fill="none"
              strokeWidth="3"
              stroke="#FF1A82"
              strokeDasharray="5000"
              strokeDashoffset="5000"
              style={{
                opacity:
                  name.length > 0 && email.length > 0 && email.includes("@")
                    ? "1"
                    : "0"
              }}
            />
          </svg>
          <IoMdRocket size={30} className="siz" />
        </button>

        <Clipboard />
      </form>
    );
  }
}

export default Form;
