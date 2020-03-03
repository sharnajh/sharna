import React, { Component } from "react";
import { IoIosSend, IoIosCopy } from "react-icons/io";

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
  copyToClipboard = () => {
    const email = "sharnajh@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
      },
      err => {
        console.error("Async: Could not copy text: ", err);
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
          <IoIosSend size={25} />
        </button>
        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            marginTop: "10px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "200"
          }}
        >
          <a href="mailto:sharnajh@gmail.com">sharnajh@gmail.com</a>{" "}
          <IoIosCopy
            onClick={this.copyToClipboard}
            style={{
              marginLeft: "5px",
              backgroundColor: "#fff",
              borderRadius: "100%",
              padding: "4px",
              cursor: "pointer",
              width: "13px",
              height: "13px",
              color: "#830095"
            }}
          />
        </div>
      </form>
    );
  }
}

export default Form;
