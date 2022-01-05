import Header from "./Header";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Home from "./Home"
import Stack from "./Stack";
import Games from "./Games";
import Users from './Users'
import Login from "./Login";
import Profile from "./Profile";
import { useState, useEffect } from "react";

function App() {

  const [login, setLogin] = useState(false)
  const [uselog, setUselog] = useState({})
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUselog(user) 
          setLogin(true)
          setUpdate(false)
        });
      }
    });
  }, [update]);

  function onLogin(user){
    setLogin(true)
    setUselog(user)
  }
   
  function onLogout() {
     setLogin(false)
     setUselog({})
  }

  return (
    <div>
      {login ? 
      <>
        <Header uselog={uselog} onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games uselog={uselog} update={update} setUpdate={setUpdate} />} />
          <Route path="/stack" element={<Stack uselog={uselog} update={update} setUpdate={setUpdate} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Profile uselog={uselog} update={update} setUpdate={setUpdate} onLogout={onLogout} />} />
        </Routes>
      </>
        :
      <>
        <Login onLogin={onLogin} />
      </>
      }
    </div>
  );
}

export default App;
