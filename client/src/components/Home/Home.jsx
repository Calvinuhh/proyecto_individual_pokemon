import "./home.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {
  pokemons,
  filterCreated,
  types,
  orderAttack,
  orderByHp,
  orderByName,
  filterPokemons,
} from "../../redux/actions.js";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const notFound = useSelector((state) => state.notFound);
  const [,setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firtsPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    firtsPokemonIndex,
    lastPokemonIndex
  );

  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage);
  };

  useEffect(() => {
    dispatch(pokemons());
    dispatch(types());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(pokemons());
  };

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };

  const handleFilterCreated = (event) => {
    event.preventDefault();
    dispatch(filterCreated(event.target.value));
  };

  const handleSortAttack = (event) => {
    event.preventDefault();
    if (event.target.value !== "attack")
      dispatch(orderAttack(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };

  const handleFilterTypes = (event) => {
    event.preventDefault();
    if (event.target.value !== "Tipos") {
      dispatch(filterPokemons(event.target.value));
    }
  };

  const handleSortHp = (event) => {
    event.preventDefault();
    if (event.target.value !== "life") dispatch(orderByHp(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };

  return (
    <div className="home_contenedor">
      <SearchBar></SearchBar>

      <div className="recargar_contenedor">
        <button
          className="button_recargar"
          onClick={(event) => {
            handleClick(event);
          }}
        >
          Recargar
        </button>
      </div>

      <select className="az" onChange={(event) => handleSort(event)}>
        <option value="asc">A - Z</option>
        <option value="des">Z - A</option>
      </select>

      <select
        className="types_button"
        onChange={(event) => handleFilterTypes(event)}
      >
        <option>Tipos</option>
        <option value="All">Todos</option>
        {allTypes?.map((event) => {
          return (
            <option key={event.id} value={event.name}>
              {event.name}
            </option>
          );
        })}
      </select>

      <select
        className="attacklife_button"
        onChange={(event) => handleSortAttack(event)}
      >
        <option value="attack">Ataque</option>
        <option value="min">min</option>
        <option value="max">max</option>
      </select>

      <select
        className="attacklife_button"
        onChange={(event) => handleSortHp(event)}
      >
        <option value="hp">hp</option>
        <option value="min">min</option>
        <option value="max">max</option>
      </select>

      <select
        className="origen_button"
        onChange={(event) => handleFilterCreated(event)}
      >
        <option value="All">Origen</option>
        <option value="created">Creados</option>
        <option value="api">Api</option>
      </select>

      <div className="contenedor_cards_home">
        {currentPokemons.length ? (
          currentPokemons?.map((elem, index) => {
            return (
              <Link key={index} className="link_card" to={`/detail/${elem.id}`}>
                <Card
                  name={elem.name}
                  life={elem.life}
                  attack={elem.attack}
                  image={elem.image}
                  id={elem.id}
                  types={elem.types}
                  key={index}
                />
              </Link>
            );
          })
        ) : notFound ? (
          <div className="not_found_contenedor">
            <h1 className="not_fount">Pokemon no encontrado :c</h1>
          </div>
        ) : (
          <div className="cargando_contenedor">
            <p className="cargando_parrafo">cargando...</p>
          </div>
        )}
      </div>

      <div>
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          pagination={pagination}
          page={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
