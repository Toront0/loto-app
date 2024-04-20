import { useToasterContext } from "../lib/context";
import Toast from "./Toast";
import styles from "./Toaster.module.css";

const Toaster = () => {
  const { toasts } = useToasterContext();

  return (
    <div className={styles.container}>
      {toasts.map((v) => (
        <Toast key={v.id} id={v.id} type={v.type} subtitle={v.subtitle} />
      ))}
    </div>
  );
};

export default Toaster;
