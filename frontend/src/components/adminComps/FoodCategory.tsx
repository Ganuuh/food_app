"use client";
import { api } from "@/common";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EachCategory } from "./EachCategory";
import { AddCategoryModal } from "./AddCategoryModal";

export const FoodCategory = (props: {
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
}) => {
  const { setFilter, filter } = props;
  const [addCategory, setCategoryModal] = useState<boolean>(false);
  const [categoryAdded, setCategoryAdded] = useState(false);
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
  }, [categoryAdded]);
  return (
    <>
      {addCategory ? (
        <AddCategoryModal
          setState={setCategoryModal}
          setCategory={setCategoryAdded}
        />
      ) : null}
      <Stack width={320} padding={3} gap={5}>
        <Typography fontSize={22} fontWeight={700}>
          Food menu
        </Typography>
        <Stack width={"100%"} gap={3}>
          {categories.map((category, index) => {
            return (
              <EachCategory
                key={index}
                setFilter={setFilter}
                filter={filter}
                name={category.name}
              />
            );
          })}
          <Typography
            width={"100%"}
            padding={"6px"}
            textAlign={"center"}
            border={"1px solid grey"}
            borderRadius={2}
            fontWeight={550}
            onClick={() => {
              setCategoryModal(true);
            }}
            sx={{
              cursor: "pointer",
              color: "black",
              transitionDuration: "0.2s",
              ":hover": { color: "white", bgcolor: "primary.main" },
            }}
          >
            + Create new category
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
