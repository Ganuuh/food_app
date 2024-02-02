import React from "react";
import { AuthProvider } from "./authProvider";
import { BannerProvider } from "./FoodModalProvider";
import { DrawProvider } from "./drawBarProvider";

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <BannerProvider>
      <AuthProvider>
        <DrawProvider>{children} </DrawProvider>
      </AuthProvider>
    </BannerProvider>
  );
};
