import React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = () => {
  const cities = [
    { title: "delhi" },
    { title: "kolkata" },
    { title: "jammu and kashmir" },
    { title: "sikkim" },
    { title: "shmila" },
    { title: "darjelling" },
    { title: "Dhanbad" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: 900,
          background: "white",
          borderRadius: "5px",
          position: "relative",
          height: "9vh",
        }}
      >
        <Autocomplete
          id="free-solo-demo"
          sx={{
            width: "100%",

            "& fieldset": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          freeSolo
          options={cities.map((option) => option.title)}
          renderInput={(inputs) => <TextField {...inputs} />}
        />
      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{
          backgroundColor: "#1AB64F",
          width: "150px",
          height: "9vh",
          display: "flex",
          borderRadius: "0 5px 5px 0",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        SUCCESS
      </Button>
    </Box>
  );
};

export default SearchBar;
