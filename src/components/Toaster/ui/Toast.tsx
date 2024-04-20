import { useRef, useEffect } from "react";

import { useToasterContext } from "../lib/context";
import { ToastType } from "../lib/types";
import styles from "./Toast.module.css";

import { MdError } from "react-icons/md";

const Toast = ({ id, subtitle }: ToastType) => {
  const timeoutRef = useRef<number>();
  const { deleteToast } = useToasterContext();

  useEffect(() => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        deleteToast(id);
      }, 5000);

      return () => {
        clearInterval(timeoutRef.current);
        timeoutRef.current = undefined;
      };
    }
  }, []);

  return (
    <div className={styles.toast}>
      <MdError className={styles["error-icon"]} />
      <div>
        <h4 className={styles.title}>Error</h4>
        <h5 className={styles.subtitle}>{subtitle}</h5>
      </div>
    </div>
  );
};

export default Toast;
