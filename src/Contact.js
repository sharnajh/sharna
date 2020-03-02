import React, { Component } from "react";
import Form from "./Form";

class Contact extends Component {
  render() {
    return (
      <div className="section" id="contact">
        <div id="message">
          <h1>Contact me</h1>
          <p>
            I am interested in freelance and career opportunities, however my
            inbox is open for any other kind of collaborations — or just to say hi!
          </p>
          {document.body.clientWidth < 600 ? (
            <div>
              <a href="mailto:sharnajh@gmail.com">
                <h2>sharnajh@gmail.com</h2>
              </a>
            </div>
          ) : (
            <Form />
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
