import React from 'react'
import {useState} from 'react'
import styles from './Animals.module.css'
import AnimalElem from './AnimalElem.js'
import AnimalCategory from './AnimalCategory.js'


const dogImg1 = 'https://wallpaperaccess.com/full/90604.jpg'
const dogImg2 = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg'
const dogImg3 = 'https://pbs.twimg.com/profile_images/1351720980972933122/I3MnYUdm_400x400.jpg'
const dogImg4 = 'https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg'
const dogImg5 = 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp'

const catImg = 'https://t1.ea.ltmcdn.com/en/images/4/9/9/my_cat_smells_like_death_bad_breath_and_other_causes_2994_600_square.jpg' 
const birdImg = 'https://www.thespruce.com/thmb/rk3DGZLrlgEOprRfSwKqKopUzk4=/2121x1193/smart/filters:no_upscale()/Bird-GettyImages-582446599-58ec5c4d5f9b58ef7e24e7f4.jpg'
const monkeyImg = 'https://i.pinimg.com/474x/27/72/77/277277945ff5b32cd3111d5c688deda7.jpg'
const iguanaImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Male_Green_Iguana_Belize.jpg/220px-Male_Green_Iguana_Belize.jpg'

function Animals() {

    const[showCategories, setShowCategories] = useState(true);
    const[showDogs, setShowDogs] = useState(false)
    const[showCats, setShowCats] = useState(false)
    const[showBirds, setShowBirds] = useState(false)
    const[showMonkeys, setShowMonkeys] = useState(false)
    const[showIguanas, setShowIguanas] = useState(false)

    const cancel = () => {
        setShowCategories(false);
        setShowDogs(false);
        setShowCats(false);
        setShowBirds(false);
        setShowMonkeys(false);
        setShowIguanas(false);
    }

    const categoriesClickHandler = () => {
        cancel();
        setShowCategories(true);
    }

    const dogClickHandler = () => {
        cancel();
        setShowDogs(true);
    }

    const catClickHandler = () => {
        cancel();
        setShowCats(true);
    }

    const birdClickHandler = () => {
        cancel();
        setShowBirds(true);
    }

    const monkeyClickHandler = () => {
        cancel();
        setShowMonkeys(true);
    }

    const iguanaClickHandler = () => {
        cancel();
        setShowIguanas(true);
    }

    let animalContent = (
        <div className={styles.animals}>
            <h1 className={styles.title}>Categories</h1>
            <div onClick={dogClickHandler}>
                <AnimalCategory animalimg={dogImg1} category={'Dogs'} />
            </div>
            <div onClick={catClickHandler}>
                <AnimalCategory animalimg={catImg} category={'Cats'} />
            </div>
            <div onClick={birdClickHandler}>
                <AnimalCategory animalimg={birdImg} category={'Birds'} />
            </div>
            <div onClick={monkeyClickHandler}>
                <AnimalCategory animalimg={monkeyImg} category={'Monkeys'} />
            </div>
            <div onClick={iguanaClickHandler}>
            <AnimalCategory animalimg={iguanaImg} category={'Iguanas'} />
            </div>
            <br />
        </div>
    )

    if(showDogs){
        animalContent = (
            <div>
                <h1 className={styles.title}>Dogs</h1>
                <AnimalElem animalimg={dogImg1} name={'George'} desc={'A cool dog!'} />
                <AnimalElem animalimg={dogImg2} name={'Pam'} desc={'A stinky dog...'}/>
                <AnimalElem animalimg={dogImg3} name={'Goofy'} desc={'A goofy dog.'}/>
                <AnimalElem animalimg={dogImg4} name={'Max'} desc={'A singing dog.'}/>
                <AnimalElem animalimg={dogImg5} name={'Daisy'} desc={'A pretty fast dog.'} /> 
            </div>
        )
    } else if (showCats){
        animalContent = (
            <div>
                <h1 className={styles.title}>Cats</h1>
                <AnimalElem animalimg={dogImg1} name={'Dog'} desc={'A cool dog!'} />
                <AnimalElem animalimg={dogImg2} name={'Cat'} desc={'A stinky dog...'}/>
                <AnimalElem animalimg={dogImg3} name={'Bird'} desc={'A goofy dog.'}/>
                <AnimalElem animalimg={dogImg4} name={'Monkey'} desc={'A singing dog.'}/>
                <AnimalElem animalimg={dogImg5} name={'Iguana'} desc={'A pretty fast dog.'} /> 
            </div>
        )
    } else if (showBirds){
        animalContent = (
            <div>
                <h1 className={styles.title}>Birds</h1>
                <AnimalElem animalimg={dogImg1} name={'Dog'} desc={'A cool dog!'} />
                <AnimalElem animalimg={dogImg2} name={'Cat'} desc={'A stinky dog...'}/>
                <AnimalElem animalimg={dogImg3} name={'Bird'} desc={'A goofy dog.'}/>
                <AnimalElem animalimg={dogImg4} name={'Monkey'} desc={'A singing dog.'}/>
                <AnimalElem animalimg={dogImg5} name={'Iguana'} desc={'A pretty fast dog.'} /> 
            </div>
        )
    } else if (showMonkeys){
        animalContent = (
            <div>
                <h1 className={styles.title}>Monkeys</h1>
                <AnimalElem animalimg={dogImg1} name={'Dog'} desc={'A cool dog!'} />
                <AnimalElem animalimg={dogImg2} name={'Cat'} desc={'A stinky dog...'}/>
                <AnimalElem animalimg={dogImg3} name={'Bird'} desc={'A goofy dog.'}/>
                <AnimalElem animalimg={dogImg4} name={'Monkey'} desc={'A singing dog.'}/>
                <AnimalElem animalimg={dogImg5} name={'Iguana'} desc={'A pretty fast dog.'} /> 
            </div>
        )
    } else if (showIguanas){
        animalContent = (
            <div>
                <h1 className={styles.title}>Iguanas</h1>
                <AnimalElem animalimg={dogImg1} name={'Dog'} desc={'A cool dog!'} />
                <AnimalElem animalimg={dogImg2} name={'Cat'} desc={'A stinky dog...'}/>
                <AnimalElem animalimg={dogImg3} name={'Bird'} desc={'A goofy dog.'}/>
                <AnimalElem animalimg={dogImg4} name={'Monkey'} desc={'A singing dog.'}/>
                <AnimalElem animalimg={dogImg5} name={'Iguana'} desc={'A pretty fast dog.'} /> 
            </div>
        )
    }
    
    return (
        <div className={styles.animals}>
            {animalContent}
        </div>
    )
}


export default Animals