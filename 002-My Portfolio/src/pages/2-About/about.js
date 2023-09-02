import React from "react";
import "./about.css";

const About = ({ relElement }) => {
  //#region HEADER
  const title = "About me";

  let header = (
    <div className="about-header-container">
      <p className="about-header-title">{title}</p>
    </div>
  );
  //#endregion

  let content = (
    <div className="about-content-container">
      <p className="about-content-description">
        I'm a Senior Software Engineer with 5 years of experience, specializing as a Front-End Developer in React.js, a Game Developer in Unity 3D and Pixi.js, and an experienced
        Mobile App Developer in Flutter. I have a strong passion for crafting user-centric applications and excel at solving complex problems with innovative solutions. I'm a fast
        learner and a dedicated hard worker. My aim is to continuously deliver exceptional software experiences and push the boundaries of what's possible.
      </p>
    </div>
  );

  return (
    <div ref={(element) => (relElement.current.aboutRefElement = element)}>
      {header}
      {content}
    </div>
  );
};

export default About;
