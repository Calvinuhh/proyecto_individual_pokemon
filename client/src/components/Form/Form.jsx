import "./form.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPokemon, getTypes } from "../../redux/actions.js";
import validation from "../../utils/validation.js";

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

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
    setInput({
      ...input,
      types: [...input.types, event.target.value],
    });
    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDelete = (event) => {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== event),
    });
  };

  return (
    <div className="form">
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
                <p className="parrafo_types_form">{elem}</p>
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
