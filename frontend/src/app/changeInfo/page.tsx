"use client";
import { CustomInput } from "@/components/customInput/CustomInput";
import { Edit, PortableWifiOffOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Page() {
  const validationSchema = yup.object({
    email: yup.string().required().email(),
  });
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  return (
    <Stack width={"100%"} marginTop={"55px"} alignItems={"center"}>
      <Stack width={384} alignItems={"center"} gap={2}>
        <Typography fontSize={28} fontWeight={600}>
          Мэдээлэл өөрчлөх
        </Typography>
        <Stack width={"100%"}>
          {/* one input */}
          <Stack
            width={"100%"}
            flexDirection={"row"}
            gap={2}
            alignItems={"center"}
            padding={"8px 18px"}
            borderRadius={"6px"}
            bgcolor={"#F6F6F6"}
            border={"1px solid #D6D8DB "}
          >
            <Stack
              height={40}
              sx={{ aspectRatio: "1/1" }}
              bgcolor={"white"}
              borderRadius={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PortableWifiOffOutlined />
            </Stack>
            <CustomInput />
            <Stack
              height={40}
              color={"primary.main"}
              sx={{ aspectRatio: "1/1" }}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"transparent"}
            >
              <Edit />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
