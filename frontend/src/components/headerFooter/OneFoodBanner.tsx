import { Collapse, Stack } from "@mui/material";
import { FoodBanner } from "./FoodBanner";
import { useLink } from "@/providers/linkProvider";

export const OneFoodBanner = () => {
  const { bannerFood, setModal } = useLink();

  return (
    <Collapse in={true}>
      <Stack
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          onClick={() => {
            setModal(false);
          }}
          width={"100%"}
          height={"100%"}
          bgcolor={"#00000080"}
          position={"absolute"}
        ></Stack>

        {bannerFood && <FoodBanner {...bannerFood} />}
      </Stack>
    </Collapse>
  );
};
