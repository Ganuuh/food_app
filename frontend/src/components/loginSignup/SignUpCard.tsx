"use client";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { useState } from "react";
import { CloudDoneSharp, CloudOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "@/common";

export const SignUpCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [terms, setTerms] = useState(false);
  const clickHandler = () => {
    const includes =
      email.includes("@gmail.com") || email.includes("@yahoo.com");
    const isNameValid = name.length > 4;

    !includes
      ? toast.warning("Not Valid Email")
      : !isNameValid
      ? toast.warning("Name must be 5 charachters long")
      : isPasswordValid();
  };
  const isPasswordValid = () => {
    if (password == "") {
      toast.warning("Password must not be empty");
      return;
    }
    if (password.length < 10) {
      toast.warning("Password must contain above 10 letters");
      return;
    }
    if (!password.match(/[a-z]/)) {
      toast.warning("Password must contain lower case letter");
      return;
    }
    if (!password.match(/[A-Z]/)) {
      toast.warning("Password must contain upper case letter");
      return;
    }
    if (!password.match(/\d+/)) {
      toast.warning("Password must contain atleast one number");
      return;
    }
    if (!password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
      toast.warning("Password must contain special characters");
      return;
    }
    if (password !== rePass) {
      toast.warning("Passwords must be same");
      return;
    }
    signUp();
  };

  const signUp = async () => {
    try {
      const res = await api.post("/signUp", {
        name,
        email,
        password,
        address,
      });

      const { token } = res.data;

      localStorage.setItem("token", token);

      toast.success("User created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
              setTerms((prev) => !prev);
            }}
          >
            {terms ? <CloudDoneSharp /> : <CloudOutlined />}
          </IconButton>
          <Typography fontSize={14} color={terms ? "green" : "black"}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <Button
          disabled={
            !email || !password || !address || !rePass || !name || !terms
          }
          variant="contained"
          onClick={clickHandler}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
