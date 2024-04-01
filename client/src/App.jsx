import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
