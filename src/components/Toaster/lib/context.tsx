import { createContext, useContext, useState } from "react";
import { CreateToastReq, ToastType } from "./types";

type ToasterContext = {
  toasts: ToastType[];
  addToast: (req: CreateToastReq) => void;
  deleteToast: (id: string) => void;
};

const ToasterContext = createContext({} as ToasterContext);

export const ToasterProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (req: CreateToastReq) => {
    const toast = {
      id: self.crypto.randomUUID(),
      ...req
    };

    setToasts((p) => p.concat(toast));
  };

  const deleteToast = (id: string) => {
    setToasts((p) => p.filter((v) => v.id !== id));
  };

  return (
    <ToasterContext.Provider
      value={{ toasts: toasts, addToast: addToast, deleteToast: deleteToast }}
    >
      {children}
    </ToasterContext.Provider>
  );
};

export const useToasterContext = () => {
  const ctx = useContext(ToasterContext);

  if (!ctx) {
    throw Error(
      "useToasterContext must be inside of a ToasterContext.Provider"
    );
  }

  return ctx;
};
