"use client";

import { api } from "@/common";
import { LogOutModal } from "@/components/modalComponents/LogOutModal";
import { useRouter } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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
  setModal: Dispatch<SetStateAction<boolean>>;
  logOutModal: boolean;
  logIn: (values: logIntype) => Promise<void>;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [logOutModal, setModal] = useState(false);
  const [checkToken, setCheckToken] = useState(false);
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
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      setCheckToken((prev) => !prev);
      toast.success("User logged in");
    } catch (error: any) {
      toast.warn(error.response.data.message);
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    setCheckToken((prev) => !prev);
    setIsloggedIn(false);
    toast.success("Logged out!");
    router.push("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsloggedIn(true);
    }
  }, [checkToken]);

  useEffect(() => {
    router.push("/home");
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logIn,
        logOut,
        setModal,
        logOutModal,
      }}
    >
      {children} {logOutModal ? <LogOutModal /> : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
