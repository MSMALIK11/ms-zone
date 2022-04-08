import React from "react";
import { Card, Box, Typography } from "@mui/material";

const Cards = ({ product }) => {
  return (
    <Box
      mt={5}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ width: 300, height: 400 }}>
        <Box
          sx={{
            width: "100%",
            height: "220px",
            background: "#fff",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: 200, height: 220 }}
          />
        </Box>

        <Box mt={2} textAlign="center" p={1}>
          <Typography
            variant="h5"
            fontSize="24px"
            fontWeight="bold"
            letterSpacing="2px"
          >
            {product.title.slice(0, 25)}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Cards;
