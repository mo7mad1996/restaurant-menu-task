import css from "./style.module.css";

function Loading() {
  return (
    <div className={css.loading}>
      <div className={css.loader}></div>;
    </div>
  );
}

export default Loading;
