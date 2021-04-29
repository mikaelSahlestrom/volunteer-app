import React from 'react'
import styles from './Animals.module.css'

function AnimalElem(props) {
    return (
        <div className={styles['animalelem']}>
            <img className={styles['animalimg']} src={props.animalimg} alt=""></img>
            <div className={styles.animaleleminfo}>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>

        </div>
    )
}
export default AnimalElem