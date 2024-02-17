"use client";

import { api } from "@/common";
import { MenuFoods } from "@/components/menuComps/MenuFoods";
import { MenuOption } from "@/components/menuComps/MenuOption";
import { useFModal } from "@/providers/FoodModalProvider";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [foods, setFoods] = useState([]);
  const { foodFilter } = useFModal();

  const getAllFoods = async () => {
    try {
      const { data } = await api.get("/foods/getAll", {
        params: { filter: foodFilter },
      });

      setFoods(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllFoods();
  }, [foodFilter]);

  return (
    <Stack width={"full"} marginTop={"55px"} alignItems={"center"} gap={"54px"}>
      <MenuOption />
      <MenuFoods foods={foods} />
    </Stack>
  );
}
