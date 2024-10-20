import { Link } from "react-router-dom";
import css from "./style.module.scss";

function CategoryCard({ category }) {
  return (
    <Link to={`/${category.id}`} className={css.category}>
      {category.image && <img src={category.image} alt={category.name} />}

      <div className={css.overlay}></div>
      <div className={css.title}>{category.name}</div>
      {category.is_closed && (
        <div className={css.opens_at}>Opens at {category.opens_at}</div>
      )}
    </Link>
  );
}

export default CategoryCard;
