import React from 'react'
import styles from './Animals.module.css'
import TextField from '@material-ui/core/TextField';

function Animals() {
    return (
        <div className={styles.animals}>
            Here you can see all the gorgeous animals, 
            Sara har en fin hatt   
            <br />
            <TextField id="standard-basic" label="Standard" />  
            <TextField id="standard-basic" label="Standard" />  
        </div>
    )
}

export default Animals
