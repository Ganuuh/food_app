"use client";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomInput } from "../customInput/CustomInput";
import { InputButton } from "../customInput/InputButton";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsCheched] = useState(false);

  const changeHandler = () => {
    email !== "" && password !== "" ? setIsCheched(true) : setIsCheched(false);
  };

  useEffect(() => {
    changeHandler();
  }, [password, email]);

  return (
    <Stack
      sx={{
        padding: 4,
        bgcolor: "#fff",
        borderRadius: "16px",
      }}
      gap={6}
      width={400}
    >
      <Typography fontWeight={600} fontSize={28} alignSelf={"center"}>
        Нэвтрэх
      </Typography>
      <Stack width={"full"} gap={2}>
        <CustomInput
          label="Имэйл"
          value={email}
          setValue={setEmail}
          placeholder="Имэйл хаягаа оруулна уу"
          type="text"
        />
        <CustomInput
          label="Нууц үг"
          value={password}
          setValue={setPassword}
          placeholder="Нууц үг"
          type="password"
        />
        <Typography sx={{ alignSelf: "end" }}>Нууц үг сэргээх</Typography>
      </Stack>
      <Stack width={"full"} gap={4}>
        <InputButton isChecked={isChecked} text="Нэвтрэх" />
        <Typography
          fontSize={14}
          width={"full"}
          textAlign={"center"}
          justifyItems={"center"}
          color={"#3F4145"}
        >
          Эсвэл
        </Typography>
        <InputButton isChecked={false} text="Бүртгүүлэх" border={true} />
      </Stack>
    </Stack>
  );
};
