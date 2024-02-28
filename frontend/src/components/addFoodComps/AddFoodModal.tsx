"use client";
import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../customInput/CustomInput";
import { CustomSelect } from "./CustomSelect";
import { Toggle } from "./OnSaleToggle";
import { Dispatch, SetStateAction, useState } from "react";
import { AddFoodPicture } from "./AddFoodPicture";
import { useFormik } from "formik";
import * as yup from "yup";

type AddFoodProps = {
  setAddFood: Dispatch<SetStateAction<boolean>>;
};
export const AddFood = (props: AddFoodProps) => {
  const [isOnSale, setOnSale] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [category, setCategory] = useState<string>("");

  const categories = [
    { value: "zail", text: "zail gsen" },
    { value: "tsaasha", text: "bur tsasha" },
  ];
  const validationSchema = yup.object({
    name: yup.string().required(),
    ingredients: yup.string().required(),
    price: yup.number().required(),
    onsale: yup.number(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      ingredients: "",
      price: "",
      onsale: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      paddingY={"40px"}
      zIndex={30}
      position={"fixed"}
      top={0}
      left={0}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"55px"}
      overflow={"scroll"}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"#00000080"}
        onClick={() => {
          props.setAddFood(false);
        }}
      ></Stack>
      <Stack
        width={500}
        height={"fit-content"}
        padding={3}
        gap={3}
        border={1}
        borderRadius={2}
        zIndex={10}
        bgcolor={"white"}
      >
        <Stack
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Close
            onClick={() => {
              props.setAddFood(false);
            }}
          />
          <Typography fontSize={28} fontWeight={600} justifySelf={"center"}>
            Create food
          </Typography>
          <Stack color={"white"}>
            <Close />
          </Stack>
        </Stack>
        {/* text fields */}
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
          <CustomSelect
            label="Хоолны ангилал"
            MenuProps={{ variant: "menu" }}
            options={categories}
            setValue={setCategory}
          />
          <CustomInput
            label="Хоолны орц"
            placeholder="Placeholder"
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
            label="Үнэ"
            placeholder="10000"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <Stack>
            <Toggle
              state={isOnSale}
              setState={setOnSale}
              label="Хямдралтай эсэх"
            />
            <CustomInput
              placeholder="10000"
              name="onsale"
              disabled={!isOnSale}
              value={formik.values.onsale}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.onsale && Boolean(formik.errors.onsale)}
              helperText={formik.touched.onsale && formik.errors.onsale}
            />
          </Stack>
          <AddFoodPicture link={imageLink} setLink={setImageLink} />
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            borderTop: "1px solid grey",
            alignItems: "flex-end",
            padding: "24px",
          }}
        >
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Typography color={"#393939"} fontSize={16} fontWeight={600}>
              Clear
            </Typography>
            <Typography
              padding={"10px 20px"}
              color={"white"}
              bgcolor={"#393939"}
              fontSize={16}
              fontWeight={600}
              borderRadius={1}
            >
              Continue
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
