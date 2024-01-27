import { Stack, Typography } from "@mui/material";

import Image from "next/image";
import { FooterOptions } from "./FooterOptions";
import { SocialLogos } from "./SocialLogos";

export const Footer = () => {
  return (
    <Stack
      width={"100vw"}
      bgcolor={"#18BA51"}
      position={"relative"}
      alignItems={"center"}
    >
      <Stack
        sx={{ width: "100%", overflow: "hidden" }}
        zIndex={10}
        position={"absolute"}
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
        zIndex={20}
        alignItems={"center"}
        bgcolor={"transparent"}
        gap={5}
        padding={"100px 0px"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Image src={"/whiteLogo.png"} alt="" height={20} width={20} />
          <Typography color={"white"} fontSize={20} fontWeight={700}>
            Food Delivery
          </Typography>
        </Stack>
        <FooterOptions />
        <SocialLogos />
        <Stack border={"1px solid white"} width={"100%"}></Stack>
        <Stack alignItems={"center"} gap={1}>
          <Typography color={"white"} fontSize={16} fontWeight={400}>
            © 2024 Pinecone Foods LLC
          </Typography>
          <Typography color={"white"} fontSize={16} fontWeight={400}>
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
