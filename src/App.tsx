import NumberPicker from "./components/NumberPicker/ui/NumberPicker";

import styles from "./App.module.css";
import Toaster from "./components/Toaster/ui/Toaster";

const App = () => {
  return (
    <div className={styles.main}>
      <NumberPicker />
      <Toaster />
    </div>
  );
};

export default App;
