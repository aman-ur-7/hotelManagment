import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const SIGNUP_RESPOND = await axios.post(
        "http://localhost:5007/hotel/create",
        { name, email, age, address, password },
        config
      );

      if (SIGNUP_RESPOND) {
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data);
      console.log(error);
      window.location.reload();
    }
  };

  return (
    <Container
      maxWidth="100vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // flexBasis: "4",
          flexDirection: "column",
          padding: "10px",
          width: "33%",
        }}
      >
        <section
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "10px",
            }}
          >
            <HttpsOutlinedIcon
              sx={{
                fontSize: "40px",
                padding: "7px",
                backgroundColor: "#9C27B0",
                borderRadius: "50%",
                color: "#FFFFFF",
                margin: "auto",
              }}
            />
            <span style={{ fontSize: "30px" }}>Sign Up</span>
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              // required:true
              sx={{}}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              // required:true
              sx={{}}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Age"
              variant="standard"
              // required:true
              sx={{}}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              // required:true
              sx={{}}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              // required:true
              sx={{}}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" disableElevation onClick={handelSubmit}>
              Sign Up
            </Button>
          </form>
        </section>
      </Box>
    </Container>
  );
};

export default SignUp;
