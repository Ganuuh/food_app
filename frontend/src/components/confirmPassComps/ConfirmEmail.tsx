import { Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomInput } from "../customInput/CustomInput";

export const ConfirmEmail = () => {
  const validationSchema = yup.object({
    email: yup.string().required().email(),
  });
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      mt={"56px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={384} padding={4}>
        <Typography color={"#000"} fontSize={28} fontWeight={700}>
          Нууц үг сэргээх
        </Typography>
        <CustomInput
          placeholder="Имэйл хаягаа оруулна уу"
          label="Имэйл"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Stack>
    </Stack>
  );
};
