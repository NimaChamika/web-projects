import { Box } from "@mui/material";
import React from "react";
import "./contact.css";

const Contact = ({ relElement }) => {
  //#region HEADER
  const title = "Contact Me";

  let header = (
    <div className="about-header-container">
      <p className="about-header-title">{title}</p>
    </div>
  );
  //#endregion

  //#region  CONTENT

  let content = (
    <div className="contact-outer-container">
      <div className="contact-container">
        <img src="assets/email.png" alt="logo" />
        <p>lynchamika@gmail.com</p>
      </div>
      <div className="contact-container">
        <img src="assets/linkedin.png" alt="logo" />
        <p>LinkedIn</p>
      </div>
    </div>
  );

  //#endregion

  //#region  FOOTER

  let footer = <div className="footer-container">{/* <p>Made with 💖 in Sri Lanka</p> */}</div>;

  //#endregion

  return (
    <div ref={(element) => (relElement.current.contactRefElement = element)}>
      {header}
      {content}
      {footer}
    </div>
  );
};

export default Contact;
