import { Button } from "@mui/material";

type ButtonType = {
  text: string;
  isChecked: boolean;
  border?: boolean;
};
export const InputButton = (props: ButtonType) => {
  const { isChecked, text, border = false } = props;
  return (
    <Button
      fullWidth={true}
      sx={{
        bgcolor: isChecked ? "green" : border ? "white" : "#EEEFF2",
        fontSize: 14,
        color: border ? "black" : isChecked ? "white" : "#1C20243D",
        border: border ? "1px solid green" : "none",
        borderRadius: "4px",
      }}
    >
      {text}
    </Button>
  );
};
