import { useState } from "react";
import Age from "./components/Age";
import DateInput from "./components/DateInput";
import Divider from "./components/Divider";
import "./styles/css/style.css";
import "./styles/sass/main.scss";

function App() {
  const [ageInput, setAgeInput] = useState({ day: "", month: "", year: "" });
  return (
    <main className="App">
      <div className="age-calculator-wrapper">
        <DateInput ageInput={ageInput} setAgeInput={setAgeInput} />
        <Divider />
        <Age />
      </div>
    </main>
  );
}

export default App;
