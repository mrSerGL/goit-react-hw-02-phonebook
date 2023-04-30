import css from './FilterInput.module.css';

function FilterInput({ value, onChangeFilter }) {
  return (
    <>
      <p className={css.input__name}>Find contacts by name</p>
      <label htmlFor={1}>
        <input
          type="text"
          className={css.input}
          name="name"
          value={value}
          id={1}
          onChange={onChangeFilter}
        ></input>
      </label>
    </>
  );
}

export default FilterInput;
