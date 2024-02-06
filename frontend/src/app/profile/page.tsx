"use client";
import { api } from "@/common";
import { ProfileText } from "@/components/profileComps/ProfileText";
import { Edit } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  const getUser = async () => {
    try {
      const res = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      // const { user } = res.data;
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignContent={"center"}
      marginTop={"55px"}
      py={10}
    >
      <Stack gap={3} width={400}>
        <Stack
          width={"100%"}
          alignItems={"center"}
          gap={5}
          position={"relative"}
        >
          <Stack width={120} height={120} position={"relative"}>
            <Stack
              width={"100%"}
              height={"100%"}
              position={"relative"}
              borderRadius={"50%"}
              overflow={"hidden"}
            >
              <Image fill src={"/profile.jpeg"} alt="" />
            </Stack>
            <Stack
              width={34}
              height={34}
              border={"1px solid #D6D8DB"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"primary.main"}
              position={"absolute"}
              bottom={0}
              right={0}
              borderRadius={"50%"}
              bgcolor={"white"}
            >
              <Edit />
            </Stack>
          </Stack>
          <Typography fontSize={28} fontWeight={700}>
            Ganbold
          </Typography>
          {/* //Bottom */}
        </Stack>
        {/* //one text */}
        <ProfileText type="name" value="ganbold" />
        <ProfileText type="name" value="ganbold" />
        <ProfileText type="name" value="ganbold" />
      </Stack>
    </Stack>
  );
}
