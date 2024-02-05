import { ConfirmEmail } from "@/components/confirmPassComps/ConfirmEmail";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      mt={"56px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={384} padding={4}>
        <Typography color={"#000"} fontSize={28} fontWeight={700}>
          Нууц үг сэргээх
        </Typography>
        <ConfirmEmail />
      </Stack>
    </Stack>
  );
}
