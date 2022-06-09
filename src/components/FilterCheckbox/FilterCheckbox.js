import './FilterCheckbox.css'

const FilterCheckbox = props => {
  return (
    <div className="filter-checkbox">
      <button type="button" aria-label="фильтр короткометражных фильмов"
        className={`filter-checkbox__button
          ${props.isShortFilm && props.currentUrl === '/movies' ? 'filter-checkbox__button_pressed' : ''}
          ${props.isShortFilmSaved && props.currentUrl === '/saved-movies' ? 'filter-checkbox__button_pressed' : ''}`}
        onClick={props.onClick}>
      </button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
