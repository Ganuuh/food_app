import { Stack, Typography } from "@mui/material";
import { HomeFoodHeader } from "./HomeFoodHeader";

import { FoodCard } from "../foodCard/FoodCard";

type HomeFoodsProps = {
  foods: {
    name: string;
    image: string;
    ingredient?: string;
    price: number;
    newPrice?: number;
    _id: string;
  }[];
  title: string;
};
export const HomeFoods = (props: HomeFoodsProps) => {
  const { foods, title } = props;
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
          <Typography>Baijeee sda</Typography>
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
