import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type EachOptionProps = {
  text: string;
  state: string;
  setSelected: Dispatch<SetStateAction<string>>;
};
export const EachOption = (props: EachOptionProps) => {
  const { setSelected, text, state } = props;
  return (
    <Typography
      onClick={() => {
        setSelected(text.toLowerCase());
      }}
      sx={{
        borderRadius: "16px",
        fontWeight: 600,
        padding: "8px 0",
        textAlign: "center",
        backgroundColor:
          text.toLowerCase() !== state ? "white" : "primary.main",
        color: text.toLowerCase() !== state ? "black" : "white",
        border: "1px solid #D6D8DB",
      }}
    >
      {text}
    </Typography>
  );
};
