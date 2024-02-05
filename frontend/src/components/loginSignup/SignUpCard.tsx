"use client";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { useState } from "react";
import { CloudDoneSharp, CloudOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "@/common";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

export const SignUpCard = () => {
  const [terms, setTerms] = useState(false);
  const router = useRouter();
  const validationSchema = yup.object({
    email: yup.string().required("Please insert your email").email(),
    password: yup.string().required("Please insert your password").min(10),
    rePassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    address: yup.string().required("Please insert your address"),
    name: yup.string().required("Please insert your email").min(5),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/signUp", {
          name: values.name,
          email: values.email,
          password: values.password,
          address: values.address,
        });
        const { token } = res.data;
        localStorage.setItem("token", token);
        toast.success("User created successfully");

        router.push("/home");
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <Stack width={400} height={"fit"} gap={6} sx={{ padding: 4 }}>
      <Typography fontSize={"28px"} fontWeight={700} alignSelf={"center"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={2}>
        <CustomInput
          label="Нэр"
          name="name"
          placeholder="Энэрэл"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          type="text"
        />
        <CustomInput
          label="И-мэйл"
          name="email"
          placeholder="example@pinecone.mn"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          type="text"
        />
        <CustomInput
          label="Хаяг"
          name="address"
          placeholder="СБД 1-р хороо, Гурван гол оффис"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          type="text"
        />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          type="password"
        />
        <CustomInput
          label="Нууц үг давтах"
          placeholder="Нууц үг давтах"
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
          helperText={formik.touched.rePassword && formik.errors.rePassword}
          onBlur={formik.handleBlur}
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
            !formik.values.email ||
            !formik.values.password ||
            !formik.values.name ||
            !formik.values.rePassword ||
            !formik.values.address ||
            !terms
          }
          variant="contained"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
