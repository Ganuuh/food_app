import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { BannerFood } from "../FoodModalProvider";
import { DrawBar } from "@/components/headerFooter/HeaderLoginBrawBar";
import { api } from "@/common";
import { toast } from "react-toastify";

const DrawContext = createContext<DrawProviderValue>({} as DrawProviderValue);

type DrawProviderValue = {
  isDrawOpen: boolean;
  setDrawOpen: Dispatch<SetStateAction<boolean>>;
  drawFoods: DrawfoodsType[];
  setDrawFoods: Dispatch<SetStateAction<DrawfoodsType[]>>;
  getCardFood: () => Promise<void>;
  drawFoodList: DrawListType[];
  price: number;
};

export type DrawfoodsType = {
  id: string;
  userId: string;
  quantity: number;
};

export type DrawListType = {
  food: BannerFood;
  quantity: number;
};

type DrawProviderProps = {
  children: React.ReactNode;
};
export const DrawProvider = ({ children }: DrawProviderProps) => {
  const [isDrawOpen, setDrawOpen] = useState<boolean>(false);
  const [drawFoods, setDrawFoods] = useState<DrawfoodsType[]>([]);
  const [drawFoodList, setDrawList] = useState<DrawListType[]>([]);
  const [price, setPrice] = useState<number>(0);

  const getCardFood = async () => {
    try {
      const res = await api.get("/foods/getCardFood", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setDrawFoods(res.data);

      drawFoods.forEach(async (each) => {
        try {
          const res = await api.post("/foods/getById", { id: each.id });

          const { food } = res.data;

          setPrice((prev) => prev + food.price * each.quantity);

          setDrawList((prev) => [
            ...prev,
            { food: food, quantity: each.quantity },
          ]);
        } catch (error) {
          console.log(error);
        }
      });

      console.log(drawFoodList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrawContext.Provider
      value={{
        isDrawOpen,
        setDrawOpen,
        drawFoods,
        setDrawFoods,
        getCardFood,
        drawFoodList,
        price,
      }}
    >
      {children}
      {isDrawOpen ? <DrawBar /> : null}
    </DrawContext.Provider>
  );
};

export const useDraw = () => {
  return useContext(DrawContext);
};
