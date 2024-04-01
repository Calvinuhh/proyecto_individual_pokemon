import Swal from "sweetalert2";
import axios from "axios";

import {
  GET_BY_NAME,
  SEARCH_POKEMONS,
  TYPES,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_ATTACK,
  FILTER_POKEMONS,
  ORDER_BY_HP,
  SEARCH_POKEMON_DETAIL,
  CLEAR_DETAIL,
} from "./types";

const pokemons = () => {
  return async (dispatch) => {
    try {
      const petition = await axios.get("/server/pokemons/");
      const { data } = petition;
      return dispatch({ type: SEARCH_POKEMONS, payload: data });
    } catch (error) {
      throw new Error(error);
    }
  };
};

const createNewPokemon = (pokemon) => {
  return async () => {
    try {
      const petition = await axios.post("/server/pokemons/", pokemon);
      Swal.fire({
        title: "Creado!",
        text: "Tu pokemon ha sido creado!",
        icon: "success",
      });

      return petition;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal...",
      });
    }
  };
};

const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const petition = await axios(`/server/pokemons?name=${name}`);
      const { data } = petition;

      return dispatch({ type: GET_BY_NAME, payload: data });
    } catch (error) {
      return dispatch({
        type: GET_BY_NAME,
        payload: { error: error },
      });
    }
  };
};

const getTypes = () => {
  return async (dispatch) => {
    const petition = await axios("/server/types");
    const { data } = petition;
    return dispatch({ type: TYPES, payload: data });
  };
};

const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

const orderAttack = (payload) => {
  return {
    type: ORDER_ATTACK,
    payload,
  };
};

const orderByHp = (payload) => {
  return {
    type: ORDER_BY_HP,
    payload,
  };
};

const filterPokemons = (payload) => {
  return {
    type: FILTER_POKEMONS,
    payload,
  };
};

const pokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      const petition = await axios(`/server/pokemons/${id}`);
      const { data } = petition;
      return dispatch({
        type: SEARCH_POKEMON_DETAIL,
        payload: data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export {
  pokemons,
  createNewPokemon,
  getPokemonByName,
  getTypes,
  filterCreated,
  orderByName,
  orderAttack,
  orderByHp,
  filterPokemons,
  pokemonDetail,
  clearDetail,
};
