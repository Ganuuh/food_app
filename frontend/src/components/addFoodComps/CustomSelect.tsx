"use client";

import { Select, SelectProps, Stack, Typography } from "@mui/material";

export const CustomSelect = (props: SelectProps) => {
  const { label, ...rest } = props;
  return (
    <Stack width={"100%"} gap={1} alignItems={"flex-start"}>
      <Typography fontSize={14} fontWeight={500}>
        {label}
      </Typography>
      <Select fullWidth {...rest} />
    </Stack>
  );
};
