"use client";

import { api } from "@/common";
import { LoadingPage } from "@/components/loading";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  isReady: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isReady, setReady] = useState(false);
  const [check, setCheck] = useState(false);
  const router = useRouter();

  type SignUpType = {
    name: string;
    email: string;
    password: string;
    address: string;
  };

  const signUp = async (values: SignUpType) => {
    try {
      const res = await api.post("/signUp", {
        name: values.name,
        email: values.email,
        password: values.password,
        address: values.address,
      });
      const { token } = res.data;
      localStorage.setItem("token", token);
      toast.success("User created successfully");
      setCheck((prev) => !prev);
      router.push("/home");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  type logIntype = {
    email: string;
    password: string;
  };
  const logIn = async (values: logIntype) => {
    try {
      const res = await api.post("/logIn", {
        email: values.email,
        password: values.password,
      });
      const { token } = res.data;
      localStorage.setItem("token", token);
      toast.success("User logged in");
      setCheck((prev) => !prev);
    } catch (error: any) {
      toast.warn(error.response.data.message);
    }
  };
  const logOut = async (id: string) => {};
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
  return context;
};
