import { useEffect, useState } from 'react'
import placeholder from '../placeholder.jpg'

const cardStyle = {
    maxWidth: "1500px",
    border: "hidden",
    background: "white",
    borderRadius: "10px",
    margin: "auto",
    marginTop: "20px",
    minHeight: "300px"
}

const avatarStyle ={
    height: "50px",
    border: "solid #2f3335",
    borderWidth: "1px",
    borderRadius: "100px"
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

    const userList = users.map(user => {
        return (
        <div style={cardStyle}>
            <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px", marginTop: "20px"}}>
                    {user.avatar !== "" ? 
                        <img style={avatarStyle} src={user.avatar} />
                        :
                        <img style={avatarStyle} src={placeholder} />
                    }
                    <h1>{user.username}</h1>
                </div>
                <h3>Game(s):</h3>{user.games.map(game => <p style={{margin: "0px"}}>{game.title}</p>)}
            </div>
            <button style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Contact {user.username}</button>
        </div>
        )}
    )

    return (
        <>
            <ul>
                {userList}
            </ul>
        </>
    )
}

export default Users