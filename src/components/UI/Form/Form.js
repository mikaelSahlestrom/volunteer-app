import React from 'react'
import styles from './Form.module.css'

function Form(props) {
    return (
        <div className={`${styles["form-control"]} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Form
