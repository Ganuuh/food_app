import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type PassRecType = {
  children: React.ReactNode;
};

type PassValueType = {
  recoveryStep: number;
  setRecoveryStep: Dispatch<SetStateAction<number>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const PassRecContext = createContext<PassValueType>({} as PassValueType);

export const PassrecProvider = ({ children }: PassRecType) => {
  const [recoveryStep, setRecoveryStep] = useState(0);
  const [email, setEmail] = useState("");
  return (
    <PassRecContext.Provider
      value={{ recoveryStep, setRecoveryStep, email, setEmail }}
    >
      {children}
    </PassRecContext.Provider>
  );
};

export const usePass = () => {
  return useContext(PassRecContext);
};
