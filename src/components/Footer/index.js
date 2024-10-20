import { useContext } from "react";
import { Context } from "../../AppContext";

import css from "./style.module.scss";

function Footer() {
  const { currency } = useContext(Context);

  return (
    <footer className={css.footer}>
      <div className={css.main_footer}>
        <div className={`row ${css.row}`}>
          <div>
            <span className={css.count}>0</span>
            <span>View cart</span>
          </div>
          <div>{currency} 0</div>
        </div>
      </div>
      <div>
        <p className="text-center">
          Prices are in {currency} and are inclusive of 10% service changes, 5%
          VAT & 7% Municipality fee.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
