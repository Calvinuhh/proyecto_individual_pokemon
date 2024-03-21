import React from "react";
import "../../css/index.css";
import pokemons_welcome from "../../assets/pokemons_welcome.png";

const Landing = () => {
  const handleRedirect = () => {
    window.location.href = "./home";
  };

  return (
    <>
      <div className="contenedor_landing">
        <img
          id="img_landing"
          src={pokemons_welcome}
          alt="pokemon_image_landing"
        />
        <div onClick={handleRedirect} className="contenedor_comenzar"></div>
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
