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
  addFoodList: (id: string, quantity: number) => void;
};

export type DrawfoodsType = {
  food: BannerFood;
  quantity: number;
};

type DrawProviderProps = {
  children: React.ReactNode;
};
export const DrawProvider = ({ children }: DrawProviderProps) => {
  const [isDrawOpen, setDrawOpen] = useState<boolean>(false);
  const [drawFoods, setDrawFoods] = useState<DrawfoodsType[]>([]);
  const addFoodList = async (id: string, quantity: number) => {
    try {
      const res = await api.post(
        "/addCardFood",
        { id: id, quantity: quantity },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      toast.success(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrawContext.Provider
      value={{ isDrawOpen, setDrawOpen, drawFoods, setDrawFoods, addFoodList }}
    >
      {children}
      {isDrawOpen ? <DrawBar /> : null}
    </DrawContext.Provider>
  );
};

export const useDraw = () => {
  return useContext(DrawContext);
};
