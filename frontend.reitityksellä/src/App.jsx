import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hakulomaketesti from "./components/Hakulomaketesti";
import Lisayslomaketesti from "./components/Lisayslomaketesti";
import Aloitussivu from "./components/Aloitussivu";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";

function App() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [othername, setOtherName] = useState("");
  const getData = async () => {
    const response = await Axios.get(
      `http://localhost:3333/getData/${(id, name, othername)}`
    );
    console.log(response.data);
    setID(response.data.id);
    setName(response.data.name);
    setOtherName(response.data.othername);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>ID: {id}</p> 
      <p>Name: {name}</p>
      <p>Other Name: {othername}</p>
      <h1>Sanakirja-sovellus</h1>
      <Router>
        <div>
          <Link style={{ padding: 5 }} to="/">
            Takaisin
          </Link>
          <Link style={{ padding: 5 }} to="/Hakulomaketesti">
            Hakulomake
          </Link>
          <Link style={{ padding: 5 }} to="/Lisayslomaketesti">
            Lisäyslomake
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Aloitussivu />} />
          <Route path="/Hakulomaketesti" element={<Hakulomaketesti />} />
          <Route path="/Lisayslomaketesti" element={<Lisayslomaketesti />} />
        </Routes>
      </Router>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
root.render(<App />);
  
export default App;
