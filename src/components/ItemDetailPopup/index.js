import React, { useState, useContext } from "react";
import { Context } from "../../AppContext";
import css from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDetailPopup = ({ item, onClose }) => {
  const { currency } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [cookingPreference, setCookingPreference] = useState("");
  const [additionalItems, setAdditionalItems] = useState([]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAdditionalItemChange = (item) => {
    if (additionalItems.includes(item)) {
      setAdditionalItems(additionalItems.filter((i) => i !== item));
    } else {
      setAdditionalItems([...additionalItems, item]);
    }
  };

  const totalPrice = item
    ? item.price * quantity +
      additionalItems.reduce((acc, curr) => acc + curr.price, 0)
    : 0;

  return (
    <div className={css.popup_overlay}>
      <div className={css.popup_content}>
        <button onClick={onClose} className={css.close_button}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>

        <div className={css.item_banner}>
          <img src={item.image} alt={item.name} className={css.item_image} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>

        <div className={css.row}>
          <p className={css.price}>
            Price: {currency} {item.price}
          </p>
          <div className={css.quantity_selector}>
            <button onClick={() => handleQuantityChange(-1)}>
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>

        <div className={css.add_section}>
          <h5>Add Side</h5>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({
                  name: "Truffle and parmesan fries",
                  price: 30,
                })
              }
            />
            Truffle and parmesan fries + {currency} 30
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({ name: "French fries", price: 30 })
              }
            />
            French fries + {currency} 30
          </label>
        </div>
        <div className={css.add_section}>
          <h5>Add Sauce</h5>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({ name: "Wild mushroom", price: 15 })
              }
            />
            Wild mushroom + {currency} 15
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({ name: "BBQ sauce", price: 15 })
              }
            />
            BBQ sauce + {currency} 15
          </label>
        </div>
        <div className={css.add_section}>
          <h5>Add a Glass</h5>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({
                  name: "Anakena merlot",
                  price: 55,
                })
              }
            />
            Anakena merlot + {currency} 55
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleAdditionalItemChange({
                  name: "Anakena sauvignon blanc",
                  price: 55,
                })
              }
            />
            Anakena sauvignon blanc + {currency} 55
          </label>
        </div>
        <div className={css.add_section}>
          <h5>
            Choice of Side <span className={css.required}>Required</span>
          </h5>
          <label>
            <input
              type="radio"
              name="side"
              onChange={() => setSelectedSide("Grilled vegetables")}
            />
            Grilled vegetables
          </label>
          <label>
            <input
              type="radio"
              name="side"
              onChange={() => setSelectedSide("Basmati rice")}
            />
            Basmati rice
          </label>
        </div>
        <div className={css.add_section}>
          <h5>
            Choice of Sauce <span className={css.required}>Required</span>
          </h5>
          <label>
            <input
              type="radio"
              name="sauce"
              onChange={() => setSelectedSauce("Peppercorn")}
            />
            Peppercorn
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              onChange={() => setSelectedSauce("Mushroom sauce")}
            />
            Mushroom sauce
          </label>
        </div>
        <div className={css.add_section}>
          <h5>
            Cooking preferences <span className={css.required}>Required</span>
          </h5>
          <label>
            <input
              type="radio"
              name="cooking"
              onChange={() => setCookingPreference("Rare")}
            />
            Rare
          </label>
          <label>
            <input
              type="radio"
              name="cooking"
              onChange={() => setCookingPreference("Medium")}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="cooking"
              onChange={() => setCookingPreference("Well done")}
            />
            Well done
          </label>
        </div>
        <button className={css.add_to_cart_button}>
          <div className={`row ${css.row}`}>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-square-plus" /> Add to Cart
            </span>
            <span>
              Total: {currency} {totalPrice}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemDetailPopup;
