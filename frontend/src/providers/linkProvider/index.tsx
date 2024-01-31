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

export type BannerFood = {
  name: string;
  image: string;
  ingredient?: string;
  price: number;
  newPrice?: number;
  _id?: string;
};

type OrderList = { id: string; quantity: number };

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
  bucketList: OrderList[] | null;
  setBucketList: Dispatch<SetStateAction<OrderList[] | null>>;
  bucketFoods: BannerFood[] | null;
  setBucketFoods: Dispatch<SetStateAction<BannerFood[] | null>>;
};

type LinkProviderProps = {
  children: React.ReactNode;
};

const LinkContext = createContext<LinkProviderType>({} as LinkProviderType);

export const LinkProvider = ({ children }: LinkProviderProps) => {
  const [id, setId] = useState("");
  const [bannerFood, setBFood] = useState<BannerFood | null>(null);
  const [foodModal, setModal] = useState(false);
  const [percentageModal, setPercentageModal] = useState(0);
  const [bucketList, setBucketList] = useState<OrderList[] | null>(null);
  const [bucketFoods, setBucketFoods] = useState<BannerFood[] | null>(null);

  const getFoodById = async (id: string) => {
    try {
      const res = await api.post("/foods/getById", { id: id });

      const { food } = res.data;

      console.log(food);

      setBFood(food);

      return food;
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    id !== "" ? getFoodById(id) : null;
  }, [id]);

  useEffect(() => {
    bucketList?.forEach((each) => {
      const food = getFoodById(each.id);
      setBucketFoods(bucketFoods?.push(food));
    });
  }, [bucketList]);

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
        bucketList,
        setBucketList,
        bucketFoods,
        setBucketFoods,
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
