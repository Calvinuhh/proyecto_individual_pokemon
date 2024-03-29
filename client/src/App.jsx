import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/detail:id" Component={Detail}></Route>
          <Route path="/form" Component={Form}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
