"use client";
import { Stack } from "@mui/material";
import { EachOption } from "./EachOption";
import { useFModal } from "@/providers/FoodModalProvider";

export const MenuOption = () => {
  const { foodFilter, setFilter } = useFModal();
  const options = ["Main course", "Appetizer", "Beverage", "On sale"];
  return (
    <Stack
      paddingY={4}
      maxWidth={1440}
      flexDirection={"row"}
      width={"80%"}
      justifyContent={"space-between"}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4 , 1fr)",
        gap: "26px",
      }}
    >
      {options.map((each) => {
        return (
          <EachOption
            key={each}
            state={foodFilter}
            text={each}
            setSelected={setFilter}
          />
        );
      })}
    </Stack>
  );
};
