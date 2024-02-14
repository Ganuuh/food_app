"use client";
import { CustomInput } from "@/components/customInput/CustomInput";
import { usePass } from "@/providers/passRecProvider/passrecProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Page() {
  const { changePassword, email } = usePass();
  const validationSchema = yup.object({
    password: yup.string().required("Please insert your password").min(10),
    rePassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: { password: "", rePassword: "" },
    validationSchema: validationSchema,
    onSubmit: async () => {
      changePassword(formik.values.password, email);
    },
  });
  return (
    <>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={15}
      >
        <Stack width={384} gap={5} alignItems={"center"}>
          <Typography color={"#000"} fontSize={28} fontWeight={700}>
            Шинэ нууц үг зохиох
          </Typography>
          <Stack width={"100%"} gap={2}>
            <CustomInput
              name="password"
              label="Нууц үг "
              placeholder="******"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />

            <CustomInput
              name="rePassword"
              label="Нууц үг давтах"
              placeholder="******"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.rePassword && Boolean(formik.errors.rePassword)
              }
              helperText={formik.errors.rePassword}
            />
          </Stack>

          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              formik.handleSubmit;
            }}
            disabled={
              Boolean(formik.errors.password) ||
              Boolean(formik.errors.rePassword)
            }
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
