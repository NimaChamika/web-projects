import { Box } from "@mui/material";
import React from "react";

const Projects = ({ relElement }) => {
  return (
    <Box ref={(element) => (relElement.current.projectsRefElement = element)}>
      <div style={{ backgroundColor: "lightblue", height: "100vh", width: "100vw" }}></div>
    </Box>
  );
};

export default Projects;
