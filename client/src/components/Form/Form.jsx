import "./form.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPokemon, getTypes } from "../../redux/actions.js";
import { Link } from "react-router-dom";
import validation from "../../utils/validation.js";
import back_emoji from "../../assets/back_emoji.png";
import Swal from "sweetalert2";

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [typesArr, setTypesArr] = useState([]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [errors, setErrors] = useState({});

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewPokemon(input));
    setInput({
      name: "",
      image: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    event.preventDefault();

    const selectedOption = event.target.value;
    setTypesArr([...typesArr, event.target.value]);

    if (typesArr.includes(selectedOption)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No puedes elegir 2 veces el mismo tipo!",
      });
    }

    setInput({
      ...input,
      types: [
        ...input.types,
        event.target.value === "normal"
          ? (event.target.value = 1)
          : event.target.value === "fighting"
          ? (event.target.value = 2)
          : event.target.value === "flying"
          ? (event.target.value = 3)
          : event.target.value === "poison"
          ? (event.target.value = 4)
          : event.target.value === "ground"
          ? (event.target.value = 5)
          : event.target.value === "rock"
          ? (event.target.value = 6)
          : event.target.value === "bug"
          ? (event.target.value = 7)
          : event.target.value === "ghost"
          ? (event.target.value = 8)
          : event.target.value === "steel"
          ? (event.target.value = 9)
          : event.target.value === "fire"
          ? (event.target.value = 10)
          : event.target.value === "water"
          ? (event.target.value = 11)
          : event.target.value === "grass"
          ? (event.target.value = 12)
          : event.target.value === "electric"
          ? (event.target.value = 13)
          : event.target.value === "psychic"
          ? (event.target.value = 14)
          : event.target.value === "ice"
          ? (event.target.value = 15)
          : event.target.value === "dragon"
          ? (event.target.value = 16)
          : event.target.value === "dark"
          ? (event.target.value = 17)
          : event.target.value === "fairy"
          ? (event.target.value = 18)
          : event.target.value === "unknown"
          ? (event.target.value = 19)
          : event.target.value === "shadow"
          ? (event.target.value = 20)
          : null,
      ],
    });

    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDelete = (event) => {
    setTypesArr([typesArr.pop()]);

    setInput({
      ...input,
      types: input.types.filter((type) => type != event),
    });
  };

  return (
    <div className="form">
      <div id="contenedor_back_form">
        <Link to="/home">
          <button id="back_button_form">
            <img id="back_emoji_form" src={back_emoji} alt="back_emoji" />
            Volver
          </button>
        </Link>
      </div>

      <div className="divisor_form">
        <form className="contenedor_form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h3 id="titulo_form">Crea tu Pokemon!</h3>
          </div>
          <div className="contenedor_input_name">
            <input
              id="input_nombre"
              placeholder="Nombre..."
              name="name"
              type="text"
              value={input.name}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.name && (
                <span className="errors_name">{errors.name}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_image">
            <input
              id="input_image"
              placeholder="Nota: debe ser una URL!"
              name="image"
              type="text"
              value={input.image}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.image && (
                <span className="errors_image">{errors.image}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_life">
            <input
              id="input_life"
              placeholder="life..."
              name="life"
              type="number"
              value={input.life}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.life && (
                <span className="errors_life">{errors.life}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_attack">
            <input
              id="input_attack"
              placeholder="Attack..."
              name="attack"
              type="number"
              value={input.attack}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.attack && (
                <span className="errors_attack">{errors.attack}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_defense">
            <input
              id="input_defense"
              placeholder="Defense..."
              name="defense"
              type="number"
              value={input.defense}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.defense && (
                <span className="errors_defense">{errors.defense}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_speed">
            <input
              id="input_speed"
              placeholder="Speed..."
              name="speed"
              type="number"
              value={input.speed}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.speed && (
                <span className="errors_speed">{errors.speed}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_height">
            <input
              id="input_height"
              placeholder="Height..."
              name="height"
              type="number"
              value={input.height}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.height && (
                <span className="errors_height">{errors.height}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_weight">
            <input
              id="input_weight"
              placeholder="Weight..."
              name="weight"
              type="number"
              value={input.weight}
              onChange={handleChange}
            />
            <div className="contenedor_errors">
              {errors.weight && (
                <span className="errors_weight">{errors.weight}</span>
              )}
            </div>
          </div>
          <div className="contenedor_input_types">
            <label className="label_input">Tipo:</label>
            <select
              onChange={(elem) => handleSelect(elem)}
              className="select_input"
            >
              {types.map((type, i) => (
                <option className="option_input_form" key={i} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
            <div className="contenedor_errors">
              {errors.types && (
                <span className="errors_types">{errors.types}</span>
              )}
            </div>
          </div>

          <div className="types_form">
            {input.types.map((elem, i) => (
              <div className="contenedor_types_form" key={i}>
                <p className="parrafo_types_form">
                  {elem === 1
                    ? "normal"
                    : elem === 2
                    ? "fighting"
                    : elem === 3
                    ? "flying"
                    : elem === 4
                    ? "poison"
                    : elem === 5
                    ? "ground"
                    : elem === 6
                    ? "rock"
                    : elem === 7
                    ? "bug"
                    : elem === 8
                    ? "ghost"
                    : elem === 9
                    ? "steel"
                    : elem === 10
                    ? "fire"
                    : elem === 11
                    ? "water"
                    : elem === 12
                    ? "grass"
                    : elem === 13
                    ? "electric"
                    : elem === 14
                    ? "psychic"
                    : elem === 15
                    ? "ice"
                    : elem === 16
                    ? "dragon"
                    : elem === 17
                    ? "dark"
                    : elem === 18
                    ? "fairy"
                    : elem === 19
                    ? "unknown"
                    : elem === 20
                    ? "shadow"
                    : null}
                </p>
                <button
                  className="button_types_form"
                  onClick={() => handleDelete(elem)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="button_input_form">
            <button
              className="button"
              type="submit"
              name="submit"
              disabled={disable()}
            >
              <span className="crear">Crear!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
