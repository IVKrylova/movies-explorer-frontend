import './FilterCheckbox.css'

const FilterCheckbox = props => {
  return (
    <div className="filter-checkbox">
      <button type="button" aria-label="фильтр короткометражных фильмов"
        className={`filter-checkbox__button ${props.isShortFilm ?'filter-checkbox__button_pressed' : ''}`}
        onClick={props.onClick}>
      </button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
