import React from "react";
import { useState } from "react";
const useInput = (validityChecker) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  //value validitiy check
  const valueIsValid = validityChecker(enteredValue);
  const valueInputIsInValid = !valueIsValid && valueIsTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    // console.log(event.target.value);
  };
  const valueOnBlurHandler = (event) => {
    setValueIsTouched(true);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };
  return {
    enteredValue: enteredValue,
    valueIsValid: valueIsValid,
    valueInputIsInValid: valueInputIsInValid,
    valueChangeHandler: valueChangeHandler,
    valueOnBlurHandler: valueOnBlurHandler,
    resetInputHandler: resetInputHandler,
  };
};
export default useInput;
