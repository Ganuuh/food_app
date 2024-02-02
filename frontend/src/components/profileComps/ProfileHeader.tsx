import { Stack, Typography } from "@mui/material";
import { ProfilePicFrame } from "./ProfilePic";

export default function ProfileHeader() {
  return (
    <Stack width={"100%"} alignItems={"center"} gap={5}>
      <Stack width={120} height={120} borderRadius={"50%"} overflow={"hidden"}>
        <ProfilePicFrame src="/profile.jpeg" />
      </Stack>
      <Typography fontSize={28} fontWeight={700}></Typography>
    </Stack>
  );
}
