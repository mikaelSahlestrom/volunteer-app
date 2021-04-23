import React from "react";
import styles from "./Content.module.css";
import Navbar from "../UI/Navbar/Navbar";
import Profile from "./Profile/Profile";
import Schedule from "./Schedule/Schedule"
import Animals from "./Animals/Animals"
import Chat from "./Chat/Chat"

import { useState } from "react";

function Content(props) {
  let colorTheme = "user";
  // TODO: Base content style on admin rights or not
  const [navigation, setnavigation] = useState("schedule");

  const setPathHandler = (pickedPath) => {
    setnavigation(pickedPath);
  };
  const logout = () => {
    props.onLogout();
  };

  let pickedContent;
  switch (navigation) {
    case "schedule":
      pickedContent = <Schedule />;
      break;
    case "animals":
      pickedContent = <Animals />;
      break;
    case "chat":
      pickedContent = <Chat />;
      break;
    case "profile":
      pickedContent = <Profile logoutHandler={logout} />;
      break;

    default:
      break;
  }

  if (props.user.admin) {
    colorTheme = "admin";
  }

  return (
    <div className={styles.content}>
      <h2>{navigation}</h2>
      <p>Hello {props.user.name}</p>
      {pickedContent}
      <Navbar setPath={setPathHandler} colorTheme={colorTheme} />
    </div>
  );
}

export default Content;
