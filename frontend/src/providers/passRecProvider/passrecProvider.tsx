import { api } from "@/common";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

type PassRecType = {
  children: React.ReactNode;
};

type PassValueType = {
  recoveryStep: number;
  setRecoveryStep: Dispatch<SetStateAction<number>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  sendOTP: (email: string) => Promise<void>;
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
  changePassword: (
    password: string,
    email: string,
    otp: string
  ) => Promise<void>;
};

const PassRecContext = createContext<PassValueType>({} as PassValueType);

export const PassrecProvider = ({ children }: PassRecType) => {
  const [recoveryStep, setRecoveryStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const sendOTP = async (email: string) => {
    try {
      const res = await api.post("/sendOtp", { email: email });

      toast.success(res.data.message);

      setRecoveryStep(2);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const changePassword = async (
    password: string,
    email: string,
    otp: string
  ) => {
    try {
      const res = await api.post("/changePassword", {
        password: password,
        email: email,
        otp: otp,
      });

      toast.success(res.data.message);

      router.push("/home");
    } catch (error: any) {
      toast.error(error.response.data.message);
      setRecoveryStep(1);
    }
  };
  return (
    <PassRecContext.Provider
      value={{
        recoveryStep,
        setRecoveryStep,
        email,
        setEmail,
        sendOTP,
        otp,
        setOtp,
        changePassword,
      }}
    >
      {children}
    </PassRecContext.Provider>
  );
};

export const usePass = () => {
  return useContext(PassRecContext);
};
