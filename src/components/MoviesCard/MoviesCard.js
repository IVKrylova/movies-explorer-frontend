import './MoviesCard.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import { IMAGE_URL } from '../../utils/constants';

const MoviesCard = props => {
  // получаем ширину экрана
  const screenWidth = useWindowWidth();

  // обработчик наведения на карточку
  function handleMouseOver() {
    props.onMouseOver(props);
  }

  return (
    <li className={`movie ${props.currentUrl === '/saved-movies' ? 'movie_place_saved-movies' : ''}
      ${props.index >= props.amountMovies ? 'movie_hidden' : ''}`}
      onMouseOver={props.currentUrl === '/saved-movies' ? handleMouseOver : undefined}
      onMouseOut={props.currentUrl === '/saved-movies' ? props.onMouseOut : undefined}>
      <img src={`${IMAGE_URL}${props.image.url}`} alt={props.nameRU} className="movie__img" id={props.id} />
      <h3 className="movie__name">{props.nameRU}</h3>
      <p className="movie__duration">{props.duration}</p>
      <button type="button"
        className={`movie__like ${props.currentUrl === '/movies' ? '' : 'movie__like_hidden'}`}
        aria-label="кнопка лайк">
      </button>
      <button type="button"
        className={`movie__delete ${props.currentUrl === '/saved-movies' ? '' : 'movie__delete_hidden'} ${props.idCardHovered === props.id && screenWidth >= 768 ? 'movie__delete_visible' : ''}`}
        aria-label="кнопка удалить из сохраненных">
      </button>
    </li>
  );
}

export default MoviesCard;
