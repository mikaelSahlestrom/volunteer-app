import React from 'react'
import styles from './Animals.module.css'
import AnimalIcon from '../../../Icons/DogIcon.svg'

function AnimalElem() {
    return (
        <div className={styles.animalelem}>
            <img src={AnimalIcon}></img>
            <div className={styles.animaleleminfo}>
                <h3>Animal</h3>
                <p>Animal description & stuff</p>
            </div>

        </div>
    )
}
export default AnimalElem