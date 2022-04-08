import React from "react";
import Box from "@mui/material/Box";
import InputBox from "../component/common/InputBox";
import Button from "@mui/material/Button";
const LoginScreen = () => {
  return (
    <Box
      pb={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: { sm: "90vw", md: "40vw" },

        margin: "60px auto",
        boxShadow: "0px 0px  25px 0 rgba(0,0,123,0.2)",
        borderLeft: "3px solid orange",
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box component="form" my={5} sx={{ zIndex: 999 }}>
        <InputBox name="Email.." />
        <InputBox name="Password" />
      </Box>
      <Box
        sx={{
          width: "400px",
          height: "400px",
          background: "coral",
          borderRadius: "200px 0 0 200px ",
          position: "absolute",
          right: "-10%",
          zindex: "-1",
          opacity: 0.1,
        }}
      ></Box>
      <Button
        variant="contained"
        sx={{ background: "indigo", fontWeight: "bold", letterSpacing: "3px" }}
        size="large"
      >
        Submit
      </Button>
    </Box>
  );
};

export default LoginScreen;
