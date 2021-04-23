import React, { useState, useEffect } from "react";
import { TextField, InputLabel, MenuItem, Select } from "@material-ui/core";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";

function SignUpForm(props) {
  const [admin, setAdmin] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordCheck, setEnteredPasswordCheck] = useState("");
  const [newUserIsValid, setNewUserIsValid] = useState(false);

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
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordCheckChangeHandler = (event) => {
    setEnteredPasswordCheck(event.target.value);
  };

  const submitNewUserHandler = (event) => {
    event.preventDefault();
    props.createNewUser(enteredUsername, enteredPassword, admin);
  };

  return (
    <Form>
      <form onSubmit={submitNewUserHandler}>
        <TextField
          id="signup-username"
          label="Username"
          value={enteredUsername}
          onChange={userNameChangeHandler}
        />
        <br />
        <TextField
          id="signup-password"
          label="Password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <br />
        <TextField
          id="signup-password-repeat"
          label="Repeat Password"
          value={enteredPasswordCheck}
          onChange={passwordCheckChangeHandler}
        />
        <br />
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
