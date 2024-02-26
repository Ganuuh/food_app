"use client";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuFoodsProps } from "../menuComps/MenuFoods";
import { api } from "@/common";
import { toast } from "react-toastify";
import { LoadingPage } from "../loading";
import { BannerFood } from "@/providers/FoodModalProvider";
import { FoodCard } from "../foodCard/FoodCard";

export const AdminFoods = (props: { title: string }) => {
  const { title } = props;
  const [adminfoods, setAdminFood] = useState<BannerFood[] | null>(null);
  const getAllFoods = async () => {
    try {
      const { data } = await api.get("/foods/getAll", {
        params: { filter: title.toLowerCase() },
      });

      setAdminFood(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllFoods();
  }, [title]);
  return (
    <Stack
      width={"100%"}
      padding={5}
      bgcolor={"#F4F4F4"}
      borderRadius={"15px"}
      gap={4}
    >
      {/* Header */}
      <Stack
        width={"100%"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize={22} fontWeight={700}>
          Breakfast
        </Typography>
        <Typography
          fontSize={16}
          sx={{ cursor: "pointer" }}
          padding={"8px 12px"}
          bgcolor={"primary.main"}
          color={"primary.contrastText"}
          borderRadius={"4px"}
        >
          Add new food
        </Typography>
      </Stack>
      {/* Foods */}
      <Stack
        width={"100%"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        {!adminfoods ? (
          <LoadingPage />
        ) : (
          adminfoods.map((food) => {
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
