"use client";
import { addImage, api } from "@/common";
import { CustomInput } from "@/components/customInput/CustomInput";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

export default function Page() {
  const [selectedFile, setFile] = useState<File | null>(null);
  const [imageUrl, setUrl] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return toast.warn("Зураг сонгоно уу");
    }

    setFile(event.target.files[0]);
  };

  const addFood = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();

        formData.append("file", selectedFile);

        // const response = await addImage.post("rtjj4oyg", { formData });

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/drwacb3lb/upload?upload_preset=rtjj4oyg",
          { method: "POST", body: formData }
        );

        const data = await response.json();

        const url = data.secure_url;

        const res = await api.post("/foods/add", {
          name: formik.values.name,
          image: url,
          ingredient: formik.values.ingredients,
          price: formik.values.price,
          category: formik.values.category,
        });

        toast.success(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const validationSchema = yup.object({
    name: yup.string().required(),
    ingredients: yup.string().required(),
    price: yup.number().required(),
    category: yup
      .string()
      .oneOf(["appetizer", "main course", "beverage", "onsale"]),
  });
  const formik = useFormik({
    initialValues: { name: "", ingredients: "", price: 0, category: "" },
    validationSchema: validationSchema,
    onSubmit: async () => {
      try {
        addFood();
        formik.resetForm();
        setFile(null);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Stack width={"100%"} marginTop={"55px"} alignItems={"center"} paddingY={5}>
      <Stack width={384} alignItems={"center"} gap={5}>
        <Typography fontSize={28} fontWeight={600}>
          Хоол нэмэх
        </Typography>
        <Stack width={"100%"} gap={2}>
          <CustomInput
            label="Хоолны нэр"
            placeholder="шөл"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <CustomInput
            label="Хоолны орц"
            placeholder="мах, гурил"
            name="ingredients"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.ingredients && Boolean(formik.errors.ingredients)
            }
            helperText={formik.touched.ingredients && formik.errors.ingredients}
          />
          <CustomInput
            label="Хүнсний ангилал"
            placeholder="appetizer"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
          <CustomInput
            label="Үнэ"
            placeholder="10000"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <CustomInput
            type="file"
            onChange={handleImageChange}
            label="Зураг сонгоно уу"
          />
        </Stack>
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={
            Boolean(formik.errors.category) ||
            Boolean(formik.errors.name) ||
            Boolean(formik.errors.price) ||
            Boolean(formik.errors.ingredients)
          }
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
}
