import axios from "axios";
import {
  GET_BY_NAME,
  SEARCH_POKEMONS,
  TYPES,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_POKEMONS,
  ORDER_BY_HP,
  SEARCH_POKEMON_DETAIL,
  CLEAR_DETAIL,
} from "./types";

const pokemons = () => {
  return async (dispatch) => {
    try {
      const petition = await axios.get(
        "http://localhost:3001/server/pokemons/"
      );
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
      const petition = await axios.post(
        "http://localhost:3001/server/pokemons/",
        pokemon
      );
      alert("Pokemon creado!");

      return petition;
    } catch (error) {
      alert(error.petition.data.error);
    }
  };
};

const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const petition = await axios(
        `http://localhost:3001/server/pokemons?name=${name}`
      );
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

const types = () => {
  return async (dispatch) => {
    const petition = await axios("http://localhost:3001/server/types");
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
    type: ORDER_BY_ATTACK,
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
      const petition = await axios(
        `http://localhost:3001/server/pokemons/${id}`
      );
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
  types,
  filterCreated,
  orderByName,
  orderAttack,
  orderByHp,
  filterPokemons,
  pokemonDetail,
  clearDetail,
};
