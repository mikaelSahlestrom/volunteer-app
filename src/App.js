import { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";

function App() {
  let mockdataUsers = [
    { name: "mikael", password: "test", admin: true },
    { name: "apa", password: "123", admin: false },
    { name: "sina", password: "000", admin: true },
    { name: "sara", password: "1234", admin: true },
  ];

  const [verifiedUser, setVerifiedUser] = useState(false);

  const [user, setUser] = useState({
    name: "",
    password: "",
    admin: false,
  });

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("verifiedUser");
    if (storedUserLoggedInInformation) {
      setVerifiedUser(true);
    }
  }, []);

  const logInHandler = (username, userPassword, isAdmin) => {
    localStorage.setItem("verifiedUser", true)
    setVerifiedUser(true);
    setUser({
      name: username,
      password: userPassword,
      admin: isAdmin,
    });
  };

  const logOutHandler = () => {
    localStorage.removeItem("verifiedUser")
    setVerifiedUser(false);
  };

  return (
  <>
  <main>
    {!verifiedUser && <Login login={logInHandler} users={mockdataUsers} />}
    {verifiedUser && <Content onLogout={logOutHandler} user={user} />}
  </main>
    </>
  )
}

export default App;
