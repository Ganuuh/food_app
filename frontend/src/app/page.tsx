"use client";

import { FoodCard } from "@/components/foodCard/FoodCard";
import { Header } from "@/components/headerFooter/Header";
import { LoginCard } from "@/components/loginSignup/LoginCard";
import { SignUpCard } from "@/components/loginSignup/SignUpCard";

import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack width={"100vw"} height={"100vw"} alignItems={"center"}>
      <Header />
      <Stack width={"full"} height={"48px"}></Stack>
      <Stack width={"full"} padding={"40px 20px"}>
        <LoginCard />
        <SignUpCard />
        <FoodCard
          name="Өглөөний хоол"
          price={6800}
          salePrice={4800}
          picture="food.png"
        />
        <FoodCard name="Өглөөний хоол" price={8000} picture="food.png" />
      </Stack>
    </Stack>
  );
}
