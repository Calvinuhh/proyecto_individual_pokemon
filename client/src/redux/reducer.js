import {
  SEARCH_POKEMONS,
  GET_BY_NAME,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_ATTACK,
  ORDER_BY_HP,
  FILTER_POKEMONS,
  SEARCH_POKEMON_DETAIL,
  CLEAR_DETAIL,
  TYPES,
} from "./types";

const intialState = {
  allPokemons: [],
  pokemons: [],
  types: [],
  detail: {},
  error: false,
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SEARCH_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
        error: false,
      };

    case GET_BY_NAME:
      if (payload.error) {
        return {
          ...state,
          pokemons: [],
          error: true,
        };
      } else {
        return {
          ...state,
          pokemons: payload,
          error: false,
        };
      }

    case FILTER_CREATED:
      const filter =
        payload === "created"
          ? state.allPokemons.filter((elem) => elem.createdInDb)
          : state.allPokemons.filter((elem) => !elem.createdInDb);
      return {
        ...state,
        pokemons: payload === "All" ? state.allPokemons : filter,
      };

    case ORDER_BY_NAME:
      let sorted =
        payload === "asc"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sorted,
      };

    case ORDER_ATTACK:
      let sortedAttack = [...state.allPokemons];

      if (payload === "min") {
        sortedAttack.sort((a, b) => a.attack - b.attack);
      }
      if (payload === "max") {
        sortedAttack.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        pokemons: sortedAttack,
      };

    case ORDER_BY_HP:
      let sortedHp = [...state.allPokemons];

      if (payload === "min") {
        sortedHp.sort((a, b) => a.hp - b.hp);
      }
      if (payload === "max") {
        sortedHp.sort((a, b) => b.hp - a.hp);
      }
      return {
        ...state,
        pokemons: sortedHp,
      };

    default:
      return { ...state };

    case FILTER_POKEMONS:
      let filterType;
      if (payload === "All") {
        filterType = state.allPokemons;
      } else {
        filterType = state.allPokemons.filter((elem) =>
          elem.types.includes(payload)
        );
      }
      return {
        ...state,
        pokemons: filterType,
      };

    case SEARCH_POKEMON_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: {},
      };

    case TYPES:
      return {
        ...state,
        types: payload,
      };
  }
};

export default reducer;
