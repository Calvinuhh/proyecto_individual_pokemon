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

  console.log(props.pagination);

  return (
    <div className="contenedor_pagination">
      {pages &&
        pages.map((elem, i) => (
          <p key={i} className="p_pagination">
            <button
              id={props.page === pages[i] ? "current_page" : "page"}
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
