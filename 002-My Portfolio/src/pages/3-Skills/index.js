import styled from "@emotion/styled";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./index.css";

const Skills = ({ relElement }) => {
  //#region HEADER
  const title = "My Skills";

  let header = (
    <div className="header-container">
      <p className="header-title">{title}</p>
    </div>
  );
  //#endregion

  const skillLst = ["Frontend Development", " Game Development", " Mobile Development"];

  const techLst = [
    "assets/tech/react.png",
    "assets/tech/html.png",
    "assets/tech/css.png",
    "assets/tech/js.png",
    "assets/tech/mui.png",
    "assets/tech/unity.png",
    "assets/tech/csharp.png",
    "assets/tech/flutter.png",
  ];

  let content = (
    <div className="content-outer-container">
      <div className="content-inner-container">
        <div className="all-skill-container">
          {skillLst.map((item, index) => {
            return <div className="skill-container">{item}</div>;
          })}
        </div>
        <div className="all-tech-container">
          {techLst.map((item, index) => {
            return (
              <div className="tech-container">
                <img src={item} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {header}
      {content}
    </>
  );
};

export default Skills;
