import ModalPortal from "./ModalPortal";
import styles from "./WinnerModal.module.css";

import { IoMdClose } from "react-icons/io";

interface IWinnerModal {
  onClose: () => void;
}

const WinnerModal = ({ onClose }: IWinnerModal) => {
  return (
    <ModalPortal onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal-wrapper"]}
      >
        <div className={styles["header-container"]}>
          <div>
            <h3 className={styles.title}>Билет 1</h3>
            <h3 className={styles.subtitle}>Ого, вы выиграли. Поздравляем!</h3>
          </div>
          <button onClick={onClose} className={styles["close-btn"]}>
            <IoMdClose />
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default WinnerModal;
