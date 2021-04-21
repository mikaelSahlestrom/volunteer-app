import React from 'react'
import styles from './Animals.module.css'
import AnimalElem from './AnimalElem.js'

function Animals() {
    return (
        <div className={styles.animals}>
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