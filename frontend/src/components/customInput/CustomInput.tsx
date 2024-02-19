"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  const [isShown, setIsShown] = useState(false);
  return (
    <Stack width={"100%"} gap={0.5} bgcolor={"transparent"}>
      <Typography>{label}</Typography>
      <TextField
        {...rest}
        fullWidth
        type={type === "password" && isShown ? "text" : type}
        sx={{ bgcolor: "#ECEDF0" }}
        inputProps={{
          style: { padding: "14px 16px" },
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setIsShown((prev) => !prev);
                }}
              >
                {isShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
