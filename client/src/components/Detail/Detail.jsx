import "./detail.css";
import gif_cargando from "../../assets/gif_cargando.gif";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import back_emoji from "../../assets/back_emoji.png";
import { pokemonDetail, clearDetail } from "../../redux/actions.js";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonDetail(id));
    return () => dispatch(clearDetail());
  }, []);

  const detailPokemon = useSelector((state) => state.detail);

  return (
    <div id="contenedor_detail">
      <div id="contenedor_back_detail">
        <Link to="/home">
          <button id="back_button_detail">
            <img id="back_emoji_detail" src={back_emoji} alt="back_emoji" />
            Volver
          </button>
        </Link>
      </div>

      {detailPokemon.length > 0 ? (
        <div className="contenedor_detail">
          <div className="contenedor_name_image">
            <h2 id="detail_name">{detailPokemon[0].name}</h2>
            <img
              id="detail_image"
              src={detailPokemon[0]?.image}
              alt={detailPokemon[0].name}
            />
          </div>

          <div className="detail_data_contenedor">
            <div className="tipos_detail_contenedor">
              <h3 id="detail_tipos">tipos:</h3>

              <div id="detail_types">
                {detailPokemon[0]?.types
                  ? detailPokemon[0]?.types.map((elem, i) => {
                      return (
                        <p key={i} className="p_type_detail">
                          {elem}
                        </p>
                      );
                    })
                  : detailPokemon[0]?.Types.map((elem, i) => {
                      return (
                        <p key={i} className="p_type_detail">
                          {elem.name}
                        </p>
                      );
                    })}
              </div>
            </div>

            <div className="life_to_weight_contenedor">
              <p className="p_detail">id: {detailPokemon[0]?.id}</p>
              <p className="p_detail">life: {detailPokemon[0]?.life}</p>
              <p className="p_detail">attack: {detailPokemon[0]?.attack}</p>
              <p className="p_detail">defense: {detailPokemon[0]?.defense}</p>
              <p className="p_detail">speed: {detailPokemon[0]?.speed}</p>
              <p className="p_detail">height: {detailPokemon[0]?.height}</p>
              <p className="p_detail">weight: {detailPokemon[0]?.weight}</p>
            </div>
          </div>
        </div>
      ) : detailPokemon.length === 0 ? (
        <div className="not_found_contenedor">
          <h1 id="not_fount">Pokemon no encontrado :c</h1>
        </div>
      ) : (
        <div className="contenedor_loading">
          <p className="cargando_parrafo">
            cargando... <img id="gif_loading" src={gif_cargando} alt="gif" />
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
