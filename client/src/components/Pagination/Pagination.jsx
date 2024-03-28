import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  const pages = [];

  for (
    let i = 0;
    i < Math.ceil(props.allPokemons / props.pokemonsPerPage);
    i++
  ) {
    pages.push(i + 1);
  }

  return (
    <>
      <div>
        <ul className="contenedor_pagination">
          {pages &&
            pages.map((elem, i) => {
              <li key={i}>
                <button
                  className="button_pagination"
                  onClick={() => props.pagination(elem)}
                ></button>
              </li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
