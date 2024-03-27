import "./home.css";
import Cards from "../Cards/Cards.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="home_contenedor">
      <Cards></Cards>
    </div>
  );
};

export default Home;
