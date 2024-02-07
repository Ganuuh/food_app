"use client";
import { Button, Slide, Stack, Typography } from "@mui/material";
import { DrawBarFood } from "../modalComponents/DrawBarFood";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useDraw } from "@/providers/drawBarProvider";
import { useEffect } from "react";

export const DrawBar = () => {
  const { isDrawOpen, setDrawOpen, drawFoods, getCardFood } = useDraw();

  useEffect(() => {
    getCardFood();
  }, []);
  return (
    <Stack
      zIndex={50}
      position={"fixed"}
      border={"1px solid black"}
      left={0}
      top={0}
      width={"100%"}
      height={"100%"}
      alignItems={"flex-end"}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        left={0}
        top={0}
        onClick={() => {
          setDrawOpen(false);
        }}
        bgcolor={"#00000080"}
      ></Stack>
      <Slide in={isDrawOpen} direction="left">
        <Stack
          zIndex={10}
          bgcolor={"white"}
          border={"1px solid green"}
          height={"100%"}
          padding={3}
          position={"relative"}
        >
          <Stack
            width={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginBottom={5}
          >
            <KeyboardArrowLeft fontSize="large" />
            <Typography fontSize={20} fontWeight={900}>
              Таны сагс
            </Typography>
            <Stack></Stack>
          </Stack>
          {/* {drawFoods.length === 0 ? (
            <Typography>No foods</Typography>
          ) : (
            drawFoods.map((each) => {
              return <DrawBarFood  {...each/>;
            })
          )} */}

          <Stack
            boxShadow={"0px -4px 8px 0px rgba(187, 190, 205, 0.20)"}
            zIndex={10}
            position={"absolute"}
            bottom={0}
            left={0}
            width={"100%"}
            flexDirection={"row"}
            padding={"40px 32px"}
            display={"grid"}
            sx={{ gridTemplateColumns: "repeat(2,1fr)" }}
          >
            <Stack>
              <Typography fontSize={18} color={"#5E6166"} fontWeight={400}>
                Нийт төлөх дүн
              </Typography>
              <Typography fontSize={18} color={"#121316"} fontWeight={700}>
                34,800₮
              </Typography>
            </Stack>
            <Button variant="contained" color="primary">
              Захиалах
            </Button>
          </Stack>
        </Stack>
      </Slide>
    </Stack>
  );
};
