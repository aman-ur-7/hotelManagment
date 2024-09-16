import React from "react";
import ContainSearchBar from "./components/ContainSearchBar";
import { Box } from "@mui/material";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ContainSearchBar />
      <Box sx={{ margin: "70px" }}>
        <About />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
