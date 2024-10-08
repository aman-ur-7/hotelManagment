import { Box, Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ThreSixty from "./ThreSixty";

const CardItem = () => {
  const [data, setData] = useState(0);
  const [isFal, setFal] = useState(false);
  const [item, setItem] = useState(false);

  useEffect(() => {
    const FETCH_DATA = async () => {
      try {
        const RES = await axios.get("http://localhost:5007/hotel/getimage");
        setData(RES.data);
      } catch (error) {
        console.log(error);
      }
    };
    FETCH_DATA();
  }, []);

  const BOOKING_CARD = async (e, index, isThree) => {
    setFal(isThree);
    setItem(e);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isFal == false ? (
        <Box
          sx={{
            overflowY: "scroll",
            height: "80vh",
            "::-webkit-scrollbar": {
              display: "none",
            },
            background: "#E8F2FA",
          }}
        >
          {data.length > 0 ? (
            data.map((e, index) => (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "2fr 2fr 1fr" },
                  alignItems: "start",
                  padding: "12px",
                  borderRadius: "12px",
                  margin: "10px",
                  boxShadow: 3,
                  gap: 1,
                  background: "#fff",
                }}
                key={index}
              >
                <section>
                  <img
                    src={`http://localhost:5007/images/${e.image}`}
                    alt="room-image"
                    style={{
                      maxHeight: "170px",
                      width: "100%",
                      objectPosition: "center",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </section>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <h1>{e.company.toUpperCase()}</h1>
                  <div>
                    <span>{e.city}</span>
                    <p>Couple Friendly | Local IDs Accepted | Free wifi</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: 1,
                  }}
                >
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "orange",
                      },
                    }}
                  ></Rating>
                  <h3>$ {e.number}</h3>
                  <Button
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={() => {
                      return BOOKING_CARD(e, index, true);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            ))
          ) : (
            <p>...loading</p>
          )}
        </Box>
      ) : (
        <ThreSixty pass={item} />
      )}
      <Box>MAP</Box>
    </Box>
  );
};

export default CardItem;
