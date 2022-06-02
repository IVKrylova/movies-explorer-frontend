import './MoviesCard.css';

function MoviesCard(props) {

return (
  <li className={`movie`}> {/* ToDo: на следующем этапе реализовать отображение кнопки удалить при наведении на карточку для экранов > 768px onMouseOut onMouseOver */}
      <img src={props.image} alt={props.nameRU} className="movie__img" id={props.id} />
      <h3 className="movie__name">{props.nameRU}</h3>
      <p className="movie__duration">{props.duration}</p>
      <button type="button" className={`movie__like ${props.currentUrl === '/movies' ? '' : 'movie__like_hidden'}`} aria-label="кнопка лайк"></button>
      <button type="button"
        className={`movie__delete ${props.currentUrl === '/saved-movies' ? '' : 'movie__delete_hidden'}`}
        aria-label="кнопка удалить из сохраненных"></button>
    </li>
  );
}

export default MoviesCard;
