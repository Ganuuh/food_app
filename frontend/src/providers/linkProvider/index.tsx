"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

type LinkProviderType = {
  myLink: string;
};

type LinkProviderProps = {
  children: React.ReactNode;
};

const LinkContext = createContext<LinkProviderType>({} as LinkProviderType);

export const LinkProvider = ({ children }: LinkProviderProps) => {
  const myLink = usePathname();
  return (
    <LinkContext.Provider value={{ myLink }}>{children}</LinkContext.Provider>
  );
};

export const useLink = () => {
  const context = useContext(LinkContext);
  return context;
};
