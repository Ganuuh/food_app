import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { BannerFood } from "../FoodModalProvider";
import { DrawBar } from "@/components/headerFooter/HeaderLoginBrawBar";

const DrawContext = createContext<DrawProviderValue>({} as DrawProviderValue);

type DrawProviderValue = {
  isDrawOpen: boolean;
  setDrawOpen: Dispatch<SetStateAction<boolean>>;
  drawFoods: BannerFood[];
  setDrawFoods: Dispatch<SetStateAction<BannerFood[]>>;
};

type DrawProviderProps = {
  children: React.ReactNode;
};
export const DrawProvider = ({ children }: DrawProviderProps) => {
  const [isDrawOpen, setDrawOpen] = useState<boolean>(false);
  const [drawFoods, setDrawFoods] = useState<BannerFood[]>([]);

  // useEffect(() => {
  //   console.log(drawFoods);
  // }, [drawFoods]);
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
