import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
const LoginButton = () => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ color: "#fff" }}
      startIcon={<LoginIcon />}
    >
      Login
    </Button>
  );
};

export default LoginButton;
