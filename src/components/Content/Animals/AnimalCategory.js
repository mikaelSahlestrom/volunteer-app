import React from 'react'
import styles from './Animals.module.css'

function AnimalCategory(props) {
    
    return (
        <div className={styles['animal-category']}>
            <img className={styles['animal-category-img']} src={props.animalimg} alt=""></img>
            <h2 className={styles['animal-category-header']}>{props.category}</h2>

        </div>
    )
}
export default AnimalCategory