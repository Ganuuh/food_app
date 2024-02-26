"use client";
import { api } from "@/common";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EachCategory } from "./EachCategory";

export const FoodCategory = (props: {
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const { setFilter } = props;
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const getCategories = async () => {
    try {
      const res = await api.get("/getCategory");

      const { categories } = res.data;

      console.log(categories, "category");
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Stack width={320} padding={3} gap={5}>
      <Typography fontSize={22} fontWeight={700}>
        Food menu
      </Typography>
      <Stack width={"100%"} gap={3}>
        {categories.map((category) => {
          return <EachCategory setFilter={setFilter} name={category.name} />;
        })}
      </Stack>
    </Stack>
  );
};
