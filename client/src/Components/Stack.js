import { useEffect, useState } from 'react'

const cardStyle = {
    border: "hidden",
    background: "white",
    borderRadius: "10px",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "20px",
    minHeight: "250px", 
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
    width: "150px", 
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

    function handleEditForm (e) {
        setEditingPost({...editingPost, [e.target.name] : e.target.value})
    }

    function handleEditButton (post) {
        setEditing(true)
        setEditingPost(post)
    }

    function handleEdit (post) {
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(post),
            credentials: "include"
        })
        .then(setUpdate(!update))
    }

    const postList = posts.sort((a, b) => a.id - b.id).map(post => {
        return (
        <div style={cardStyle}>
            <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px"}}><h1>{post.title}</h1><p style={{marginRight: "20px"}}>{post.poster.username} ({post.poster.contact})</p></div>
                <h2>{games.filter(game => game.id === post.game_id).map(game => {return game.title})}</h2>
                <p style={{maxWidth: "500px", paddingRight: "50px"}}>{post.description}</p>
            </div>
            {post.poster_id === uselog.id ?
                <>
                    <button onClick={() => handleDelete(post)} style={btn3Style}>Delete Stack</button>
                    <button onClick={() => handleEditButton(post)} style={btn3Style}>Edit Stack</button>
                </>
                :
                null
            }
        </div>
        )}
    )

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", maxWidth: "2000px", margin: "auto"}}>
                {editing ?
                    null
                    :
                    <>
                        {creating ?
                            <form onSubmit={handleSubmit} style={form2Styles}>
                            <h1>Create a Stack:</h1>
                                <button className='btn' style={btnStyle} onClick={() => setCreating(false)} >Cancel</button>
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
                                </label> <br />
                                <button className='btn' style={btn2Style} >Submit</button>
                            </form>
                            :
                            <button style={btnStyle} onClick={() => setCreating(true)} >Create a New Stack</button>
                        }
                    </>
                }
                {editing ?
                    <form onSubmit={() => {handleEdit(editingPost); setEditing(false)}} style={form2Styles}>
                    <h1>Edit Stack:</h1>
                    <button style={btnStyle} onClick={() => setCreating(false)} >Cancel</button>
                        <label>Title: <br/>
                            <input type="text" value={editingPost.title} name="title" onChange={handleEditForm}/> 
                        </label> <br />
                        <label>Description: <br/>
                            <textarea type="text" value={editingPost.description} name="description" onChange={handleEditForm} style={{width: "1000px", height: "100px"}}/> 
                        </label> <br />
                        <label>Game: <br/>
                            <select defaultValue={'DEFAULT'} value={editingPost.game_id} name="game_id" onChange={handleEditForm} >
                                <option value="DEFAULT" disabled>Choose a Game</option>
                                {uselog.games.map(game => {return <option key={game.id} value={game.id}>{game.title}</option>})}
                            </select> 
                        </label> <br />
                        <button className='btn' style={btn2Style} >Submit</button>
                    </form>
                    :
                    <>
                        {creating ?
                            null
                            :
                            <>
                                {postList}
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Stack