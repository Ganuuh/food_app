import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { BannerFood } from "../FoodModalProvider";
import { DrawBar } from "@/components/headerFooter/HeaderLoginBrawBar";

const DrawContext = createContext<DrawProviderValue>({} as DrawProviderValue);

type DrawProviderValue = {
  isDrawOpen: boolean;
  setDrawOpen: Dispatch<SetStateAction<boolean>>;
  drawFoods: DrawfoodsType[];
  setDrawFoods: Dispatch<SetStateAction<DrawfoodsType[]>>;
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

  return (
    <DrawContext.Provider
      value={{ isDrawOpen, setDrawOpen, drawFoods, setDrawFoods }}
    >
      {children}
      {isDrawOpen ? <DrawBar /> : null}
    </DrawContext.Provider>
  );
};

export const useDraw = () => {
  return useContext(DrawContext);
};
