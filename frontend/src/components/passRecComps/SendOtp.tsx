"use client";
import { CustomInput } from "@/components/customInput/CustomInput";
import { usePass } from "@/providers/passRecProvider/passrecProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

export const SendOtp = () => {
  const { setEmail, sendOTP, recoveryStep, setRecoveryStep } = usePass();
  const router = useRouter();
  const validationSchema = yup.object({
    email: yup.string().required().email(),
  });
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: () => {
      setEmail(formik.values.email);
      sendOTP(formik.values.email);
    },
  });
  return (
    <>
      <Stack
        width={"100%"}
        height={"100%"}
        mt={"56px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={384} padding={4} gap={6} alignItems={"center"}>
          <Typography color={"#000"} fontSize={28} fontWeight={700}>
            Нууц үг сэргээх
          </Typography>
          <CustomInput
            placeholder="Имэйл хаягаа оруулна уу"
            type="text"
            label="Имэйл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            fullWidth
            disabled={Boolean(formik.errors.email)}
            variant="contained"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
