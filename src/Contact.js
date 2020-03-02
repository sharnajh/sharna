import React, { Component } from "react";
import Form from "./Form";
import SocialMediaIcons from "./SocialMediaIcons";
import { FaFileExcel } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div className="section" id="contact">
        <div id="message">
          <h1>Contact me</h1>
          <p>
            I am interested in freelance and career opportunities, however my
            inbox is open for any other kind of collaborations — or just to say
            hi!
          </p>
          {document.body.clientWidth < 600 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a href="mailto:sharnajh@gmail.com">
                <h2 style={{ fontSize: "23px" }}>sharnajh@gmail.com</h2>
              </a>
              <SocialMediaIcons />
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
