import React from "react";
import styles from "./Content.module.css";
import Navbar from "../UI/Navbar";
import Profile from './Profile/Profile'

import { useState } from "react";

function Content(props) {
    // TODO: Base content style on admin rights or not
  const [navigation, setnavigation] = useState("schedule");

  const setPathHandler = (pickedPath) => {
    setnavigation(pickedPath);
  };
  const logout = () => {
    props.onLogout();
  };

  let pickedContent = <p> Here is the current content, schedule </p>;
  switch (navigation) {
    case "schedule":
      pickedContent = <p> Here is the current content, schedule </p>;
      break;
    case "animals":
      pickedContent = <p> Here is the current content, animals </p>;
      break;
    case "chat":
      pickedContent = <p> Here is the current content, chat </p>;
      break;
    case "profile":
      pickedContent = <Profile logoutHandler={logout} />;
      break;

    default:
      break;
  }

  return (
    <div className={styles.content}>
      <h2>{navigation}</h2>
      {pickedContent}
      <Navbar setPath={setPathHandler} />
    </div>
  );
}

export default Content;
