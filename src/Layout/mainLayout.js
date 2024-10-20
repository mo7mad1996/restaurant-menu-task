import css from "./main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Layout(ctx) {
  const navigate = useNavigate();

  return (
    <div className={css.app}>
      <header>
        <div className={`${css.row} row`}>
          <div>
            <button onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              <span>back</span>
            </button>
          </div>
          <div>
            <b>In Room Dining</b>
          </div>
          <div>
            <div data-cart="0">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </div>
          </div>
        </div>
      </header>
      <main className={css.page}>{ctx.children}</main>
    </div>
  );
}

export default Layout;
