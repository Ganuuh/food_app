"use client";
import { useFModal } from "@/providers/FoodModalProvider";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type FoodProps = {
  name: string;
  price: number;
  salePrice?: number;
  picture: string;
  id: string;
};

export const FoodCard = (props: FoodProps) => {
  const { name, price, salePrice = 0, picture, id } = props;
  console.log(picture);
  const { setId, setModal, setPercentageModal } = useFModal();

  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (salePrice) {
      setPercentage(Math.floor(100 - (salePrice / price) * 100));
    }
  }, [salePrice]);
  return (
    <Stack
      alignItems={"center"}
      gap={"14px"}
      width={"full"}
      onClick={() => {
        setPercentageModal(percentage);
        setId(id);
        setModal(true);
      }}
    >
      <Stack
        width={"100%"}
        alignItems={"end"}
        justifyContent={"start"}
        borderRadius={"16px"}
        overflow={"hidden"}
        position={"relative"}
        border={"1px solid grey"}
        sx={{ aspectRatio: "1/0.6" }}
      >
        {percentage === 0 ? null : (
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
            {percentage}%
          </Typography>
        )}
        <Image src={picture} alt="" fill />
      </Stack>
      <Stack width={"100%"}>
        <Typography fontSize={20} fontWeight={600}>
          {name}
        </Typography>
        <Stack flexDirection={"row"} gap={2}>
          {salePrice ? (
            <Stack flexDirection={"row"} gap={2}>
              <Typography color={"green"} fontSize={18} fontWeight={600}>
                {salePrice}₮
              </Typography>
              <Typography
                fontSize={18}
                fontWeight={200}
                sx={{ textDecoration: "line-through" }}
              >
                {price}₮
              </Typography>
            </Stack>
          ) : (
            <Typography color={"green"} fontSize={18} fontWeight={600}>
              {price}₮
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
