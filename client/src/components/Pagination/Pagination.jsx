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
    <div className="contenedor_pagination">
      {pages &&
        pages.map((elem, i) => (
          <p key={i} className="p_pagination">
            <button
              className="button_pagination"
              onClick={() => props.pagination(elem)}
            >
              {elem}
            </button>
          </p>
        ))}
    </div>
  );
};

export default Pagination;
