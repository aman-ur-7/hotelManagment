import { Box, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Box sx={{}}>
        <img
          src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hotelImage"
          style={{
            width: "100%",
            height: "50vh",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png"
          alt=""
          style={{
            width: "100%",
            height: "20vh",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Container>
  );
};

export default About;
