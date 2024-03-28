import "./card.css";

const Card = (props) => {
  return (
    <div className="card_contenedor" key={props.id}>
      <div className="titulo_card">
        <h2 className="nombre_card">{props.name}</h2>
        <h5 className="life_attack">life: {props.life}</h5>
        <h5 className="life_attack">attack: {props.attack}</h5>
      </div>

      <div className="card_info">
        <img src={props.image} alt={props.name} />
        <div className="card_info">
          {props.types?.map((elem, i) => (
            <p key={i}>{elem}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
