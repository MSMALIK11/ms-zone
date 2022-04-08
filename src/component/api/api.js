import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.log("error while callingpruduct api", error);
  }
};
