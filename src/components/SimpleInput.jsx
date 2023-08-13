import { useState } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  //name input hook
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valueInputIsInValid: nameInputIsInValid,
    valueChangeHandler: nameChangeHandler,
    valueOnBlurHandler: nameOnBlurHandler,
    resetInputHandler: nameResetInputHandler,
  } = useInput((value) => value.trim() !== "");

  //email input hook
  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueInputIsInValid: emailInputIsInValid,
    valueChangeHandler: emailChangeHandler,
    valueOnBlurHandler: emailOnBlurHandler,
    resetInputHandler: emailResetInputHandler,
  } = useInput((value) => value.includes("@"));

  //CHECKING OVERALL FORM VALIDITY
  let overallFormValidity = false;
  if (nameIsValid && emailIsValid) {
    overallFormValidity = true;
  }

  //when form is submitted
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    nameResetInputHandler();
    emailResetInputHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div
        className={nameInputIsInValid ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name can't be empty.</p>
        )}
      </div>

      <div
        className={
          emailInputIsInValid ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInValid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!overallFormValidity}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
