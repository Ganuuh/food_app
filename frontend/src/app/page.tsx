"use client";

import { LoginCard } from "@/components/loginSignup/LoginCard";
import { SignUpCard } from "@/components/loginSignup/SignUpCard";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <LoginCard />
      <SignUpCard />
    </Container>
  );
}
