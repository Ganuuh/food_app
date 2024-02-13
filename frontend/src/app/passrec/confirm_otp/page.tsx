"use client";
import { CustomInput } from "@/components/customInput/CustomInput";
import { usePass } from "@/providers/passRecProvider/passrecProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Page() {
  const validationSchema = yup.object({ code: yup.number().required() });
  const formik = useFormik({
    initialValues: { code: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  const { email } = usePass();
  return (
    <>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={11}
      >
        <Stack width={384} gap={6} alignItems={"center"}>
          <Typography fontWeight={700} fontSize={28}>
            Нууц үг сэргээх
          </Typography>
          <Stack
            width={"100%"}
            flexDirection={"row"}
            gap={0.4}
            flexWrap={"wrap"}
          >
            <Typography fontSize={16} fontWeight={500}>
              Таны
            </Typography>
            <Typography fontSize={16} fontWeight={600} color={"primary"}>
              {email}
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              хаяг руу сэргээх код илгээх болно.
            </Typography>
          </Stack>
          <CustomInput
            label="Нууц үг сэргээх код"
            placeholder="******"
            value={formik.values.code}
            name="code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
          />
          <Button
            variant="contained"
            fullWidth
            disabled={Boolean(formik.errors.code)}
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
}
