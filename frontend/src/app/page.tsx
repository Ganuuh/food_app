"use client";
import { CustomContainer } from "@/components/customContainer/CustomContainer";
import { LoginCard } from "@/components/loginSignup/LoginCard";
import { useAuth } from "@/providers/authProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  if (isLoggedIn) {
    toast.success("Та нэвтэрсэн байна !");
    router.push("/home");
  }
  return (
    <CustomContainer>
      <LoginCard />
    </CustomContainer>
  );
}
