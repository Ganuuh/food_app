import { Stack } from "@mui/material";
import { FoodCard } from "../foodCard/FoodCard";

export type MenuFoodsProps = {
  foods: { name: string; price: number; picture: string; salePrice?: number }[];
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
        const { name, price, salePrice, picture } = food;
        return (
          <FoodCard
            name={name}
            price={price}
            picture={picture}
            salePrice={salePrice}
          />
        );
      })}
    </Stack>
  );
};
