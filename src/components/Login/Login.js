import React from "react";
import styles from "./Login.module.css";
import logo from "../../Icons/Logo.svg";
import Button from "../UI/Button";

function Login(props) {
    const onLogin = () => {
        console.log('log me in!')
        props.onLogin();
    }

    const SignIn = () => {
        console.log('sign me in')
    }

  return (
    <div className={styles.login}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <h1>VolunteerApp</h1>
      <div className={styles['login-buttons']}>
        <Button onClick={onLogin}>Login</Button>
        <br />
        <Button onClick={SignIn} >Sign up</Button>
      </div>
      <p href="https://google.se">Forgot your password?</p>
    </div>
  );
}

export default Login;
