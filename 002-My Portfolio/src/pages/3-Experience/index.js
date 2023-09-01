import { Box } from "@mui/material";
import React from "react";

const Experience = ({ relElement }) => {
  return (
    <Box ref={(element) => (relElement.current.experienceRefElement = element)}>
      <div style={{ backgroundColor: "lightpink", height: "100vh", width: "100vw" }}></div>
    </Box>
  );
};

export default Experience;
