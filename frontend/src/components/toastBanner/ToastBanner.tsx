"use client";
import { Check } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

type ToastBannerProps = {
  text: string;
  type: "warn" | "success" | "error";
};

export const ToastBanner = ({ text, type }: ToastBannerProps) => {
  console.log("Here");
  const [isShown, setShown] = useState(true);
  const color =
    type === "error" ? "#670E13" : type === "warn" ? "#C9AE00" : "#0A4E22";
  setTimeout(() => {
    setShown(false);
  }, 3000);
  return (
    <Stack
      width={100}
      height={20}
      display={isShown ? "flex" : "none"}
      sx={{ transition: "0.5s" }}
      borderRadius={"20px"}
      flexDirection={"row"}
      gap={2}
      padding={3}
      boxShadow={"0px 0px 5px 0px"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"}
      top={0}
      right={0}
      zIndex={40}
      margin={5}
    >
      <Check style={{ color: color }} />
      <Typography color={color}>{text}</Typography>
    </Stack>
  );
};
