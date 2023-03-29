import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Contact from "./Components/Contact";
import DropdownMenu from "./Components/DropdownMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
