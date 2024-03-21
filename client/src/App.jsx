import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing}> </Route>
          <Route path="/home"> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
