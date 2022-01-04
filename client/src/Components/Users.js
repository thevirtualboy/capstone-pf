import { useEffect, useState } from 'react'

function Users () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }, [])

    const userList = users.map(user => <li>{user.username}</li>)

    return (
        <>
            <ul>
                {userList}
            </ul>
        </>
    )
}

export default Users