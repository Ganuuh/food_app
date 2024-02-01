import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { BannerFood } from "../linkProvider";

const DrawContext = createContext<DrawProviderValue>({} as DrawProviderValue);

type DrawProviderValue = {
  isDrawOpen: boolean;
  setDrawOpen: Dispatch<SetStateAction<boolean>>;
  drawFoods: BannerFood[] | null;
  setDrawFoods: Dispatch<SetStateAction<null | BannerFood[]>>;
};

type DrawProviderProps = {
  children: React.ReactNode;
};
export const DrawProvider = ({ children }: DrawProviderProps) => {
  const [isDrawOpen, setDrawOpen] = useState(false);
  const [drawFoods, setDrawFoods] = useState(null);
  return (
    <DrawContext.Provider
      value={{ isDrawOpen, setDrawOpen, drawFoods, setDrawFoods }}
    >
      {children}
    </DrawContext.Provider>
  );
};

export const useDraw = () => {
  return useContext(DrawContext);
};
