import "./landing.css"
import "../../css/index.css"
import pokemons_welcome from "../../assets/pokemons_welcome.png";
import welcome_img from "../../assets/comenzar_img.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="contenedor_landing">
        <img
          id="img_landing"
          src={pokemons_welcome}
          alt="pokemon_image_landing"
        />
        <div className="contenedor_comenzar">
          <Link to="/home">
            <img id="landing_texto" src={welcome_img} alt="comenzar_texto" />
          </Link>
        </div>
      </div>

      <div className="contenedor_footer">
        <footer id="footer_landing">
          Proyecto individual hecho por Calvin Howard
        </footer>
      </div>
    </>
  );
};

export default Landing;
