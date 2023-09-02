import React, { useEffect } from "react";
import "./home.css";

const Home = ({ refElements }) => {
  //#region HEADER

  const navBarLst = [
    { name: "About", label: "aboutRefElement" },
    { name: "Skills", label: "skillsRefElement" },
    // { name: "Projects", label: "projectsRefElement" },
    { name: "Contact", label: "contactRefElement" },
  ];

  let header = (
    <div className="home-header-container">
      <div className="logo-container">
        <img src="assets/logo.png" alt="logo" />
      </div>

      <div>
        <div className="home-navbar-container">
          {navBarLst.map((item, index) => {
            return (
              <button
                variant="text"
                key={index}
                onClick={() => {
                  refElements.current[item.label].scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  cursor: "pointer",
                  color: "black",
                  margin: 0,
                }}
              >
                <p style={{ fontFamily: "Poppins,Arial", fontSize: "26px", margin: "5px" }}>{item.name}</p>
              </button>
            );
          })}
        </div>

        <div className="home-hamburger-menu-container">
          <img src="assets/hamburger  icon.png" alt="logo" />
        </div>
      </div>
    </div>
  );

  //#endregion

  //#region

  const githubLink = "https://github.com/NimaChamika";
  const linkedinLink = "https://www.linkedin.com/in/nirmalchamika/";

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  let content = (
    <div className="home-content-container">
      <div className="my-pic-container">
        <img src="assets/mypic-1.png" alt="logo" className="my-image" />
      </div>
      <div className="description-container">
        <p className="description-text1">Hi there 👋 I'm</p>
        <p className="description-text2">Nirmal Chamika</p>
        <p className="description-text3">Senior Software Engineer</p>
        <div>
          <img
            src="assets/linkedin.png"
            alt="logo"
            className="social-link-image"
            onClick={() => {
              openLink(githubLink);
            }}
          />
          <img
            src="assets/github.png"
            alt="logo"
            className="social-link-image"
            onClick={() => {
              openLink(linkedinLink);
            }}
          />
        </div>
      </div>
    </div>
  );
  //#endregion

  return (
    <div>
      {header}
      {content}
    </div>
  );
};

export default Home;
