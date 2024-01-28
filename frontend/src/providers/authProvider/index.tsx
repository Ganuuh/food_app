"use client";

import { LoadingPage } from "@/components/loading";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  isReady: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isReady, setReady] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsloggedIn(true);
    }

    setReady(true);
  }, [check]);
  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, setCheck, check }}>
      {isReady ? children : <LoadingPage />}
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
