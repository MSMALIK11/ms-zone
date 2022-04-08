import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const InputBox = ({ name }) => {
  return (
    <Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
      <PersonOutlineOutlinedIcon
        sx={{ color: "action.active", mr: 1, my: 0.5 }}
      />
      <TextField id="input-with-sx" label={name} variant="standard" />
    </Box>
  );
};

export default InputBox;
