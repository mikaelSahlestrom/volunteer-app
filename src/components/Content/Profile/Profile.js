import React from 'react'
import styles from './Profile.module.css'
import Button from '../../UI/Button/Button'

function Profile(props) {
    return (
        <div className={styles.profile}>
            <p>User name: {props.user.name} </p>
            <br />
            <br />
            <Button onClick={props.logoutHandler}>Log out</Button>
        </div>
    )
}

export default Profile
