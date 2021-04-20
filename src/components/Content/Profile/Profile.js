import React from 'react'
import styles from './Profile.module.css'
import Button from '../../UI/Button'

function Profile(props) {
    return (
        <div className={styles.profile}>
            <p>User name</p>
            <p>Some information</p>
            <br />
            <br />
            <Button onClick={props.logoutHandler}>Log out</Button>
        </div>
    )
}

export default Profile
