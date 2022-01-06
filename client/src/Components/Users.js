import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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

function Users () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(r => r.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    const userList = users.sort((a, b) => a.id - b.id).map(user => {
        return (
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
                <h3>Game(s):</h3>
                {user.games.length === 0 ? 
                    <p>None</p>
                    :
                    <>
                        {user.games.map(game => <p style={{margin: "0px"}}>{game.title}</p>)}
                    </>
                }
            </div>
            <Link to={`/stackers/${user.id}`}><button style={btn3Style}>View Profile</button></Link>
        </div>
        )}
    )

    return (
        <>
            <ul style={{display: "flex", flexDirection: "column", alignItems: "stretch", maxWidth: "2000px", margin: "auto"}}>
                {userList}
            </ul>
        </>
    )
}

export default Users