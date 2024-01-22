"use client";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { useState } from "react";
import { CloudDoneSharp, CloudOutlined } from "@mui/icons-material";
import { InputButton } from "../customInput/InputButton";

export const SignUpCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Stack width={400} height={"fit"} gap={6} sx={{ padding: 4 }}>
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
          placeholder="example@pinecone.mn"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <CustomInput
          label="Хаяг"
          placeholder="СБД 1-р хороо, Гурван гол оффис"
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
        <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
          <IconButton
            onClick={() => {
              setIsChecked((prev) => !prev);
            }}
          >
            {isChecked ? <CloudDoneSharp /> : <CloudOutlined />}
          </IconButton>
          <Typography fontSize={14} color={isChecked ? "green" : "black"}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <InputButton text="Бүртгүүлэх" isChecked={isChecked} />
      </Stack>
    </Stack>
  );
};
