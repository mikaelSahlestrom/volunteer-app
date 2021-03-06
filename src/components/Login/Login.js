import React, {  useState } from "react";
import styles from "./Login.module.css";
import logo from "../../Icons/Logo.svg";
import Button from "../UI/Button/Button";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";

function Login(props) {
  const [showLoginMeny, setShowLoginMeny] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setshowForgotPassword] = useState(false);

  const [isValid, setIsValid] = useState(true);

  const returnToMenyHandler = () => {
    setIsValid(true)
    setShowLoginMeny(true);
    setShowLogin(false);
    setShowSignUp(false);
    setshowForgotPassword(false);
  };

  let isAdmin = false;

  const controlCredentials = (username, password) => {
    for (const user of props.users) {
      if (user.name === username && user.password === password) {
        isAdmin = user.admin;
        return true;
      }
    }
    return false;
  };

  const onLoginHandler = (username, password) => {
    if (!controlCredentials(username, password)) {
      setIsValid(false);
      return;
    }
    props.login(username, password, isAdmin);
  };

  const signUpHandler = () => {
    setShowLoginMeny(false);
    setShowSignUp(true);
  };

  const enterCredentialsHandler = () => {
    setShowLoginMeny(false);
    setShowLogin(true);
  };

  const forgottenPasswordHandler = () => {
    setShowLoginMeny(false);
    setshowForgotPassword(true);
  };

  const createNewUserHandler = (username, password, admin) => {
    props.updateUsers(username, password, admin)
    setShowLoginMeny(true);
    setShowSignUp(false);
  };

  return (
    <div className={styles.login}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <h1>VolunteerApp</h1>
      {/* //TODO: Change error message depending on error. Include a timer or reset of the message  */}
      {!isValid && <p style={{color: "red"}}>Entered username and password doesn't exist</p>}
      {showLoginMeny && (
        <div>
          <Button onClick={enterCredentialsHandler}>Login</Button>
          <br />
          <Button onClick={signUpHandler}>Sign up</Button>
          <br />
          <br />
          <p
            className={styles["password-link"]}
            onClick={forgottenPasswordHandler}
          >
            Forgot your password?
          </p>
        </div>
      )}
      {showLogin && (
        <LoginForm
          onLogin={onLoginHandler}
          returnToMeny={returnToMenyHandler}
        />
      )}
      {showSignUp && (
        <SignUpForm
          createNewUser={createNewUserHandler}
          returnToMeny={returnToMenyHandler}
        />
      )}
      {showForgotPassword && (
        <ForgotPassword returnToMeny={returnToMenyHandler} />
      )}
    </div>
  );
}

export default Login;
