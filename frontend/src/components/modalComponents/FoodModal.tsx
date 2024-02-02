import { Collapse, Stack } from "@mui/material";
import { FoodModalCard } from "./FoodModalCard";
import { useFModal } from "@/providers/FoodModalProvider";

export const FoodModal = () => {
  const { bannerFood, setModal } = useFModal();

  return (
    <Collapse in={true}>
      <Stack
        zIndex={50}
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

        {bannerFood && <FoodModalCard {...bannerFood} />}
      </Stack>
    </Collapse>
  );
};
