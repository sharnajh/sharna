import React from "react";
import Form from "./Form";
import SocialMediaIcons from "./SocialMediaIcons";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div id="message">
        <h1>Contact me</h1>
        <p>
          I am interested in freelance and career opportunities, however my
          inbox is open for any other kind of collaborations — or just to say
          hi!
        </p>
        <Form />
        {document.body.clientWidth < 600 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <SocialMediaIcons />
          </div>
        ) : ""}
      </div>
    </div>
  );
};

export default Contact;
