import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ color: "#fff", fontSize: "14px", px: 4 }}
      startIcon={<LoginIcon />}
      onClick={() => navigate("/login")}
    >
      Login
    </Button>
  );
};

export default LoginButton;
