import React from "react";
import Form from "./Form";
import SocialMediaIcons from "./SocialMediaIcons";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div id="message">
        <h1>Let's talk!</h1>
        <p>
          I am interested in freelance and professional opportunities, however my
          inbox is open for any other kind of collaborations<span style={{ whiteSpace:"nowrap"}}> — or just to say
          hi!</span>
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
