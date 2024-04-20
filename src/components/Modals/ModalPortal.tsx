import { useMemo } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalPortal.module.css";

interface IModalPortal {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalPortal = ({ onClose, children }: IModalPortal) => {
  const element = useMemo(
    () => document.getElementById("modals") as HTMLElement,
    []
  );

  return createPortal(
    <div onClick={onClose} className={styles.backdrop}>
      {children}
    </div>,
    element
  );
};

export default ModalPortal;
