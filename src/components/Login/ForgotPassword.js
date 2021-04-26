import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import Button from "../UI/Button/Button";

function ForgotPassword(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    validateEmailHandler();
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const submitForgottenPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitForgottenPassword}>
        <TextField
          id="email"
          label="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <div style={{ marginTop: "20px" }}>
          <Button type="submit" disabled={!emailIsValid}>
            Reset password
          </Button>
          <br />
          <Button onClick={props.returnToMeny}>Back</Button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
