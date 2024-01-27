"use client";

import React, { createContext, useContext, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext is out of range");
  }
  return context;
};
