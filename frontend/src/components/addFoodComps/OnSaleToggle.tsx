import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type TogglePropsType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  label?: string;
};

export const Toggle = (props: TogglePropsType) => {
  const { state, setState, label = "" } = props;
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
      <Stack
        width={28}
        height={16}
        borderRadius={"10px"}
        padding={0.25}
        onClick={() => {
          setState((prev) => !prev);
        }}
        sx={{
          bgcolor: state ? "#18BA51" : "#8B8E95",
          alignItems: state ? "flex-end" : "flex-start",
          transitionDuration: ".4s",
        }}
      >
        <Stack
          height={"100%"}
          borderRadius={"50%"}
          sx={{ aspectRatio: "1/1", bgcolor: "white" }}
        ></Stack>
      </Stack>
      <Typography fontSize={15} fontWeight={500}>
        {label}
      </Typography>
    </Stack>
  );
};
