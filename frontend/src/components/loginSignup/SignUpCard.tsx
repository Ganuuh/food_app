"use client";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { useState } from "react";
import { CheckBox, Cloud } from "@mui/icons-material";

export const SignUpCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  return (
    <Stack width={400} gap={6} sx={{ padding: 4 }}>
      <Typography fontSize={"28px"} fontWeight={700} alignSelf={"center"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={2}>
        <CustomInput
          label="Нэр"
          placeholder="Энэрэл"
          value={name}
          setValue={setName}
          type="text"
        />
        <CustomInput
          label="И-мэйл"
          placeholder="eaxmple@pinecone.mn"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <CustomInput
          label="Хаяг"
          placeholder="СБД 1-р хороо, Гурвал гол оффис"
          value={address}
          setValue={setAddress}
          type="text"
        />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <CustomInput
          label="Нууц үг давтах"
          placeholder="Нууц үг давтах"
          value={rePass}
          setValue={setRePass}
          type="password"
        />
      </Stack>
      <Stack gap={4}>
        <Stack>
          <Stack>
            <Cloud sx={{ color: "#fff", border: "2px solid black" }} />
          </Stack>
          <Typography fontSize={14}>Үйлчилгээний нөхцөо зөвшөөрөх</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
