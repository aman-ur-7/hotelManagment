import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  Email,
  Instagram,
  LinkedIn,
  Logout,
  Phone,
  Twitter,
} from "@mui/icons-material";
import Cookies from "js-cookie";

const Footer = () => {
  const CLEAR_AUTH_COOKES = async () => {
    Cookies.remove("auth");
    window.location.reload();
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "70vh",
          background: "#F3F5F7",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <img
            src="https://assets.oyoroomscdn.com/cmsMedia/b44cad94-daf3-4989-b4d6-8b22487c589a.png"
            alt="mapUrl"
            style={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ padding: "20px" }}>
          <h1>There&apos;s an NIGHT around. Always.</h1>
          <p>
            More Destinations. More Ease. More Affordable. <br /> Hey I&apos;m
            Aman the developer of SLEEP_NIGHT these hotel have{" "}
          </p>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#232323", color: "#fff", p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" paragraph>
              My name Aman Kumar i&apos;m a Full stack developer as well as a
              good understanding in Docker . This is my project SLEEP-NIGHT
              which i made with all my effort&apos;s . Explore more
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ color: "#FFA500", mr: 1 }} />
              <Typography variant="body2">+91 9334555698</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Email sx={{ color: "#FFA500", mr: 1 }} />
              <Typography variant="body2">amandhn5973@gmail.com</Typography>
            </Box>
            <Box display="flex">
              <TextField
                variant="outlined"
                size="small"
                placeholder="amandhn5973@gmail.com"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  mr: 1,
                }}
              />
              <Button variant="contained" color="warning">
                Send
              </Button>
            </Box>
            <Box>
              <Button
                onClick={CLEAR_AUTH_COOKES}
                sx={{ backgroundColor: "#4d555b", margin: "10px 0px" }}
              >
                <Logout sx={{ color: "#ff0000", cursor: "pointer" }} />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            {[
              {
                icon: <LinkedIn sx={{ color: "#fff", mr: 1 }} />,
                text: "LinkedIn: I'm to active in LinkedIn .I post all my blog's what i have learn and share my activity among peoples.",
              },
              {
                icon: <Twitter sx={{ color: "#fff", mr: 1 }} />,
                text: "Twitter: Truelyy, I do'not use more Twitter but these is a best platform to share you activity.",
              },
              {
                icon: <Instagram sx={{ color: "#fff", mr: 1 }} />,
                text: "Instagram: My Instagram hold all my casuals daily activity.",
              },
            ].map((link, index) => (
              <Box display="flex" alignItems="center" mb={2} key={index}>
                {link.icon}
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  {link.text}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Our hotel
            </Typography>
            <Grid container spacing={1}>
              {[
                "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/5157828/pexels-photo-5157828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              ].map((img, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Instagram ${index + 1}`}
                    sx={{ width: "100%", borderRadius: 1 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
