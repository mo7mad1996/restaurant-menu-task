import css from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(props) {
  return (
    <form className={css.form}>
      <button>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
      <input
        onChange={props.update}
        value={props.Search}
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default Search;
