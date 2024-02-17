"use client";

import { Stack, Typography } from "@mui/material";
import { HomeFoodHeader } from "./HomeFoodHeader";

import { FoodCard } from "../foodCard/FoodCard";
import { useEffect, useState } from "react";
import { api } from "@/common";
import { toast } from "react-toastify";

type HomeFoodsProps = {
  title: string;
};
export const HomeFoods = (props: HomeFoodsProps) => {
  const { title } = props;
  const [foods, setFoods] = useState([]);

  const getAllFoods = async () => {
    try {
      const { data } = await api.get("/foods/getAll", {
        params: { filter: title.toLowerCase() },
      });

      setFoods(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllFoods();
  }, []);

  return (
    <Stack width={"80%"} maxWidth={1440} gap={5}>
      <HomeFoodHeader title={title} />
      <Stack
        width={"full"}
        flexDirection={"row"}
        gap={3}
        sx={{ display: "grid", gridTemplateColumns: "repeat(4 ,1fr)" }}
      >
        {foods.length === 0 ? (
          <Typography>Loading....</Typography>
        ) : (
          foods.map((food) => {
            const { name, price, newPrice, image, _id } = food;

            return (
              <FoodCard
                key={_id}
                id={_id}
                name={name}
                price={price}
                salePrice={newPrice}
                picture={image}
              />
            );
          })
        )}
      </Stack>
    </Stack>
  );
};
