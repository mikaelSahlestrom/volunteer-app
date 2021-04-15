// import Button from './Button'
import logo from '../Icons/Logo.svg'
import './HomeScreen.css'

function HomeScreen(){
    return (
        <div className='homescreen'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>VolunteerApp</h1>
            {/* <Button text='Login' /> */}
            {/* <Button text='Sign up' /> */}
        </div>
    )
}

export default HomeScreen