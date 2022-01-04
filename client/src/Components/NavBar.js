import { useState } from 'react'
import {Link} from 'react-router-dom'

const divStyle = {
    display: "flex",
    flexGrow: "1",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "auto"
}

function NavBar ({page, setPage}) {

    let link1Style = {
        textDecoration: "none",
        flexGrow: "1",
        paddingTop: "10px",
        paddingBottom: "5px",
        borderWidth: "1px",
        borderRadius: "3px 3px 0px 0px",
        borderColor: "#4249a2",
    }

    let link2Style = {
        textDecoration: "none",
        flexGrow: "1",
        paddingTop: "10px",
        paddingBottom: "5px",
        borderWidth: "1px",
        borderRadius: "3px 3px 0px 0px",
        borderColor: "#4249a2",
    }

    let link3Style = {
        textDecoration: "none",
        flexGrow: "1",
        paddingTop: "10px",
        paddingBottom: "5px",
        borderWidth: "1px",
        borderRadius: "3px 3px 0px 0px",
        borderColor: "#4249a2",
    }

    let link4Style = {
        textDecoration: "none",
        flexGrow: "1",
        paddingTop: "10px",
        paddingBottom: "5px",
        borderWidth: "1px",
        borderRadius: "3px 3px 0px 0px",
        borderColor: "#4249a2",
    }

    if (page === 1) {
        link1Style.backgroundColor = "black"
    }

    if (page === 2) {
        link2Style.backgroundColor = "black"
    }

    if (page === 3) {
        link3Style.backgroundColor = "black"
    }

    if (page === 4) {
        link4Style.backgroundColor = "black"
    }

    return (
        <div style={divStyle}>
            <Link className="link" style={link1Style} onClick={() => setPage(1)} to="/home">HOME</Link>
            <Link className="link" style={link2Style} onClick={() => setPage(2)} to="/games">GAMES</Link>
            <Link className="link" style={link3Style} onClick={() => setPage(3)} to="/stack">STACK</Link>
            <Link className="link" style={link4Style} onClick={() => setPage(4)} to="/users">USERS</Link>
        </div>
    )
}

export default NavBar