"use client";

import { Header } from "@/components/headerFooter/Header";
import { LoginCard } from "@/components/loginSignup/LoginCard";
import { SignUpCard } from "@/components/loginSignup/SignUpCard";

import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack width={"full"}>
      <Header />
    </Stack>
  );
}
