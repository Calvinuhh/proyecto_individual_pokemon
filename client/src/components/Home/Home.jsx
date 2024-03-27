import "./home.css";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { UseSelector, useDispatch } from "react-redux";

const Home = () => {
  return (
    <div className="home_contenedor">
      <Cards></Cards>
    </div>
  );
};

export default Home;
