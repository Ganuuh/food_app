"use client";

import { api } from "@/common";
import { FoodModal } from "@/components/modalComponents/FoodModal";
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

export type BannerFood = {
  name: string;
  image: string;
  ingredient?: string;
  price: number;
  newPrice?: number;
  _id: string;
  __v?: number;
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
  foodFilter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

type LinkProviderProps = {
  children: React.ReactNode;
};

const LinkContext = createContext<LinkProviderType>({} as LinkProviderType);

export const BannerProvider = ({ children }: LinkProviderProps) => {
  const [id, setId] = useState("");
  const [bannerFood, setBFood] = useState<BannerFood | null>(null);
  const [foodModal, setModal] = useState(false);
  const [percentageModal, setPercentageModal] = useState(0);
  const [foodFilter, setFilter] = useState<string>("main course");

  const getFoodById = async (id: string) => {
    try {
      const res = await api.post("/foods/getById", { id: id });

      const { food } = res.data;

      setBFood(food);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    id !== "" ? getFoodById(id) : null;
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
        foodFilter,
        setFilter,
      }}
    >
      {children}
      {foodModal ? <FoodModal /> : null}
    </LinkContext.Provider>
  );
};

export const useFModal = () => {
  const context = useContext(LinkContext);
  return context;
};
