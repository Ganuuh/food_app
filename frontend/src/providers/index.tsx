import React from "react";
import { AuthProvider } from "./authProvider";
import { BannerProvider } from "./FoodModalProvider";
import { DrawProvider } from "./drawBarProvider";
import { PassrecProvider } from "./passRecProvider/passrecProvider";

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <BannerProvider>
      <AuthProvider>
        <PassrecProvider>
          <DrawProvider>{children} </DrawProvider>
        </PassrecProvider>
      </AuthProvider>
    </BannerProvider>
  );
};
