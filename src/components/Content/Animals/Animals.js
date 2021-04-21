import React from 'react'
import styles from './Animals.module.css'
import AnimalElem from './AnimalElem'

function Animals() {
    return (
        <div className={styles.animals}>
            <h2>Animals</h2>
            <AnimalElem />
            <AnimalElem />
            <AnimalElem />
            <AnimalElem />
            <AnimalElem />
            <AnimalElem />
            <br />
        </div>
    )
}

export default Animals