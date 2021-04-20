import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";

function App() {
  let mockdataUsers = [
    { name: "mikael", password: "test", admin: true },
    { name: "apa", password: "123", admin: false },
    { name: "sina", password: "000", admin: true },
    { name: "sara", password: "1234", admin: true},
  ];

  const [verifiedUser, setVerifiedUser] = useState(false);

  // TODO: Set as object containing username, adminrights etc
  const [user, setUser] = useState({
    name: '',
    password: '',
    admin: false
  })

  const logInHandler = (username, userPassword, isAdmin) => {
    setVerifiedUser(true);
    setUser(
      {
        name: username,
        password: userPassword,
        admin: isAdmin
      }
    )
  };

  const logOutHandler = () => {
    setVerifiedUser(false);
  };

  let content = <Login login={logInHandler} currentUsers={mockdataUsers}/>;

  if (verifiedUser) {
    content = <Content onLogout={logOutHandler} user={user}/>;
  }

  return <div className="App">{content}</div>;
}

export default App;
