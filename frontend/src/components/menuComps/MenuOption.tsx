"use client";
import { Stack } from "@mui/material";
import { EachOption } from "./EachOption";
import { useState } from "react";

export const MenuOption = () => {
  const [selected, setSelected] = useState("Main course");
  const options = ["Main course", "Appetizers", "Beverage", "On sale"];
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
            state={selected}
            text={each}
            setSelected={setSelected}
          />
        );
      })}
    </Stack>
  );
};
