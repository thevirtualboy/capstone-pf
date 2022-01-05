import Header from "./Header";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home"
import Stack from "./Stack";
import Games from "./Games";
import Users from './Users'
import Login from "./Login";
import { useState, useEffect } from "react";

const pageStyle = {
}

function App() {
  const [login, setLogin] = useState(false)
  const [uselog, setUselog] = useState({})
  const [page, setPage] = useState("")
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
    <div style={pageStyle}>
      {login ? 
      <>
        <Header page={page} setPage={setPage} uselog={uselog} onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games uselog={uselog} update={update} setUpdate={setUpdate} />} />
          <Route path="/stack" element={<Stack uselog={uselog} update={update} setUpdate={setUpdate} />} />
          <Route path="/users" element={<Users />} />
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
