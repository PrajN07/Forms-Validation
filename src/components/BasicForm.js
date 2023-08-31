
import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '' ;
const emailNotEmpty = value => value.includes('@');
const BasicForm = () => {

  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    isValid: validName,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty);
  
  const {
      value: lastName,
      hasError: lnameInputIsInvalid,
      isValid: validLname,
      valueBlurHandler: lnameBlurHandler,
      valueChangeHandler: lnameChangeHandler,
      reset : resetLnameInput
  } = useInput(isNotEmpty);
  
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    isValid: validEmail,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput
  } = useInput(emailNotEmpty);

  let formValid = false;
  if(validName && validEmail && validLname){
    formValid = true;
  }
  


  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (!validName) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetLnameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
 
    const LnameInputClasses = lnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
 
    const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputIsInvalid && (
            <p className="error-text">No name has been entered</p>
          )}
        </div>
        <div className={LnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input 
          type="text" 
          id="lname"
          value={lastName}
          onChange={lnameChangeHandler}
          onBlur={lnameBlurHandler}
          
          />
          {lnameInputIsInvalid && <p className='error-text'>Please enter a last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
         type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}

         />
         {emailInputIsInvalid && <p className="error-text">Enter a Valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
