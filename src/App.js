import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
