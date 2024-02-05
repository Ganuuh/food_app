import { Stack } from "@mui/material";
import { FoodCard } from "../foodCard/FoodCard";
import { BannerFood } from "@/providers/FoodModalProvider";

export type MenuFoodsProps = {
  foods: BannerFood[];
};
export const MenuFoods = (props: MenuFoodsProps) => {
  const { foods } = props;
  return (
    <Stack
      gap={3}
      width={"80%"}
      maxWidth={1440}
      sx={{ display: "grid", gridTemplateColumns: "repeat(4 , 1fr)" }}
    >
      {foods.map((food) => {
        const { name, price, newPrice, _id, image } = food;
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
      })}
    </Stack>
  );
};
