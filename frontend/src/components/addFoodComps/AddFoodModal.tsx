import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { CustomSelect } from "./CustomSelect";

export const AddFood = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      zIndex={30}
      position={"fixed"}
      top={0}
      left={0}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"55px"}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"#00000080"}
      ></Stack>
      <Stack
        width={587}
        padding={3}
        gap={3}
        border={1}
        borderRadius={2}
        zIndex={10}
        bgcolor={"white"}
      >
        <Stack
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Close />
          <Typography fontSize={28} fontWeight={600} justifySelf={"center"}>
            Create food
          </Typography>
          <Close />
        </Stack>
        {/* text fields */}
        <Stack width={"100%"} gap={2}>
          <CustomInput label="Хоолны нэр" placeholder="Tsuiwan" />
          <CustomSelect label="Хоолны ангилал" />
          <CustomInput label="Хоолны орц" placeholder="Placeholder" />
          <CustomInput label="Хоолны орц" placeholder="Placeholder" />
        </Stack>
      </Stack>
    </Stack>
  );
};
