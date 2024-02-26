"use client";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Stack,
  Typography,
} from "@mui/material";

export const CircularProgressWithProps = (
  props: CircularProgressProps & { value: number }
) => {
  const { value } = props;
  return (
    <Stack
      width={"100%"}
      sx={{ aspectRatio: "1/1", position: "relative", display: "inline-flex" }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Stack>
  );
};
