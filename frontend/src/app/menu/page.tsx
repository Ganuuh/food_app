"use client";

import { api } from "@/common";
import { MenuFoods } from "@/components/menuComps/MenuFoods";
import { MenuOption } from "@/components/menuComps/MenuOption";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [foods, setFoods] = useState([]);

  const getAllFoods = async () => {
    try {
      const { data } = await api.get("/foods/getAll");

      setFoods(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllFoods();
  }, []);

  return (
    <Stack width={"full"} marginTop={"55px"} alignItems={"center"} gap={"54px"}>
      <MenuOption />
      <MenuFoods foods={foods} />
    </Stack>
  );
}
