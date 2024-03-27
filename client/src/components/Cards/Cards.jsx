import "./cards.css";
import Card from "../Card/Card.jsx";

const Cards = (props) => {
  return (
    <div className="cards_contenedor" key={props.pokemons.id}>
      {props.pokemons.map((pokemon) => {
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />;
      })}
    </div>
  );
};

export default Cards;
