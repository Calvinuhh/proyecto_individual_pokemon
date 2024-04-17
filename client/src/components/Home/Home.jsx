import "./home.css";
import gif_cargando from "../../assets/gif_cargando.gif";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {
  pokemons,
  filterCreated,
  getTypes,
  orderAttack,
  orderByHp,
  orderByName,
  filterPokemons,
} from "../../redux/actions.js";

const Home = () => {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons);
  const pokemonsState = useSelector((state) => state.allPokemons);

  const allTypes = useSelector((state) => state.types);
  const notFound = useSelector((state) => state.notFound);
  const [, setOrder] = useState("");
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
    dispatch(getTypes());
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

      <div className="contenedor_filtros">
        <select className="filtros" onChange={(event) => handleSort(event)}>
          <option className="options">Orden</option>
          <option className="options" value="asc">
            A - Z
          </option>
          <option className="options" value="des">
            Z - A
          </option>
        </select>

        <select
          className="filtros"
          onChange={(event) => handleFilterTypes(event)}
        >
          <option className="options">Tipos</option>
          <option className="options" value="All">
            Todos
          </option>
          {allTypes?.map((event) => {
            return (
              <option className="options" key={event.id} value={event.name}>
                {event.name}
              </option>
            );
          })}
        </select>

        <select
          className="filtros"
          onChange={(event) => handleSortAttack(event)}
        >
          <option className="options" value="attack">
            Ataque
          </option>
          <option className="options" value="min">
            min
          </option>
          <option className="options" value="max">
            max
          </option>
        </select>

        <select className="filtros" onChange={(event) => handleSortHp(event)}>
          <option className="options" value="hp">
            life
          </option>
          <option className="options" value="min">
            min
          </option>
          <option className="options" value="max">
            max
          </option>
        </select>

        <select
          className="filtros"
          onChange={(event) => handleFilterCreated(event)}
        >
          <option className="options" value="All">
            Origen
          </option>
          <option className="options" value="created">
            Creados
          </option>
          <option className="options" value="api">
            Api
          </option>
        </select>
      </div>

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
            <p className="cargando_parrafo">
              cargando... <img id="gif_loading" src={gif_cargando} alt="gif" />
            </p>
          </div>
        )}
      </div>

      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
        page={currentPage}
      ></Pagination>
    </div>
  );
};

export default Home;
