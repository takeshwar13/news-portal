import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import General from "./Pages/General";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/general" element={<General general="General News " />} />
      </Routes>
    </div>
  );
}

export default App;
