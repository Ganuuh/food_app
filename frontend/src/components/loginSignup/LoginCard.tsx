"use client";
import { Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { CustomInput } from "../customInput/CustomInput";
import { toast } from "react-toastify";
import { api } from "@/common";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/authProvider";
import { useFormik } from "formik";
import * as yup from "yup";

type LogInCardProps = {
  setShown?: Dispatch<SetStateAction<boolean>>;
};
export const LoginCard = (props: LogInCardProps) => {
  const { logIn } = useAuth();
  const {
    setShown = (p) => {
      return p;
    },
  } = props;
  const router = useRouter();

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      logIn(values);
    },
  });
  const { isLoggedIn } = useAuth();

  return (
    <Stack
      sx={{
        padding: 4,
        bgcolor: "#fff",
        borderRadius: "16px",
      }}
      gap={6}
      width={400}
      zIndex={10}
    >
      <Typography fontWeight={600} fontSize={28} alignSelf={"center"}>
        Нэвтрэх
      </Typography>
      <Stack width={"full"} gap={2}>
        <CustomInput
          label="Имэйл"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          placeholder="Имэйл хаягаа оруулна уу"
          type="text"
        />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Typography sx={{ alignSelf: "end" }}>Нууц үг сэргээх</Typography>
      </Stack>
      <Stack width={"full"} gap={4}>
        <Button
          fullWidth
          variant="contained"
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            formik.handleSubmit();
          }}
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
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            setShown(false);
            router.push("/signup");
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
