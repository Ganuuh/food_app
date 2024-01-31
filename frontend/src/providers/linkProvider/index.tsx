"use client";

import { api } from "@/common";
import { usePathname } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { number } from "yup";

export type BannerFood = {
  name: string;
  image: string;
  ingredient?: string;
  price: number;
  newPrice?: number;
};

type LinkProviderType = {
  myLink: string;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  bannerFood: BannerFood | null;
  setBFood: Dispatch<SetStateAction<BannerFood | null>>;
  foodModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  percentageModal: number;
  setPercentageModal: Dispatch<SetStateAction<number>>;
};

type LinkProviderProps = {
  children: React.ReactNode;
};

const LinkContext = createContext<LinkProviderType>({} as LinkProviderType);

export const LinkProvider = ({ children }: LinkProviderProps) => {
  const [id, setId] = useState("");
  const [bannerFood, setBFood] = useState<BannerFood | null>({
    name: "Yoghurt  ",
    image: "food.png",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
    price: 20000,
    newPrice: 17000,
  });
  const [foodModal, setModal] = useState(false);
  const [percentageModal, setPercentageModal] = useState(0);

  const getFoodById = async () => {
    try {
      const res = await api.post("/foods/getById", { id: id });

      const { food } = res.data;

      console.log(food);

      setBFood(food);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getFoodById();
  }, [id]);
  const myLink = usePathname();
  return (
    <LinkContext.Provider
      value={{
        myLink,
        id,
        setId,
        bannerFood,
        setBFood,
        foodModal,
        setModal,
        percentageModal,
        setPercentageModal,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export const useLink = () => {
  const context = useContext(LinkContext);
  return context;
};
