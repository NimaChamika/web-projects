import { Box } from "@mui/material";
import React from "react";

const About = ({ relElement }) => {
  return (
    <Box ref={relElement}>
      <div style={{ backgroundColor: "lightblue", height: "100vh", width: "100vw" }}></div>
    </Box>
  );
};

export default About;
