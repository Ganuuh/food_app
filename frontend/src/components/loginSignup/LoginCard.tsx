"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomInput } from "../customInput/CustomInput";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack
      sx={{
        padding: 4,
        bgcolor: "#fff",
        borderRadius: "16px",
        border: "1px solid green",
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
        <Button sx={{ color: "#1C20243D", bgcolor: "#EEEFF2", text: "16px" }}>
          Нэвтрэх
        </Button>
        <Typography
          fontSize={14}
          width={"full"}
          textAlign={"center"}
          justifyItems={"center"}
          color={"#3F4145"}
        >
          Эсвэл
        </Typography>
        <Button sx={{ color: "#272727", border: "1px solid #18BA51" }}>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
