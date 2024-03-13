import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();

  const selectNameFilter = (evt) => {
    const newText = evt.target.value;
    dispatch(changeFilter(newText));
  };

  return (
    <div className={css.containerInput}>
      <p className={css.textInput}> Find contact by name</p>
      <input
        className={css.findInput}
        type="text"
        onChange={selectNameFilter}
        placeholder="Find contact by name"
      />
    </div>
  );
}
