"use client";
import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { Dispatch, SetStateAction } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/common";
import { toast } from "react-toastify";

export const AddCategoryModal = (props: {
  setState: Dispatch<SetStateAction<boolean>>;
  setCategory: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setState, setCategory } = props;
  const validationSchema = yup.object({ name: yup.string().required() });
  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/addCategory", { name: values.name });

        toast.success(res.data.message);

        setState(false);
        setCategory((prev) => !prev);
      } catch (error: any) {
        toast.warn(error.response.data.message);
      }
    },
  });
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={30}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        left={0}
        top={0}
        onClick={() => {
          setState(false);
        }}
        bgcolor={"#00000080"}
      ></Stack>
      <Stack width={580} zIndex={10} bgcolor={"white"} borderRadius={"20px"}>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={3}
          borderBottom={"1px solid grey"}
        >
          <Stack
            onClick={() => {
              setState(false);
            }}
          >
            <Close />
          </Stack>
          <Typography fontSize={24} fontWeight={700}>
            Add category
          </Typography>
          <Stack color={"white"}>
            <Close />
          </Stack>
        </Stack>

        <Stack width={"100%"} padding={3} borderBottom={"1px solid grey"}>
          <CustomInput
            label="Category name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.name && formik.errors.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={2}
          padding={3}
        >
          <Typography
            padding={"8px 10px"}
            fontSize={16}
            fontWeight={700}
            color={"#3F4145"}
            onClick={() => {
              formik.resetForm();
            }}
            sx={{ cursor: "pointer" }}
          >
            Clear
          </Typography>
          <Typography
            padding={"8px 10px"}
            fontSize={16}
            fontWeight={700}
            bgcolor={"#3F4145"}
            color={"white"}
            borderRadius={1}
            onClick={() => {
              formik.handleSubmit();
            }}
            sx={{ cursor: "pointer" }}
          >
            Continue
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
