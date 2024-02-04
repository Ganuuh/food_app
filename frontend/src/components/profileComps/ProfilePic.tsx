import { Stack } from "@mui/material";
import Image from "next/image";

export type ProfilePicProps = {
  src: string;
};

export const ProfilePicFrame = (props: ProfilePicProps) => {
  const { src } = props;
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Image src={src} alt="" fill />
    </Stack>
  );
};
