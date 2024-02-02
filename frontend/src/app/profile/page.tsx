import { ProfilePicFrame } from "@/components/profileComps/ProfilePic";
import { Stack, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Stack>
        <Stack width={"100%"} alignItems={"center"} gap={5}>
          <Stack
            width={120}
            height={120}
            borderRadius={"50%"}
            overflow={"hidden"}
          >
            <ProfilePicFrame src="/profile.jpeg" />
          </Stack>
          <Typography fontSize={28} fontWeight={700}></Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
