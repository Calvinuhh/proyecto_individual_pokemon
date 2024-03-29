import "./card.css";

const Card = (props) => {
  return (
    <div className="card_contenedor" key={props.id}>
      <h2 className="nombre_card">{props.name}</h2>
      <h5 className="life_attack">life: {props.life}</h5>
      <h5 className="life_attack">attack: {props.attack}</h5>

      <img className="card_image" src={props.image} alt={props.name} />
      {props.types?.map((elem, i) => (
        <p className="card_info" key={i}>
          {elem}
        </p>
      ))}
    </div>
  );
};

export default Card;
