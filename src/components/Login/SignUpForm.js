import React from "react";
import { TextField } from "@material-ui/core";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";

function SignUpForm(props) {
  const signUpNewUserHandler = () => {
    props.createNewUser()
    ;
  };

  return (
    <Form>
      <TextField id="signup-name" label="Full Name" />
      <br />
      <TextField id="signup-username" label="Username" />
      <br />
      <TextField id="signup-password" label="Password" />
      <br />
      <TextField id="signup-password-repeat" label="Repeat Password" />
      <br />
      <br />
      <Button onClick={signUpNewUserHandler} disabled={true}>Submit</Button>
      <br/>
      <Button onClick={props.returnToMeny}>Back</Button>
    </Form>
  );
}

export default SignUpForm;
