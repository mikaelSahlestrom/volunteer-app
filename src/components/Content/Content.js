import React from 'react'
import styles from './Content.module.css'
import Button from '../UI/Button'

function Content(props) {
    const logOut = () => {
        props.onLogout()
    }
    return (
        <div className={styles.content}>
            <h1>This is the App</h1>
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}

export default Content
