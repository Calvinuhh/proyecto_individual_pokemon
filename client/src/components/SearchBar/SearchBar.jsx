import "./searchbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions.js";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonByName(name));
  };

  return (
    <div className="contenedor_searchbar">
      <div className="contenedor_rutas">
        <Link to={"/"} className="titulos_searchbar">
          Home
        </Link>

        <Link to={"/form"} className="titulos_searchbar">
          Nuevo Pokemon
        </Link>
      </div>

      <div className="input_contenedor">
        <input
          id="input"
          type="text"
          placeholder="Pokemon..."
          onChange={(event) => handleInputChange(event)}
        />
        <button
          id="button_searchbar"
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
