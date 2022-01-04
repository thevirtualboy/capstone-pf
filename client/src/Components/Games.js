import { useEffect, useState } from 'react'

const cardStyle = {
    display: "flex",
    maxWidth: "2000px",
    border: "hidden",
    background: "white",
    borderRadius: "0px 10px 10px 0px",
}

const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    gap: "20px"
}

function Games () {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setGames(data)
        })
    }, [])

    const gameList = games.map(game =>
        (<div style={cardStyle}>
            <img src={game.image} style={{height: "500px"}} />
            <div style={{marginLeft: "50px"}}>
                <h1>{game.title}</h1>
                <h2>{game.genre}</h2>
                <p style={{maxWidth: "500px", paddingRight: "50px"}}>{game.description}</p>
                <p>In-game role(s): {game.roles.map(role => <p>{role.name}</p>)}</p>
                <button style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Add Game to Your Profile</button>
            </div>
        </div>)
    )

    return (
        <div style={pageStyle}>
            {gameList}
        </div>
    )
}

export default Games