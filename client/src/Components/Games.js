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

function Games ({uselog, update, setUpdate}) {
    const [games, setGames] = useState([])
    const [joins, setJoins] = useState([])

    useEffect(() => {
        fetch('/games')
        .then(r => r.json())
        .then(data => {
            setGames(data)
        })
        fetch('/joins')
        .then(r => r.json())
        .then(data => {
            setJoins(data)
        })
    }, [update])

    function containsObject(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].title === obj.title) {
                return true;
            }
        }
    
        return false;
    }

    function handleAdd(user, game) {
        let newJoin = {
            game_id: game.id,
            user_id: user.id
        }
        fetch('/joins', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJoin),
            credentials: "include"
        })
        .then(r => r.json())
        .then(() => {
            setUpdate(!update)
        })
    }

    function handleRemove(user, game) {
        let destructo = joins.find(join => join.game_id === game.id && join.user_id === user.id)
        fetch(`/joins/${destructo.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
        .then(setUpdate(true))
    }

    const gameList = games.map(game =>
        (<div style={cardStyle}>
            <img src={game.image} style={{maxHeight: "500px"}} />
            <div style={{marginLeft: "10px"}}>
                <h1>{game.title}</h1>
                <h2>{game.genre}</h2>
                <p style={{maxWidth: "500px", minWidth: "230px", paddingRight: "50px"}}>{game.description}</p>
                <p>In-game role(s):</p> {game.roles.map(role => <p style={{margin: "0px"}}>{role.name}</p>)}
                { containsObject(game, uselog.games) ?
                <button onClick={() => handleRemove(uselog, game)} style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Remove Game</button>
                :
                <button onClick={() => handleAdd(uselog, game)} style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Add Game</button>
                }
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