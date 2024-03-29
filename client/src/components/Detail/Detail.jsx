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

  const detailPokemon = useSelector((state) => state.detail);

  return <div className="contenedor_detail"></div>;
};

export default Detail;
