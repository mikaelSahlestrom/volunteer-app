import React, { useState, useEffect } from "react";
import Form from "../UI/Form/Form";

import { TextField } from "@material-ui/core";
import Button from "../UI/Button/Button";

function LoginForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loginIsValid, setLoginIsValid] = useState(false);
  

  useEffect(() => {
    const identifier = setTimeout(() => {
        setLoginIsValid(
        enteredUsername.trim().length > 4 && enteredPassword.trim().length > 3
      );
    }, 200);
    return () => {
        clearTimeout(identifier)
      };
    }, [enteredUsername, enteredPassword])

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUsername, enteredPassword);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <Form className={"nothing"}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={loginSubmitHandler}
      >
        <TextField
          id="username"
          label="Username"
          value={enteredUsername}
          onChange={userNameChangeHandler}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <div style={{marginTop: "20px"}}>
          <Button type="submit" disabled={!loginIsValid}>Login</Button>
          <br />
          <Button onClick={props.returnToMeny}>Back</Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
