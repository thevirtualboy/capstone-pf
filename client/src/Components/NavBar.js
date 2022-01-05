import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

const divStyle = {
    display: "flex",
    flexGrow: "1",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "auto"
}

function NavBar () {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
      }

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

    if (usePathname() === "/home") {
        link1Style.backgroundColor = "black"
    }

    if (usePathname() === "/games") {
        link2Style.backgroundColor = "black"
    }

    if (usePathname() === "/stack") {
        link3Style.backgroundColor = "black"
    }

    if (usePathname() === "/users") {
        link4Style.backgroundColor = "black"
    }

    return (
        <div style={divStyle}>
            <Link className="link" style={link1Style} to="/home">HOME</Link>
            <Link className="link" style={link2Style} to="/games">GAMES</Link>
            <Link className="link" style={link3Style} to="/stack">STACK</Link>
            <Link className="link" style={link4Style} to="/users">USERS</Link>
        </div>
    )
}

export default NavBar