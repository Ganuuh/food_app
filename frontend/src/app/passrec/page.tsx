"use client";
import { ChangePassword } from "@/components/passRecComps/ChangePassword";
import { ConfirmOtp } from "@/components/passRecComps/ConfirmOtp";
import { SendOtp } from "@/components/passRecComps/SendOtp";
import { usePass } from "@/providers/passRecProvider/passrecProvider";

export default function Page() {
  const { recoveryStep } = usePass();

  return (
    <>
      {recoveryStep === 1 ? (
        <SendOtp />
      ) : recoveryStep === 2 ? (
        <ConfirmOtp />
      ) : (
        <ChangePassword />
      )}
    </>
  );
}
