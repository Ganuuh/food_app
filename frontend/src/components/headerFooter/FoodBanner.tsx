import { BannerFood, useLink } from "@/providers/linkProvider";
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const FoodBanner = (props: BannerFood) => {
  const [quantity, setQuantity] = useState(1);
  const { name, ingredient, newPrice = 0, image, price } = props;
  const { setModal, percentageModal } = useLink();

  return (
    <Stack
      padding={4}
      flexDirection={"row"}
      alignItems={"center"}
      sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
      gap={4}
      bgcolor={"white"}
      zIndex={10}
      borderRadius={2}
    >
      <Stack
        position={"relative"}
        borderRadius={2}
        overflow={"hidden"}
        sx={{ aspectRatio: "1/0.7", width: 1 }}
      >
        <Typography
          borderRadius={10}
          marginTop={"10px"}
          marginRight={"10px"}
          fontWeight={600}
          fontSize={18}
          border={"1px solid white"}
          sx={{
            zIndex: 20,
            backgroundColor: "green",
            color: "white",
            padding: "2px 10px",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          {percentageModal}%
        </Typography>
        <Image fill alt="" src={`/${image}`} />
      </Stack>
      <Stack gap={4} width={"100%"} alignItems={"flex-start"}>
        <Stack
          width={"100%"}
          alignItems={"flex-end"}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setModal(false);
          }}
        >
          <Close />
        </Stack>
        <Stack>
          <Typography fontSize={28} fontWeight={700} color={"#000000"}>
            {name}
          </Typography>
          <Typography fontSize={18} fontWeight={600} color={"primary"}>
            {newPrice}₮
          </Typography>
        </Stack>
        <Stack gap={1.5}>
          <Typography fontSize={18} fontWeight={600}>
            Орц
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#767676"}>
            {ingredient}
          </Typography>
        </Stack>
        <Typography fontSize={18} fontWeight={600}>
          Тоо
        </Typography>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack padding={1.5} borderRadius={1.4} bgcolor={"primary.main"}>
            <Remove />
          </Stack>
          <Typography>{quantity}</Typography>
          <Stack padding={1.5} borderRadius={1.4} bgcolor={"primary.main"}>
            <Add />
          </Stack>
        </Stack>
        <Button variant="contained" color="primary" fullWidth>
          Сагслах
        </Button>
      </Stack>
    </Stack>
  );
};
