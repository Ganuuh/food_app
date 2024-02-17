"use client";

import { useFModal } from "@/providers/FoodModalProvider";
import { KeyboardArrowRight, Star } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
type HomeHeaderProps = {
  title: string;
};
export const HomeFoodHeader = (props: HomeHeaderProps) => {
  const { title } = props;
  const { setFilter } = useFModal();
  const router = useRouter();
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
      <Stack
        color={"primary.main"}
        flexDirection={"row"}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setFilter(title.toLowerCase());
          router.push("/menu");
        }}
      >
        <Typography>Бүгдийг харах</Typography>
        <KeyboardArrowRight />
      </Stack>
    </Stack>
  );
};
