import { LoginCard } from "@/components/loginSignup/LoginCard";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ height: "full" }}>
      <LoginCard />
    </Container>
  );
}
