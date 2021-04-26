import React, { useState, useEffect } from "react";
import { TextField, InputLabel, MenuItem, Select } from "@material-ui/core";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import styles from "./SignUpForm.module.css";

function SignUpForm(props) {
  const [admin, setAdmin] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordCheck, setEnteredPasswordCheck] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [usernameIsValid, setUsernameIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [newUserIsValid, setNewUserIsValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      setNewUserIsValid(
        enteredUsername.trim().length > 4 &&
          enteredPassword.trim().length > 3 &&
          enteredPassword === enteredPasswordCheck
      );
    }, 200);
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredUsername, enteredPassword, enteredPasswordCheck]);

  const handleChange = (event) => {
    setAdmin(event.target.value);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    validateUsernameHandler();
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    validateEmailHandler();
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordCheckChangeHandler = (event) => {
    setEnteredPasswordCheck(event.target.value);
    validatePasswordHandler()
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
    if (!emailIsValid) {
      setErrorMessage("Must enter a propper email adress");
    } else {
      setErrorMessage("");
    }
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.trim().length > 4);
    if (!usernameIsValid) {
      setErrorMessage("Username must be longer than 4 letters");
    } else {
      setErrorMessage("");
    }
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 3);
    if (!passwordIsValid) {
      setErrorMessage("Password must be longer than 3 letters");
    } else {
      setErrorMessage("");
    }
  };

  const submitNewUserHandler = (event) => {
    event.preventDefault();
    props.createNewUser(enteredUsername, enteredPassword, admin);
  };

  return (
    <Form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={submitNewUserHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <TextField
            id="signup-email"
            label="Email adress"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            usernameIsValid === false ? styles.invalid : ""
          }`}
        >
          <TextField
            id="signup-username"
            label="Username"
            value={enteredUsername}
            onChange={userNameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <TextField
            id="signup-password"
            label="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <TextField
            id="signup-password-repeat"
            label="Repeat Password"
            value={enteredPasswordCheck}
            onChange={passwordCheckChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <InputLabel id="admin-simple-select-label">Role</InputLabel>
          <Select
            labelId="admin-simple-select-label"
            id="admin-simple-select"
            value={admin}
            onChange={handleChange}
          >
            <MenuItem value={true}>Organizer</MenuItem>
            <MenuItem value={false}>Volunteer</MenuItem>
          </Select>
        </div>
        <br />
        <Button type="submit" disabled={!newUserIsValid}>
          Submit
        </Button>
        <br />
        <Button onClick={props.returnToMeny}>Back</Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
