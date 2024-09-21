import { Box, Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CardItem = () => {
  const [data, setData] = useState(0);

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

  return (
    <>
      <Box
        sx={{
          overflowY: "scroll",
          height: "80vh",
          "::-webkit-scrollbar": {
            display: "none",
          },
          background: "#E8F2FA",
          borderRadius: "12px",
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
                <Button variant="contained" sx={{ mt: 1 }}>
                  viwe AR
                </Button>
              </Box>
            </Box>
          ))
        ) : (
          <p>...loading</p>
        )}
      </Box>
    </>
  );
};

export default CardItem;
