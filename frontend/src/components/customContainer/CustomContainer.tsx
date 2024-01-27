import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export const CustomContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      width={"100vw"}
      padding={"100px 0px"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
    >
      {children}
    </Stack>
  );
};
