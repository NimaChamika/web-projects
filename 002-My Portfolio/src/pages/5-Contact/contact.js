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

  const linkedinLink = "https://www.linkedin.com/in/nirmalchamika/";

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  const mailAddress = "lynchamika@gmail.com";

  const openMail = () => {
    window.location.href = `mailto:${mailAddress}`;
  };

  let content = (
    <div className="contact-outer-container">
      <div className="contact-container" onClick={openMail}>
        <img src="assets/email.png" alt="logo" />
        <p>{mailAddress}</p>
      </div>
      <div
        className="contact-container"
        onClick={() => {
          openLink(linkedinLink);
        }}
      >
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
