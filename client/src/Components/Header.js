import NavBar from "./NavBar"
import placeholder from '../placeholder.jpg'

const headerStyle = {
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
    backgroundColor: "#3b3b3b"
}

const btnStyle = {
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
                    <p>{uselog.username}</p>
                    {uselog.avatar !== "" ?
                        <img src={uselog.avatar} style={btnStyle}/>
                        :
                        <img src={placeholder} style={btnStyle}/>
                    }
                    <button onClick={handleLogout} >Log Out</button>
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
  