"use client";

import { api } from "@/common";
import { useRouter } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

type AuthProviderProps = {
  children: React.ReactNode;
};
type logIntype = {
  email: string;
  password: string;
};
type SignUpType = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  logIn: (values: logIntype) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

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
      router.push("/home");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const logIn = async (values: logIntype) => {
    try {
      const res = await api.post("/logIn", {
        email: values.email,
        password: values.password,
      });
      const { token, name } = res.data;
      setUserName(name);
      setIsloggedIn(true);
      toast.success("User logged in");
    } catch (error: any) {
      toast.warn(error.response.data.message);
    }
  };
  const logOut = async (id: string) => {};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        setUserName,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
