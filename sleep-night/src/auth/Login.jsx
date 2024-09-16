import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Container, TextField } from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import "../layout/header/common.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter all the fields");
    }
    try {
      const LOGIN_RESPOND = await axios.post(
        "http://localhost:5007/hotel/read",
        {
          email,
          password,
        }
      );

      if (LOGIN_RESPOND) {
        Cookies.set("auth", JSON.stringify(LOGIN_RESPOND), {
          expires: 365,
        });
        navigate("/*");
        // sessionStorage.setItem("isLoggedIn", "true");
        // sessionStorage.setItem("username", LOGIN_RESPOND);
      }
    } catch (error) {
      alert("Use correct password");
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
            <span style={{ fontSize: "30px" }}>Sign in</span>
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" disableElevation onClick={handelSubmit}>
              Sign in
            </Button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              flexWrap: "wrap",
            }}
          >
            <NavLink
              to="/forgotpassword"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                borderBottom: "1px solid #2070cb",
                gap: "20px",
                fontWeight: "400",
              }}
            >
              Forgot password?
            </NavLink>
            <NavLink
              to="/signup"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                borderBottom: "1px solid #2070cb",
                wordWrap: "break-word",
              }}
            >
              Don&apos;t have an account? Sign Up
            </NavLink>
          </div>
        </section>
      </Box>
    </Container>
  );
};

export default Login;
