import { Box, Typography } from "@mui/material";
import React from "react";

const About = ({ relElement }) => {
  let Header = (
    <Box sx={{ height: "20vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "6vw", color: "rgb(0,0,0)", fontWeight: 600 }}>About Me</Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "60px", color: "rgb(0,0,0)", fontWeight: 600 }}> About Me</Typography>
      </Box>
    </Box>
  );

  let aboutContent = (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "5vh" }}>
      <Box sx={{ display: { xs: "flex", sm: "none", lg: "none" }, width: "90%" }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "4.5vw", color: "rgb(85, 85, 85)", fontWeight: 400, textAlign: "center" }}>
          I'm a Senior Software Engineer with 5 years of experience, specializing as a Front-End Developer in React.js, a Game Developer in Unity 3D and Pixi.js, and an experienced
          Mobile App Developer in Flutter. I have a strong passion for crafting user-centric applications and excel at solving complex problems with innovative solutions. I'm a
          fast learner, a dedicated hard worker, and known for my 'out-of-the-box' thinking. My aim is to continuously deliver exceptional software experiences and push the
          boundaries of what's possible.
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "flex", lg: "none" }, width: "90%" }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "28px", color: "rgb(85, 85, 85)", fontWeight: 400, textAlign: "center" }}>
          I'm a Senior Software Engineer with 5 years of experience, specializing as a Front-End Developer in React.js, a Game Developer in Unity 3D and Pixi.js, and an experienced
          Mobile App Developer in Flutter. I have a strong passion for crafting user-centric applications and excel at solving complex problems with innovative solutions. I'm a
          fast learner, a dedicated hard worker, and known for my 'out-of-the-box' thinking. My aim is to continuously deliver exceptional software experiences and push the
          boundaries of what's possible.
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "none", lg: "flex" }, width: "90%" }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "38px", color: "rgb(85, 85, 85)", fontWeight: 400, textAlign: "center" }}>
          I'm a Senior Software Engineer with 5 years of experience, specializing as a Front-End Developer in React.js, a Game Developer in Unity 3D and Pixi.js, and an experienced
          Mobile App Developer in Flutter. I have a strong passion for crafting user-centric applications and excel at solving complex problems with innovative solutions. I'm a
          fast learner, a dedicated hard worker, and known for my 'out-of-the-box' thinking. My aim is to continuously deliver exceptional software experiences and push the
          boundaries of what's possible.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box ref={(element) => (relElement.current.aboutRefElement = element)} sx={{ width: "100%" }}>
      {Header}
      {aboutContent}
    </Box>
  );
};

export default About;
