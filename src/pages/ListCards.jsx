import React, { useEffect, useState } from "react";
import Card from "../component/common/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getProducts } from "../component/api/api";
const ListCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchproduct = async () => {
      const data = await getProducts();
      if (data) {
        setProducts(data);
        setLoading(false);
      }
      console.log(data);
    };
    fetchproduct();
  });
  return (
    <Box>
      <Grid container justifyContent="center">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          products.map((product) => {
            return (
              <Grid item sm={6} md={4} lg={3}>
                <Card product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default ListCards;
