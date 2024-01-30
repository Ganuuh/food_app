"use client";

import { KeyboardArrowRight, Star } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
type HomeHeaderProps = {
  title: string;
};
export const HomeFoodHeader = (props: HomeHeaderProps) => {
  const { title } = props;
  return (
    <Stack
      width={"full"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Star color="primary" />
        <Typography fontSize={22} fontWeight={700} color={"#272727"}>
          {title}
        </Typography>
      </Stack>
      <Stack color={"primary.main"} flexDirection={"row"}>
        <Typography>Бүгдийг харах</Typography>
        <KeyboardArrowRight />
      </Stack>
    </Stack>
  );
};
