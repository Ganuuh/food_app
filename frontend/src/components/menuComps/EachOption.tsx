import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type EachOptionProps = {
  text: string;
  state: string;
  setSelected: Dispatch<SetStateAction<string>>;
};
export const EachOption = (props: EachOptionProps) => {
  const { setSelected, text, state } = props;
  return (
    <Button
      onClick={() => {
        setSelected(text);
      }}
      variant="contained"
      fullWidth
      disableElevation
      sx={{
        borderRadius: "16px",
        fontWeight: 600,
        backgroundColor: text !== state ? "white" : "primary",
        color: text !== state ? "black" : "white",
        border: "1px solid #D6D8DB",
      }}
    >
      {text}
    </Button>
  );
};
