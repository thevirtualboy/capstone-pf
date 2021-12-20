import { useEffect, useState } from 'react'

function Home () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    const postList = posts.map(post => <li>{post.title}</li>)

    return (
        <>
            <ul>
                {postList}
            </ul>
        </>
    )
}

export default Home