import { Edit, PersonRounded } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

type ProfileInputProps = {
  name: string;
  value?: string | number;
  label: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  icon: ReactNode;
};

export const ProfileInput = (props: ProfileInputProps) => {
  const { icon, ...rest } = props;
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      bgcolor={"#F6F6F6"}
      paddingX={"10px"}
      border={"1px solid #D6D8DB"}
      borderRadius={"5px"}
      padding={1}
      gap={1}
    >
      <Stack
        height={48}
        sx={{ aspectRatio: "1/1" }}
        borderRadius={"50%"}
        bgcolor={"white"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {icon}
      </Stack>
      <TextField
        fullWidth
        variant="filled"
        {...rest}
        inputProps={{
          style: { backgroundColor: "#F6F6F6" },
        }}
      />

      <IconButton color="primary">
        <Edit />
      </IconButton>
    </Stack>
  );
};
