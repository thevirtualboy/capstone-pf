import { useEffect, useState } from 'react'

const cardStyle = {
    maxWidth: "1500px",
    border: "hidden",
    background: "white",
    borderRadius: "10px",
    margin: "auto",
    marginTop: "20px",
    minHeight: "300px"
}

function Stack () {
    const [posts, setPosts] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setGames(data)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    const postList = posts.map(post => {
        return (
        <div style={cardStyle}>
            <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px"}}><h1>{post.title}</h1><p>{post.poster.username}</p></div>
                <h2>{games.filter(game => game.id === post.game_id).map(game => {return game.title})}</h2>
                <p style={{maxWidth: "500px", paddingRight: "50px"}}>{post.description}</p>
            </div>
            <button style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Contact {post.poster.username}</button>
        </div>
        )}
    )

    return (
        <div>
            {postList}
        </div>
    )
}

export default Stack