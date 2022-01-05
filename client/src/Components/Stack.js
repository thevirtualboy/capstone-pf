import { useEffect, useState } from 'react'

const cardStyle = {
    border: "hidden",
    background: "white",
    borderRadius: "10px",
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "20px",
    minHeight: "300px", 
}

function Stack ({uselog, update, setUpdate}) {
    const [posts, setPosts] = useState([])
    const [games, setGames] = useState([])
    const [creating, setCreating] = useState(false)
    const [editing, setEditing] = useState(false)
    const [editingPost, setEditingPost] = useState({})
    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        poster_id: "",
        game_id: "",
    })

    useEffect(() => {
        fetch('/games')
        .then(r => r.json())
        .then(data => {
            setGames(data)
        })
    }, [])

    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(data => {
            setPosts(data)
        })
    }, [update])

    function handleSubmit (e) {
        e.preventDefault()
        newPost.poster_id = uselog.id
        fetch('/posts', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newPost),
            credentials: "include"
        })
        .then(r => {if (r.ok) {
            r.json().then(() => {
            setNewPost({
                title: "",
                description: "",
                poster_id: "",
                game_id: "",
            })
            setUpdate(!update)
            setCreating(false)}); 
        } else {
            alert("Missing required info.")
        }});
    }

    function handleDelete (post) {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
        .then(setUpdate(!update))
    }

    function handlePostForm (e) {
        setNewPost({...newPost, [e.target.name] : e.target.value})
    }

    const postList = posts.map(post => {
        return (
        <div style={cardStyle}>
            <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px"}}><h1>{post.title}</h1><p>{post.poster.username}</p></div>
                <h2>{games.filter(game => game.id === post.game_id).map(game => {return game.title})}</h2>
                <p style={{maxWidth: "500px", paddingRight: "50px"}}>{post.description}</p>
            </div>
            {post.poster_id === uselog.id ?
                <button onClick={() => handleDelete(post)} style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Delete Stack</button>
                :
                <button style={{float: "right", marginRight: "50px", marginBottom: "20px"}}>Contact {post.poster.username}</button>
            }
        </div>
        )}
    )

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", maxWidth: "2000px", margin: "auto"}}>
            {creating ?
                        <form onSubmit={handleSubmit}>
                        <h1>Create a Stack:</h1>
                            <label>Title: <br/>
                                <input type="text"  name="title" onChange={handlePostForm}/> 
                            </label> <br />
                            <label>Description: <br/>
                                <textarea type="text" name="description" onChange={handlePostForm} style={{width: "1000px", height: "100px"}}/> 
                            </label> <br />
                            <label>Game: <br/>
                                <select defaultValue={'DEFAULT'} name="game_id" onChange={handlePostForm} >
                                    <option value="DEFAULT" disabled>Choose a Game</option>
                                    {uselog.games.map(game => {return <option key={game.id} value={game.id}>{game.title}</option>})}
                                </select> 
                            </label>
                            <button className='btn'>Submit</button>
                            <button style={{alignSelf: "flex-end", marginTop: "20px", marginRight: "20px"}} onClick={() => setCreating(false)} >Cancel</button>
                        </form>
                        :
                        <button style={{alignSelf: "flex-end", marginTop: "20px", marginRight: "20px"}} onClick={() => setCreating(true)} >Create a New Stack</button>
                        }
                {postList}
            </div>
        </div>
    )
}

export default Stack