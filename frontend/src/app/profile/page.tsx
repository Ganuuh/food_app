import { ProfileTop } from "@/components/profileComps/ProfileTop";
import { Edit } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Page() {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignContent={"center"}
      marginTop={"55px"}
      py={10}
    >
      <Stack gap={3}>
        <ProfileTop />
      </Stack>
    </Stack>
  );
}
