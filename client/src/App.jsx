import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
import { useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  try {
    axios("http://localhost:3001/server/api/pokemons").then(
      (data) => {
        setPokemons([...pokemons, data.data]);
      }
    );
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing}></Route>
          <Route path="/home" Component={Home} pokemons={pokemons}></Route>
          <Route path="/detail:id" Component={Detail}></Route>
          <Route path="/form" Component={Form}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
