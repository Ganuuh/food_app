"use client";

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export const CustomSelect = (
  props: SelectProps & {
    options: { value: string; text: string }[];
    setValue: Dispatch<SetStateAction<string>>;
  }
) => {
  const { label, options, value, setValue, ...rest } = props;
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Stack width={"100%"} gap={1} alignItems={"flex-start"}>
      <Typography fontSize={14} fontWeight={500}>
        {label}
      </Typography>
      <Select sx={{ bgcolor: "#F4F4F4" }} fullWidth {...rest}>
        {options.map((each) => {
          return <MenuItem>{each.text}</MenuItem>;
        })}
      </Select>
    </Stack>
  );
};
