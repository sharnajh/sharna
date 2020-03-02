import React, { Component } from "react";
import { IoIosSend } from "react-icons/io";

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
    }
  };
  send = e => {
    e.preventDefault();
  };
  render() {
    const { focused } = this.state;
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
      </form>
    );
  }
}

export default Form;
