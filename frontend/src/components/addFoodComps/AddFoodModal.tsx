"use client";
import { Close } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { CustomSelect } from "./CustomSelect";
import { Toggle } from "./OnSaleToggle";
import { useState } from "react";
import { AddFoodPicture } from "./AddFoodPicture";

export const AddFood = () => {
  const [isOnSale, setOnSale] = useState(false);
  const [imageLink, setImageLink] = useState("");

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      paddingY={"40px"}
      zIndex={30}
      position={"absolute"}
      top={0}
      left={0}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"55px"}
      overflow={"scroll"}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"#00000080"}
      ></Stack>
      <Stack
        width={500}
        height={"fit-content"}
        padding={3}
        gap={3}
        border={1}
        borderRadius={2}
        zIndex={10}
        bgcolor={"white"}
      >
        <Stack
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Close />
          <Typography fontSize={28} fontWeight={600} justifySelf={"center"}>
            Create food
          </Typography>
          <Stack color={"white"}>
            <Close />
          </Stack>
        </Stack>
        {/* text fields */}
        <Stack width={"100%"} gap={2}>
          <CustomInput label="Хоолны нэр" placeholder="Tsuiwan" />
          <CustomSelect label="Хоолны ангилал" />
          <CustomInput label="Хоолны орц" placeholder="Placeholder" />
          <CustomInput label="Хоолны орц" placeholder="Placeholder" />
          <CustomInput label="Хоолны үнэ" placeholder="Placeholder" />
          <Stack>
            <Toggle
              state={isOnSale}
              setState={setOnSale}
              label="Хямдралтай эсэх"
            />
            <CustomInput placeholder="Placeholder" />
          </Stack>
          <AddFoodPicture link={imageLink} setLink={setImageLink} />
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            borderTop: "1px solid grey",
            alignItems: "flex-end",
            padding: "24px",
          }}
        >
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Typography color={"#393939"} fontSize={16} fontWeight={600}>
              Clear
            </Typography>
            <Typography
              padding={"10px 20px"}
              color={"white"}
              bgcolor={"#393939"}
              fontSize={16}
              fontWeight={600}
              borderRadius={1}
            >
              Continue
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
