import {useState} from 'react'
import './App.css'
import Login from './components/Login/Login'
import Content from './components/Content/Content'


function App() {

  const [verifiedUser, setVerifiedUser] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)

  const logInHandler = (adminUser) => {
    if(adminUser)
    setisAdmin(true)
    setVerifiedUser(true)
  }

  const logOutHandler = () => {
    setVerifiedUser(false)
  }

  let content = <Login onLogin={logInHandler}/>

  if(verifiedUser){
    content = <Content onLogout={logOutHandler} adminRights={isAdmin}/>
  }


  return (
    <div className='App'>
      {content}
    </div>
  );
}

export default App;
