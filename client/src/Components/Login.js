import {useState} from 'react'

const form1Styles = {
  display: "flex",
  flexDirection: "column",
  height: "200px",
  maxWidth: "500px",
  justifyContent: "space-around",
  textAlign: "left"
}

const form2Styles = {
  display: "flex",
  flexDirection: "column",
  height: "500px",
  maxWidth: "500px",
  justifyContent: "space-around",
  marginRight: "10px",
}

const pageStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "50px",
  flexWrap: "wrap"
}

const btnStyle = {
  alignSelf: "flex-end",
  float: "right",
  marginTop: "10px", 
  width: "75px", 
  backgroundColor: "#2f3335",
  color: "white",
  fontSize: "15px",
  borderRadius: "3px",
  borderWidth: "1px",
  borderColor: "black",
  padding: "2px"
}

const greetingStyle = {
  textAlign: "center",
  marginTop: "0px",
  color: "lightgray",
  paddingTop: '20px'
}

const subGreetingStyle = {
  textAlign: "center",
  color: "lightgray",
}

const topStyle = {
  borderBottomStyle: "solid",
  borderWidth: "1px",
  borderColor: "black",
  backgroundColor: "#3b3b3b"
}

function Login ({onLogin}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: ""
  })
  const [signed, setSigned] = useState(false)
  const [hasLog, setHasLog] = useState(false)

  function handleUserForm (e) {
    setNewUser({...newUser, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
        
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),

    })
    .then(response => {if (response.ok) {
      response.json().then((data) => {
        onLogin(data)
        setEmail("")
        setPassword("")
      });
      } else {
          alert("Not a valid login.")
      }});
  }

  function handleSignUp (e) {
    e.preventDefault()
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setNewUser({
        username: "",
        email: "",
        password: "",
        avatar: ""
      })
      setSigned(true)
      setHasLog(true)
    })
  }
  return (
    <>
      <div style={topStyle}>
        <h1 style={greetingStyle} >Welcome to stack.gg 🎮</h1>
        <h4 style={subGreetingStyle} >Stack the Odds in Your Favor</h4>
      </div>
        {hasLog ?
          <>
            <div style={pageStyle}>
              <form onSubmit = {handleSubmit} style={form1Styles}>
              <h2 style={{color: "lightgray"}}>Login</h2>  
                <label style={{color: "lightgray"}}>Email: <br/>
                  <input type="text" onChange = {(e)=>setEmail(e.target.value)}/> 
                </label> <br/>  
                <label style={{color: "lightgray"}}>Password: <br/>
                  <input type="text" onChange = {(e)=>setPassword(e.target.value)} /> 
                </label> 
                <button className="btn" style={btnStyle} type="submit">Submit</button>
              </form>
            </div>
            <p style={{color: "lightgray", textAlign: "center", marginTop: "50px"}} >Don't have an account? <span className="login" style={{color: "gray", marginLeft: "10px"}} onClick={() => setHasLog(false)}>Sign Up</span></p>
          </>
          :
          <>
            {signed ? 
              <p>You have successfully registered your account, please log in with your email and password.</p>
              :
              <>
                <div style={pageStyle}>
                  <div style={{marginLeft: "10px"}}>
                    <h2 style={{color: "lightgray"}}>What is stack.gg?</h2>
                    <p style={{color: "lightgray", maxWidth: "500px", paddingLeft: "20px"}}>stack.gg is a place to team up with other players to take on any challenges you might face in-game. Whether you want to dominate the competitive ladder or take on the latest raid, you can find a team here.</p>
                  </div>
                  <form onSubmit = {handleSignUp} style={form2Styles}>
                    <h2 style={{color: "lightgray"}}>Sign Up</h2>
                    <label style={{color: "lightgray"}}>Username: <br/>
                      <input type="text" value={newUser.username} name="username" onChange={handleUserForm} />
                    </label> <br/>
                    <label style={{color: "lightgray"}}>Email: <br/>
                      <input type="text" value={newUser.email} name="email" onChange={handleUserForm}/>
                    </label> <br/>
                    <label style={{color: "lightgray"}}>Password: <br/>
                      <input type="text" value={newUser.password} name="password" onChange={handleUserForm}/>
                    </label> <br />
                    <label style={{color: "lightgray"}}>Avatar: <br/>
                      <input type="text" placeholder="URL" value={newUser.avatar} name="avatar" onChange={handleUserForm}/>
                    </label> <br/>
                    <label style={{color: "lightgray"}}>Bio: <br/>
                      <textarea type="text" name="bio" onChange={handleUserForm} style={{width: "500px", height: "100px"}}/> 
                    </label> <br />
                    <label style={{color: "lightgray"}}>Discord Tag: <br/>
                      <input type="text" value={newUser.contact} name="contact" onChange={handleUserForm}/>
                    </label>
                    <button className="btn" style={btnStyle} type="submit">Submit</button>
                  </form>
                </div> <br />
                <p style={{color: "lightgray", textAlign: "center", marginTop: "50px"}} >Already have an account? <span className="login" style={{color: "gray", marginLeft: "10px"}} onClick={() => setHasLog(true)}>Login</span></p>
              </>
            }
          </>
        }
    </>
  )
}

export default Login