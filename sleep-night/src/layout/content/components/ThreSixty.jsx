import React from "react";
import { Box, Button, Card, Container } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ThreSixty = ({ pass }) => {
  const navigate = useNavigate();
  const USER_DETAILS = JSON.parse(Cookies.get("auth"));

  return (
    <Card
      sx={{
        maxWidth: 570,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "felx",
            flexDirection: "column",
            textAlign: "center",
            borderBottom: 1,
          }}
        >
          <DoneAllIcon sx={{ color: "#5583cd", height: "30px" }} />
          <h1>Thank&apos;s for being here</h1>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1.5fr 1.5fr 1fr" },
            alignItems: "center",
            borderBottom: 1,
          }}
        >
          <img
            style={{
              maxWidth: "80%",
              borderRadius: "5px",
            }}
            src={`http://localhost:5007/images/${pass.image}`}
            alt="loading"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <span
              style={{ fontSize: "17px", fontWeight: "bold", color: "#524d4d" }}
            >
              Hotel Booking by AMAN
            </span>
            <p>BY {pass.company}</p>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <h1 style={{ color: "#524d4d", fontSize: "28px" }}>
              ${pass.number}
            </h1>
            <span style={{ color: "#524d4d" }}>License: Regular</span>
            <span style={{ color: "#ff2f2f", fontSize: "15px" }}>
              Address: {USER_DETAILS.data.address}
            </span>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Button onClick={() => navigate("/*")}>Keep Browsing</Button>
          <Button onClick={() => navigate("/payment")}>Book </Button>
        </Box>
      </Container>
    </Card>
  );
};

export default ThreSixty;
