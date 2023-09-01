import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Home = ({ refElements }) => {
  console.log(refElements);

  const navBarLst = [
    { name: "About", refElement: refElements.current.aboutRefElement },
    { name: "Skills", refElement: refElements.current.skillsRefElement },
    { name: "Projects", refElement: refElements.current.projectsRefElement },
    { name: "Contact", refElement: refElements.current.contactRefElement },
  ];

  let Header = (
    <Box sx={{ height: "20vh", width: "100vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ display: "flex", width: "150px" }}>
        <img src="assets/logo.png" alt="logo" style={{ minWidth: "100px", width: "15vw", maxWidth: "150px", marginLeft: "20px" }} />
      </Box>

      <Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginRight: "5vw", width: "600px", flexShrink: 0 }}>
            {navBarLst.map((item, index) => {
              return (
                <Button
                  variant="text"
                  key={index}
                  onClick={() => {
                    console.log(item.refElement);
                    item.refElement.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    margin: 0,
                  }}
                >
                  <p style={{ fontFamily: "Poppins,Arial", fontSize: "26px", margin: "5px" }}>{item.name}</p>
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Box sx={{ width: "100px", padding: 0, margin: 0 }}>
            <img src="assets/hamburger  icon.png" alt="logo" style={{ minWidth: "70px", width: "10vw", maxWidth: "90px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  let mySelfContent = (
    <Box sx={{ height: "80vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
          <img src="assets/mypic-1.png" alt="logo" style={{ width: "50vw", maxWidth: "300px", minWidth: "200px" }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "4vw", color: "rgb(85, 85, 85)", fontWeight: 600 }}>Hi there 👋 I'm</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "7vw", color: "rgb(0,0,0)", fontWeight: 700 }}>Nirmal Chamika</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "6vw", color: "rgb(85, 85, 85)", fontWeight: 600 }}>Senior Software Engineer</Typography>

          <Box sx={{ marginTop: "20px" }}>
            <img src="assets/linkedin.png" alt="logo" style={{ width: "8vw", borderRadius: "200px", marginRight: "10px" }} />
            <img src="assets/github.png" alt="logo" style={{ width: "8vw", borderRadius: "200px" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: "30px" }}>
          <img src="assets/mypic-1.png" alt="logo" style={{ width: "450px" }} />
        </Box>

        <Box sx={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "25px", color: "rgb(85, 85, 85)", fontWeight: 600 }}>Hi there 👋 I'm</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "45px", color: "rgb(0,0,0)", fontWeight: 700 }}>Nirmal Chamika</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "32px", color: "rgb(85, 85, 85)", fontWeight: 600 }}>Senior Software Engineer</Typography>

          <Box>
            <Button>
              <img src="assets/linkedin.png" alt="logo" style={{ width: "50px", borderRadius: "200px" }} />
            </Button>
            <Button>
              <img src="assets/github.png" alt="logo" style={{ width: "50px", borderRadius: "200px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      {Header}
      {mySelfContent}
    </Box>
  );
};

export default Home;
