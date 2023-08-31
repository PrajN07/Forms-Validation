import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: validName,
    hasError: nameInputIsInvalid,
    valueChangeHandler: changeNameHandler,
    valueBlurHandler: blurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: validEmail,
    hasError: emailInputIsInvalid,
    valueChangeHandler: changeEmailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formValid = false;

  if (validName && validEmail) {
    formValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();

    if (!validName) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          onBlur={blurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">No Name has been entered</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={changeEmailHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">No Email has been entered</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
