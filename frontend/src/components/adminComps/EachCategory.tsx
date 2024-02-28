import { MoreVert } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type EachCategoryProps = {
  name: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
};
export const EachCategory = (props: EachCategoryProps) => {
  const { name, setFilter, filter } = props;
  return (
    <Stack
      width={"100%"}
      padding={"6.5px 16px"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={2}
      border={1}
      sx={{
        cursor: "pointer",
        color: filter === name ? "white" : "black",
        bgcolor: filter === name ? "primary.main" : "white",
      }}
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
