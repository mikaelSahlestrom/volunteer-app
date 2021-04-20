import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../Icons/Logo.svg";
import Button from "../UI/Button";

function Login(props) {
  const [enterCredentials, setenterCredentials] = useState(false);
  const [signUp, setsignUp] = useState(false)

  const cancel = () => {
    setenterCredentials(false);
    setsignUp(false)
  };

  const onLogin = () => {
      // Todo: Set an admin right with admin passwords
    props.onLogin();
  };

  const SignUp = () => {
    setsignUp(true)
  };

  const EnterCredentials = () => {
    setenterCredentials(true)
  };

  let loginContent = (
    <div className={styles["login-buttons"]}>
      <Button onClick={EnterCredentials}>Login</Button>
      <br />
      <Button onClick={SignUp}>Sign up</Button>
      <br />
      <br />
      <p href="https://google.se">Forgot your password?</p>
    </div>
  );

  if(enterCredentials){
      loginContent = 
      <div className="input">
          <input type='text' placeholder='user name'/>
          <br />
          <input type='text' placeholder='password'/>
          <br/>
          <br/>
          <Button onClick={onLogin}>Submit</Button>
          <Button onClick={cancel}>Back</Button>
      </div>
  } else if(signUp){
      loginContent = 
      <div className="input">
          <input type='text' placeholder='full name'/>
          <br />
          <input type='text' placeholder='user name'/>
          <br />
          <input type='text' placeholder='password'/>
          <br/>
          <input type='text' placeholder='repeat password'/>
          <br/>
          <br/>
          <Button onClick={onLogin}>Submit</Button>
          <Button onClick={cancel}>Back</Button>
      </div>
  }

  return (
    <div className={styles.login}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <h1>VolunteerApp</h1>
      {loginContent}
    </div>
  );
}

export default Login;
