import "./card.css";

const Card = (props) => {
  return (
    <div className="card_contenedor">
      <h3 className="name">{props.name.toUpperCase()}</h3>
      <img className="img" src={props.image} alt={props.name} />
      <h4 className="types">{props.types.join(" - ").toUpperCase()}</h4>
    </div>
  );
};

export default Card;
