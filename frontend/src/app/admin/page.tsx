"use client";
import { AdminFoods } from "@/components/adminComps/AdminFoods";
import { FoodCategory } from "@/components/adminComps/FoodCategory";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Admin() {
  const [filter, setFilter] = useState("beverage");

  return (
    <Stack width={"100%"} mt={"55px"} alignItems={"center"}>
      <Stack width={"80%"} maxWidth={1440} flexDirection={"row"}>
        {/* categories */}
        <FoodCategory setFilter={setFilter} filter={filter} />
        {/* foods */}
        <AdminFoods title={filter} />
      </Stack>
    </Stack>
  );
}
