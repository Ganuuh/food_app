import { MoreVert } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type EachCategoryProps = {
  name: string;
  setFilter: Dispatch<SetStateAction<string>>;
};
export const EachCategory = (props: EachCategoryProps) => {
  const { name, setFilter } = props;
  return (
    <Stack
      width={"100%"}
      padding={"6.5px 16px"}
      bgcolor={"primary.main"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={2}
      color={"white"}
      sx={{ cursor: "pointer" }}
      onClick={() => {
        setFilter(name);
      }}
    >
      <Typography fontSize={18} fontWeight={500}>
        {name}
      </Typography>
      <MoreVert />
    </Stack>
  );
};