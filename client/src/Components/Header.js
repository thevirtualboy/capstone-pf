import NavBar from "./NavBar"
import placeholder from '../placeholder.jpg'
import { Link } from "react-router-dom";

const headerStyle = {
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
    backgroundColor: "#3b3b3b"
}

const imgStyle = {
    height: "35px",
    float: "right",
    border: "solid #2f3335",
    borderWidth: "1px",
    borderRadius: "100px",
    marginLeft: "10px",
    marginRight: "10px"
}

const hContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    margin: "auto",
    color: "lightgray",
}

const navStyle = {
    display: "flex",
    color: "lightgray",
    justifyContent: "space-between",
    maxWidth: "85%",
    margin: "auto",
}

const btnStyle = {
    alignSelf: "flex-end",
    float: "right", 
    width: "75px", 
    backgroundColor: "#2f3335",
    color: "white",
    fontSize: "15px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px"
}

function Header({page, setPage, uselog, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

    return (
    <>
        <div style={headerStyle}>
            <div style={hContentStyle}>
                <h1>stack.gg</h1>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "150px"}}>
                    <Link to={`/users/${uselog.id}`} style={{textDecoration: "none", color: "white"}}><p>{uselog.username}</p></Link>
                    {uselog.avatar !== "" ?
                        <Link to={`/users/${uselog.id}`}><img src={uselog.avatar} style={imgStyle}/></Link>
                        :
                        <Link to={`/users/${uselog.id}`}><img src={placeholder} style={imgStyle}/></Link>
                    }
                    <Link to="/home"><button onClick={handleLogout} style={btnStyle}>Log Out</button></Link>
                </div>
            </div>
            <div style={navStyle}>
                <NavBar page={page} setPage={setPage} />
            </div>
        </div>
    </>
    );
  }
  
  export default Header;
  