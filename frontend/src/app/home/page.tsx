"use client";
import { HomeCards } from "@/components/homeComps/HomeCards";
import { HomeFoods } from "@/components/homeComps/HomeFoods";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Page() {
  return (
    <Stack marginTop={"55px"} width={"full"} gap={"122px"}>
      <Stack
        width={"full"}
        bgcolor={"primary.main"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          sx={{ width: "100%", overflow: "hidden" }}
          zIndex={10}
          top={0}
          left={0}
        >
          <Image
            src={"/foodB.png"}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>
        <Stack
          position={"absolute"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"228px"}
        >
          <Stack gap={3} width={384}>
            <Typography
              color={"primary.contrastText"}
              fontSize={55}
              fontWeight={600}
            >
              Pinecone Food delivery
            </Typography>
            <Stack border={"1px solid white"} width={"full"}></Stack>
            <Typography
              fontSize={22}
              fontWeight={700}
              color={"primary.contrastText"}
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack position={"relative"} zIndex={20}>
            <Image height={438} width={443} src={"/backFood.png"} alt="" />
            <Image
              height={313}
              width={313}
              src={"/frontFood.png"}
              alt=""
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack width={"full"} alignItems={"center"}>
        <HomeCards />
      </Stack>
      <Stack width={"full"} alignItems={"center"} gap={10}>
        <HomeFoods title="Main course" />
        <HomeFoods title="Appetizer" />
        <HomeFoods title="Beverage" />
        <HomeFoods title="On sale" />
      </Stack>
    </Stack>
  );
}
