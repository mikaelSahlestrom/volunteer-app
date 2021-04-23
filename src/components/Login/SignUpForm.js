import React from "react";
import { TextField } from "@material-ui/core";
import Button from "../UI/Button";

function SignUpForm(props) {
  const signUpNewUserHandler = () => {
    props.createNewUser()
    ;
  };

  const back = () => {
    console.log("go back")
  }
  return (
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
      <Button onClick={back}>Back</Button>
    </div>
  );
}

export default SignUpForm;
