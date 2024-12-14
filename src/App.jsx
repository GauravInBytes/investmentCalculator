import {useState} from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: +value,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!isValidInput && (
        <p style={{ textAlign: "center" }}>
          Please enter a valid input (non-negative numbers)
        </p>
      )}
      {isValidInput && <Result input={userInput} />}
    </>
  );
}

export default App;
