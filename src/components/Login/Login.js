import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../Icons/Logo.svg";
import Button from "../UI/Button";

import { TextField } from "@material-ui/core";
import SignUpForm from "./SignUpForm";

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

  let isAdmin = false;

  const controlCredentials = () => {
    for (const currentUser of props.currentUsers) {
      if (
        currentUser.name === enteredUsername &&
        currentUser.password === enteredPassword
      ) {
        isAdmin = currentUser.admin;
        return true;
      }
    }
    return false;
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    if (
      (enteredUsername.trim().length === 0 &&
        enteredPassword.trim().length === 0) ||
      !controlCredentials()
    ) {
      setIsValid(false);
      return;
    }

    props.login(enteredUsername, enteredPassword, isAdmin);
  };

  const SignUp = () => {
    setShowSignUp(true);
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

  const createNewUserHandler = () => {
    setShowSignUp(false)
  }

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
  } 

  return (
    <div className={styles.login}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <h1>VolunteerApp</h1>
      {!isValid && <p>Please enter username and password</p>}
      {!showSignUp && loginContent}
      {showSignUp && <SignUpForm createNewUser={createNewUserHandler}/>}
    </div>
  );
}

export default Login;
