import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import CardItem from "../content/components/CardItem";

export const Cities = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr" },
        }}
      >
        <section>
          <CardItem />
        </section>
        <section>FOR MAP</section>
      </Box>
    </>
  );
};

export default Cities;
