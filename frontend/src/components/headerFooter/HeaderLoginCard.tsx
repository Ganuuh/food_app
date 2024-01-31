import { Collapse, Stack } from "@mui/material";
import { LoginCard } from "../loginSignup/LoginCard";
import { Dispatch, SetStateAction } from "react";

type HeaderLoginCardProps = {
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
};
export const HeaderLoginCard = (props: HeaderLoginCardProps) => {
  const { shown, setShown } = props;
  return (
    <Collapse in={shown}>
      <Stack
        position={"fixed"}
        display={shown ? "flex" : "none"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          onClick={() => {
            setShown(false);
          }}
          width={"100%"}
          height={"100%"}
          bgcolor={"#00000080"}
          position={"absolute"}
        ></Stack>
        <LoginCard setShown={setShown} />
      </Stack>
    </Collapse>
  );
};
