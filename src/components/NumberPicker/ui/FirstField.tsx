import { Dispatch, SetStateAction } from "react";

import { FaCheck } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";

import styles from "./NumberPicker.module.css";
import { firstFields } from "../lib/constants";

interface IFirstField {
  chosenValues: number[];
  setChosenValues: Dispatch<SetStateAction<number[]>>;
  onRandom: () => void;
}

const FirstField = ({
  chosenValues,
  setChosenValues,
  onRandom
}: IFirstField) => {
  const onChoose = (v: number) => {
    if (!chosenValues.includes(v)) {
      setChosenValues((p) => p.concat(v));
    } else {
      setChosenValues((p) => p.filter((n) => n !== v));
    }
  };

  return (
    <div className="">
      <div className={styles["field-header"]}>
        <div className={styles["field-title__container"]}>
          <span className={styles["fields-title"]}>Поле 1</span>
          <span className={styles["fields-subtitle"]}>Отметьте 8 чисел</span>
          {chosenValues.length >= 8 && (
            <FaCheck className={styles["check-icon"]} />
          )}
        </div>
        <button className={styles["magic-btn"]} onClick={onRandom}>
          <BsMagic />
        </button>
      </div>
      <div className={styles["fields-container"]}>
        {firstFields.map((v) => (
          <button
            key={v}
            className={
              chosenValues.includes(v)
                ? styles.field + " " + styles.active
                : styles.field
            }
            onClick={() => onChoose(v)}
          >
            {chosenValues.includes(v) && (
              <div className={styles["field-anim"]}></div>
            )}
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstField;
