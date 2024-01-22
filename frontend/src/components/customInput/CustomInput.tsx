"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";

type InputProps = {
  label?: string;
  value: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: HTMLInputTypeAttribute;
};

export const CustomInput = (props: InputProps) => {
  const { placeholder, value, label, setValue, type = "text" } = props;
  const [isShown, setIsShown] = useState(false);
  return (
    <Stack width={1 / 1} gap={0.5} height={"full"}>
      <Typography>{label}</Typography>
      <TextField
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        fullWidth={true}
        placeholder={placeholder}
        type={type === "password" && isShown ? "text" : type}
        sx={{ bgcolor: "#ECEDF0" }}
        inputProps={{ style: { padding: "14 16" } }}
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
