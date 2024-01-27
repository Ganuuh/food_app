import React from "react";
import { AuthProvider } from "./authProvider";
import { LinkProvider } from "./linkProvider";

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <LinkProvider>
      <AuthProvider>{children}</AuthProvider>
    </LinkProvider>
  );
};
