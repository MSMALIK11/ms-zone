import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <Link to="login">
      <Button
        variant="outlined"
        color="secondary"
        sx={{ color: "#fff", fontSize: "14px", px: 4 }}
        startIcon={<LoginIcon />}
      >
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
