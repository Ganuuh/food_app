import { Stack } from "@mui/material";
import { HomeFoodHeader } from "./HomeFoodHeader";
import { MenuFoodsProps } from "../menuComps/MenuFoods";
import { FoodCard } from "../foodCard/FoodCard";

export const HomeFoods = (props: MenuFoodsProps) => {
  const { foods } = props;
  return (
    <Stack width={"80%"} maxWidth={1440} gap={5}>
      <HomeFoodHeader title=" Хямдралтай" />
      <Stack
        width={"full"}
        flexDirection={"row"}
        gap={3}
        sx={{ display: "grid", gridTemplateColumns: "repeat(4 ,1fr)" }}
      >
        {foods.map((food) => {
          const { name, price, salePrice, picture } = food;
          return (
            <FoodCard
              name={name}
              price={price}
              salePrice={salePrice}
              picture={picture}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
