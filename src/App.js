import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import FetchNews from "./Component/FetchNews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/general" element={<FetchNews cat="General News " />} />
      </Routes>
    </div>
  );
}

export default App;
