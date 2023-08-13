import useInput from "../Hooks/use-input";
const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    valueInputIsInValid: firstNameInputIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    valueOnBlurHandler: firstNameOnBlurHandler,
    resetInputHandler: firstNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    valueIsValid: LastNameIsValid,
    valueInputIsInValid: LastNameInputIsInvalid,
    valueChangeHandler: LastNameChangeHandler,
    valueOnBlurHandler: LastNameOnBlurHandler,
    resetInputHandler: LastNameResetHandler,
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

  let overallFormValidity = false;
  if (firstNameIsValid && LastNameIsValid && emailIsValid) {
    overallFormValidity = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !LastNameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    firstNameResetHandler();
    LastNameResetHandler();
    emailResetInputHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div
          className={
            firstNameInputIsInvalid ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">First Name Can't be empty.</p>
          )}
        </div>
        <div
          className={
            LastNameInputIsInvalid ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={LastNameChangeHandler}
            onBlur={LastNameOnBlurHandler}
            value={enteredLastName}
          />
          {LastNameInputIsInvalid && (
            <p className="error-text">Last Name Can't be empty.</p>
          )}
        </div>
      </div>
      <div
        className={
          emailInputIsInValid ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
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

export default BasicForm;
