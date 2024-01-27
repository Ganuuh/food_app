"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const token = !localStorage.getItem("token");
    if (token) {
      toast.warning("Please login");
      router.push("/login ");
    }
  }, []);
  return;
}
