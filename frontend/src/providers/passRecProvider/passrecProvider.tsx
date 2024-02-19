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
  otp: number;
  setOtp: Dispatch<SetStateAction<number>>;
  changePassword: (password: string, email: string) => Promise<void>;
};

const PassRecContext = createContext<PassValueType>({} as PassValueType);

export const PassrecProvider = ({ children }: PassRecType) => {
  const [recoveryStep, setRecoveryStep] = useState(1);
  const [otp, setOtp] = useState(0);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const sendOTP = async (email: string) => {
    try {
      const res = await api.post("/sendOtp", { email: email });

      toast.success(res.data.message);

      setOtp(res.data.otp);

      setRecoveryStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (password: string, email: string) => {
    try {
      const res = await api.post("/changePassword", {
        password: password,
        email: email,
      });

      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
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
