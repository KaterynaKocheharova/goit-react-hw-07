import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css["filter-box"]}>
      <p>Find contacts by name</p>
      <input className={css["filter-input"]} type="text" />
    </div>
  );
}
