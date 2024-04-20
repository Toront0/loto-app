import { Dispatch, SetStateAction } from "react";
import { secondsFields } from "../lib/constants";
import styles from "./NumberPicker.module.css";

import { FaCheck } from "react-icons/fa";

interface ISecondField {
  chosenValues: number[];
  setChosenValues: Dispatch<SetStateAction<number[]>>;
}
const SecondField = ({ chosenValues, setChosenValues }: ISecondField) => {
  const onChoose = (v: number) => {
    if (!chosenValues.includes(v)) {
      setChosenValues((p) => p.concat(v));
    } else {
      setChosenValues((p) => p.filter((n) => n !== v));
    }
  };

  return (
    <div className={styles["second-fields"]}>
      <div className={styles["field-title__container"]}>
        <span className={styles["fields-title"]}>Поле 2</span>
        <span className={styles["fields-subtitle"]}>Отметьте 1 число</span>

        {chosenValues.length === 1 && (
          <FaCheck className={styles["check-icon"]} />
        )}
      </div>
      <div className={styles["fields-container"]}>
        {secondsFields.map((v) => (
          <button
            key={v}
            className={
              chosenValues.includes(v)
                ? styles.field + " " + styles.active
                : styles.field
            }
            onClick={() => onChoose(v)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecondField;
