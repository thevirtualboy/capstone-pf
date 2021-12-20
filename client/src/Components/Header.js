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
    borderRadius: "100px"
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

function Header() {
    return (
    <>
        <div style={headerStyle}>
            <div style={hContentStyle}>
                <h1>stack.gg</h1>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "150px"}}>
                    <p>Username</p>
                    <img src={placeholder} style={btnStyle}/>
                </div>
            </div>
            <div style={navStyle}>
                <NavBar />
            </div>
        </div>
    </>
    );
  }
  
  export default Header;
  