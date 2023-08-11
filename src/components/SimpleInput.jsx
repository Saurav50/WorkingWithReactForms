import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  //when name is changes on every keystroke
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value !== "") {
      setNameIsValid(true);
    }
  };

  //when input loses focus
  const onBlurHandler = (event) => {
    setNameIsTouched(true);
    // if(event.target.value==="")
    if (event.target.value.trim() === "") {
      setNameIsValid(false);
    }
  };

  //when form is submitted
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };


  const nameInputIsInValid = !nameIsValid && nameIsTouched;

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
          onBlur={onBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">Enter non empty name.</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
