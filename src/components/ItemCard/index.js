import { useNavigate } from "react-router";
import css from "./style.module.scss";
import { Context } from "../../AppContext";
import { useContext } from "react";

function ItemCard({ item, categoryID }) {
  const navigate = useNavigate();

  const { currency } = useContext(Context);

  const goTo = () => navigate(`/${categoryID}/${item.id}`);

  return (
    <div className={css.item_card}>
      <div className={css.item_card_details}>
        <img src={item.image} alt={item.name} />
        <div className={css.item_card_details_text}>
          <div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>

          <div className={`row ${css.row}`}>
            <div className={css.price}>
              {currency} {item.price}
            </div>
            <div>
              <button onClick={goTo}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
