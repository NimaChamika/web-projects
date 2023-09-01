import { Box } from "@mui/material";
import React from "react";

const Contact = ({ relElement }) => {
  return (
    <Box ref={(element) => (relElement.current.contactRefElement = element)}>
      <div style={{ backgroundColor: "green", height: "100vh", width: "100vw" }}></div>
    </Box>
  );
};

export default Contact;
