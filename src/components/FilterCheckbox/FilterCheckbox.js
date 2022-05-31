import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <button type="button" className="filter-checkbox__button" aria-label="фильтр короткометражных фильмов"></button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
