import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import placeholder from '../placeholder.jpg'

const cardStyle = {
    border: "hidden",
    background: "white",
    borderRadius: "10px",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "20px",
    minHeight: "250px", 
}

const avatarStyle ={
    height: "50px",
    border: "solid #2f3335",
    borderWidth: "1px",
    borderRadius: "100px"
}

const btnStyle = {
    alignSelf: "flex-end",
    float: "right", 
    width: "150px", 
    backgroundColor: "#2f3335",
    color: "white",
    fontSize: "15px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px",
    marginRight: "20px",
    marginTop: "20px"
}

const btn2Style = {
    width: "150px", 
    backgroundColor: "#2f3335",
    color: "white",
    fontSize: "15px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px",
    marginRight: "20px"
}

const btn3Style = {
    alignSelf: "flex-end",
    float: "right", 
    width: "100px", 
    backgroundColor: "#2f3335",
    color: "white",
    fontSize: "15px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px",
    marginRight: "20px",
    marginBottom: "20px"
}

const form2Styles = {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    justifyContent: "space-around",
    marginLeft: "50px",
    marginTop: "100px",
    color: "lightgray"
}

function Profile ({uselog, update, setUpdate, onLogout}) {
    const [user, setUser] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [editing, setEditing] = useState(false)
    const [editingUser, setEditingUser] = useState({})

    const id = useParams().id

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setIsLoaded(true)
        })
    }, [update])

    if(!isLoaded) return <div style={{textAlign: "center"}}><h1>Loading...</h1></div>

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

    function handleDelete (user) {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
        .then(() => {
            setUpdate(!update)
            handleLogout()
        })
    }

    function handleEditButton (user) {
        setEditing(true)
        setEditingUser(user)
    }

    function handleEditForm (e) {
        setEditingUser({...editingUser, [e.target.name] : e.target.value})
    }

    function handleEdit (user) {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user),
            credentials: "include"
        })
        .then(setUpdate(!update))
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", maxWidth: "2000px", margin: "auto"}}>
            {editing ?
                <form onSubmit = {() => {handleEdit(editingUser); setEditing(false)}} style={form2Styles}>
                    <h1>Edit:</h1>
                    <button style={btnStyle} onClick={() => setEditing(false)} >Cancel</button>
                    <label>Username: <br/>
                        <input type="text" value={editingUser.username} name="username" onChange={handleEditForm} />
                    </label> <br/>
                    <label>Email: <br/>
                        <input type="text" value={editingUser.email} name="email" onChange={handleEditForm}/>
                    </label> <br/>
                    <label>Avatar: <br/>
                        <input type="text" placeholder="URL" value={editingUser.avatar} name="avatar" onChange={handleEditForm}/>
                    </label> <br/>
                    <button className="btn" type="submit" style={btn2Style}>Submit</button>
                </form>
                :
                <div style={cardStyle}>
                    <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px", marginTop: "20px"}}>
                            {user.avatar !== "" ? 
                                <img style={avatarStyle} src={user.avatar} />
                                :
                                <img style={avatarStyle} src={placeholder} />
                            }
                            <h1>{user.username}</h1><p>{user.contact}</p>
                        </div>
                        <div style={{display: "flex", gap: "100px"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <h3>Game(s):</h3>
                                {user.games.length === 0 ? 
                                    <p>None</p>
                                    :
                                    <>
                                        {user.games.map(game => <p style={{margin: "0px"}}>{game.title}</p>)}
                                    </>
                                }
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <h3>Bio:</h3>
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    {user.id === uselog.id ?
                        <>
                            <Link to="/home"><button onClick={() => handleDelete(user)} style={btn3Style}>Delete Profile</button></Link>
                            <button onClick={() => handleEditButton(user)} style={btn3Style}>Edit Profile</button>
                        </>
                        :
                        null
                    }
                </div>
            }
        </div>
    )
}

export default Profile