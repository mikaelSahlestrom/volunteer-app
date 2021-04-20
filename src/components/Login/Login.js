import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../Icons/Logo.svg";
import Button from "../UI/Button";

import { TextField } from "@material-ui/core";

function Login(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const cancel = () => {
    setShowLogin(false);
    setShowSignUp(false);
    setIsValid(true);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 &&
      enteredPassword.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    if (enteredUsername.trim() === "admin") {
      props.onLogin(true);
      return;
    }
    // Todo: check if credentials is ok
    props.onLogin();
  };

  const SignUp = () => {
    setShowSignUp(true);
  };

  const signUpNewUserHandler = () => {
    setShowSignUp(false);
  };

  const EnterCredentials = () => {
    setShowLogin(true);
  };

  const userNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredPassword(event.target.value);
  };

  let loginContent = (
    <div className={styles["login-buttons"]}>
      <Button onClick={EnterCredentials}>Login</Button>
      <br />
      <Button onClick={SignUp}>Sign up</Button>
      <br />
      <br />
      <p
        className={styles["password-link"]}
        onClick={() => console.log("take me to passwords")}
      >
        Forgot your password?
      </p>
    </div>
  );

  if (showLogin) {
    loginContent = (
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <form className={styles.form} noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            onChange={userNameChangeHandler}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            onChange={passwordChangeHandler}
          />
        </form>
        <Button onClick={loginSubmitHandler} type="submit">
          Login
        </Button>
        <Button onClick={cancel}>Back</Button>
      </div>
    );
  } else if (showSignUp) {
    loginContent = (
      <div className="input">
        <TextField id="signup-name" label="Full Name" />
        <br />
        <TextField id="signup-username" label="Username" />
        <br />
        <TextField id="signup-password" label="Password" />
        <br />
        <TextField id="signup-password-repeat" label="Repeat Password" />
        <br />
        <br />
        <Button onClick={signUpNewUserHandler}>Submit</Button>
        <Button onClick={cancel}>Back</Button>
      </div>
    );
  }

  return (
    <div className={styles.login}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <h1>VolunteerApp</h1>
      {!isValid && <p>Please enter username and password</p>}
      {loginContent}
    </div>
  );
}

export default Login;
