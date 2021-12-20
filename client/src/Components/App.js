import Header from "./Header";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home"

const pageStyle = {
}

function App() {
  return (
    <div style={pageStyle}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" />
        <Route path="/stack" />
      </Routes>
    </div>
  );
}

export default App;
