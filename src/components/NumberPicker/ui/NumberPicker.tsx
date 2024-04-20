import { useState } from "react";
import styles from "./NumberPicker.module.css";
import { FaBox } from "react-icons/fa6";

import { getRes, randomUniqueNum } from "../lib/functions";
import WinnerModal from "../../Modals/WinnerModal";

import { useMutation } from "../lib/useMutation";
import { useToasterContext } from "../../Toaster/lib/context";
import LoaderSpinner from "../../ui/LoaderSpinner";
import FirstField from "./FirstField";
import SecondField from "./SecondField";
import { makeApiRequest } from "../api/checkResults";

const NumberPicker = () => {
  const [firstChosen, setFirstChosen] = useState<number[]>([]);
  const [didUserWin, setDidUserWin] = useState(false);
  const [secondChosen, setSecondChosen] = useState<number[]>([]);
  const { addToast } = useToasterContext();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => conclude(),
    onError: () =>
      addToast({ subtitle: "Something bad happened", type: "error" })
  });

  const onRandom = () => {
    setFirstChosen(randomUniqueNum(19, 8));
    setSecondChosen(randomUniqueNum(3, 1));
  };

  const conclude = async () => {
    const win = getRes(firstChosen, secondChosen);

    const res = await makeApiRequest({
      selectedNumbers: {
        firstField: firstChosen,
        secondField: secondChosen
      },
      isTicketWon: win
    });
    return res;
  };

  return (
    <div className={styles["card-wrapper"]}>
      {didUserWin && <WinnerModal onClose={() => setDidUserWin(false)} />}{" "}
      <FirstField
        chosenValues={firstChosen}
        setChosenValues={setFirstChosen}
        onRandom={onRandom}
      />
      <SecondField
        chosenValues={secondChosen}
        setChosenValues={setSecondChosen}
      />
      <button
        disabled={isLoading || [...firstChosen, ...secondChosen].length < 1}
        className={styles["show-btn"]}
        onClick={mutate}
      >
        {isLoading ? <LoaderSpinner /> : <FaBox className={styles.icon} />}
        Посмотреть результаты
      </button>
    </div>
  );
};

export default NumberPicker;
