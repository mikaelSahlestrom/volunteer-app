import React from "react";
import styles from "./Navbar.module.css";
import NavbarButton from "./NavbarButton/NavbarButton";

import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";

function Navbar(props) {
  const pickPath = (pickedPathName) => {
    props.setPath(pickedPathName);
  };
  return (
    <div className={`${styles.navbar} ${styles[props.colorTheme]}`}>
      <NavbarButton onClick={pickPath} type="schedule">
        <EventOutlinedIcon style={{ fontSize: 40, color: "white" }}/>
      </NavbarButton>
      <NavbarButton onClick={pickPath} type="animals">
        <PetsOutlinedIcon style={{ fontSize: 40, color: "white" }}/>
      </NavbarButton>
      <NavbarButton onClick={pickPath} type="chat">
        <ChatIcon style={{ fontSize: 40, color: "white" }}/>
      </NavbarButton>
      <NavbarButton onClick={pickPath} type="profile">
        <AccountBoxOutlinedIcon style={{ fontSize: 40, color: "white" }}/>
      </NavbarButton>
    </div>
  );
}

export default Navbar;
