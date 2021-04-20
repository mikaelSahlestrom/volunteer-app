import React from 'react'
import styles from './Navbar.module.css'
import NavbarButton from './NavbarButton'
import Dog from '../../Icons/DogIcon.svg'
import Calendar from '../../Icons/CalendarIcon.svg'
import Chat from '../../Icons/ChatIcon.svg'
import Profile from '../../Icons/ProfileIcon.svg'

function Navbar(props) {
    const pickPath = (pickedPathName) => {
        props.setPath(pickedPathName)
    }
    return (
        <div className={`${styles.navbar} ${styles[props.colorTheme]}`}>
            <NavbarButton onClick={pickPath} image={Calendar} type="schedule"/>
            <NavbarButton onClick={pickPath} image={Dog} type="animals"/>
            <NavbarButton onClick={pickPath} image={Chat}  type="chat"/>
            <NavbarButton onClick={pickPath} image={Profile} type="profile"/>
        </div>
    )
}

export default Navbar
