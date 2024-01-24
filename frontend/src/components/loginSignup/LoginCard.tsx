"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomInput } from "../customInput/CustomInput";
import { toast } from "react-toastify";
import { api } from "@/common";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    try {
      const res = await api.post("/logIn", { email, password });

      const { token } = res.data;

      console.log(token);

      toast.success("User logged in");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
        <Button
          fullWidth
          variant="contained"
          disabled={!email || !password}
          sx={{ color: "primary.contrastText" }}
        >
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
        <Button variant="outlined" fullWidth onClick={logIn}>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
