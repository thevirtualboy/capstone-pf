import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

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
  height: "400px",
  maxWidth: "500px",
  justifyContent: "space-around"
}

const pageStyle = {
  display: "flex",
  justifyContent: "space-around",
  fontFamily: "sans-serif",
  marginTop: "20px"
}

const btnStyle = {
  marginTop: "10px", 
  width: "75px", 
  backgroundColor: "#0A8FF1",
  color: "white",
  fontSize: "20px",
  borderRadius: "3px",
  borderWidth: "1px",
  borderColor: "black",
  padding: "2px"
}

function Login ({onLogin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState({
      username: "",
      email: "",
      password: ""
    })
    const [signed, setSigned] = useState(false)
    const navigate = useNavigate()

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
            navigate('/home')});
        } else {
          alert("Not a valid login.")
        }});
    }

    function handleSignUp (e) {
      e.preventDefault()
      fetch('localhost:3000/users', {
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
          password: ""
        })
        setSigned(true)
      })
    }
    return (
    <>
    <div style={pageStyle}>
      <form onSubmit = {handleSubmit} style={form1Styles}>
      <h1> Login Form </h1>  
        <label>Email: <br/>
          <input type="text" onChange = {(e)=>setEmail(e.target.value)}/> 
        </label> <br/>  
        <label>Password: <br/>
          <input type="text" onChange = {(e)=>setPassword(e.target.value)} /> 
        </label> 
        <button className="btn" style={btnStyle} type="submit">Submit</button>
      </form>
      
      {signed ? 
        null
        :
        <>
          <form onSubmit = {handleSignUp} style={form2Styles}>
            <h1>Sign Up</h1>
            <label>Username: <br/>
              <input type="text" value={newUser.username} name="username" onChange={handleUserForm} />
            </label> <br/>
            <label>Email: <br/>
              <input type="text" value={newUser.email} name="email" onChange={handleUserForm}/>
            </label> <br/>
            <label>Password: <br/>
              <input type="text" value={newUser.password} name="password" onChange={handleUserForm}/>
            </label>
            <button className="btn" style={btnStyle} type="submit">Submit</button>
          </form>
        </>
      }
      {signed ? <p>You have successfully registered your account, please log in with your username and password.</p> : null}
    </div>
    </>






)
}
export default Login