import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const BussinessTemplate = () => {
  const [name, setName] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState();
  const [image, setImage] = useState([]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.pexels.com/photos/24405882/pexels-photo-24405882/free-photo-of-view-of-a-swimming-pool-at-a-holiday-resort-on-crete-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hotel lobby"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            objectPosition: "20% 20%",
          }}
        />
        <Box
          sx={{
            background: "#c7e1e493",
            padding: "20px",
            position: "absolute",
            width: "87%",
            top: "350px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <h1 style={{ color: "#495f33" }}>
            Get started / Register your company
          </h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              gap: "10px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="YOUR NAME"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="COMPANY NAME"
              onChange={(e) => setCompanyName(e.target.value)}
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="EMAIL ID"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="PHONE NUMBER"
              variant="outlined"
              onChange={(e) => setNumber(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="CITY NAME"
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="file"
              accept=".png , .jpg , .jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default BussinessTemplate;
