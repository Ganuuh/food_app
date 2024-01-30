"use client";

import { MenuFoods } from "@/components/menuComps/MenuFoods";
import { MenuOption } from "@/components/menuComps/MenuOption";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [foods, setFoods] = useState([
    { name: "Breakfast", price: 20000, salePrice: 18000, picture: "food.png" },
    { name: "Breakfast", price: 18000, picture: "food.png" },
    { name: "Breakfast", price: 35000, salePrice: 33000, picture: "food.png" },
    { name: "Breakfast", price: 16000, salePrice: 10000, picture: "food.png" },
    { name: "Breakfast", price: 18000, picture: "food.png" },
  ]);
  const router = useRouter();
  useEffect(() => {
    const token = !localStorage.getItem("token");
    if (token) {
      toast.warning("Please login");
      router.push("/login ");
    }
  }, []);
  return (
    <Stack width={"full"} marginTop={"55px"} alignItems={"center"} gap={"54px"}>
      <MenuOption />
      <MenuFoods foods={foods} />
    </Stack>
  );
}
