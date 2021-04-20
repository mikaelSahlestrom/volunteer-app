import React from 'react'
import styles from './NavbarButton.module.css'

function NavbarButton(props) {
    
    return (
        <div className={styles["navbar-button"]} onClick={() => props.onClick(props.type)}>
            <img src={props.image} className={styles.image} alt="nav-icon" />
        </div>
    )
}

export default NavbarButton
