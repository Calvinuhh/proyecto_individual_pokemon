import "./detail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { pokemonDetail, clearDetail } from "../../redux/actions.js";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonDetail(id));
    return () => dispatch(clearDetail());
  }, []);

  const detailPokemons = useSelector((state) => state.detail);

  return (
    <>
      {detailPokemons.length > 0 ? (
        <div className="contenedor_detail">
          <img
            className="imagen_contenedor"
            src={detailPokemons[0]?.image}
            alt={detailPokemons[0].name}
          />
          {detailPokemons[0].name}

          {detailPokemons[0]?.types.join(" ")}

          {detailPokemons[0]?.hp}

          {detailPokemons[0]?.attack}

          {detailPokemons[0]?.defense}

          {detailPokemons[0]?.speed}

          {detailPokemons[0]?.height}

          {detailPokemons[0]?.weight}
        </div>
      ) : (
        <div className="contenedor_loagind">
          <p className="contenedor_parrafo">cargando...</p>
        </div>
      )}
    </>
  );
};

export default Detail;
