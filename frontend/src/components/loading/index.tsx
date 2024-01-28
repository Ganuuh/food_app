import { CircularProgress, Stack, Typography } from "@mui/material";

export const LoadingPage = () => {
  return (
    <Stack
      position={"fixed"}
      zIndex={30}
      top={0}
      left={0}
      sx={{ width: "100%", height: "100%" }}
      bgcolor={"white"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
    >
      <CircularProgress color="primary" />
      <Typography color={"primary"}>Түр хүлээнэ үү...</Typography>
    </Stack>
  );
};
