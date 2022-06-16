import { Link } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import './MoviesCard.css';

const MoviesCard = props => {
  // получаем ширину экрана
  const screenWidth = useWindowWidth();
  // className для кнопки лайка
  const movieLikeClassName = (
    `movie__like ${props.currentUrl === '/movies' ? '' : 'movie__like_hidden'} ${props.isLikeActive ? 'movie__like_active' : ''}`
  );
  // className для карточки фильма в saved movies
  const classNameInSavedMovies = props.currentUrl === '/saved-movies' ? 'movie_place_saved-movies' : '';
  // className для кнопки удаления фильма
  const classNameDeleteButton = props.currentUrl === '/saved-movies' ? '' : 'movie__delete_hidden';
  // className для кнопки удаления фильма для десктопа
  const classNameDeleteButtonDesktop = props.idCardHovered === props.movieId && screenWidth >= 768 ? 'movie__delete_visible' : '';

  // обработчик наведения на карточку
  const handleMouseOver = _ => {
    props.onMouseOver(props);
  }

  // обработчик клика по лайку
  const handleClickLike = _ => {
    props.onMovieLike(props);
  }

  // обработчик удаления фильма
  const handleClickDelete = _ => {
    props.onDeleteMovie(props);
  }

  return (
    <li className={`movie ${classNameInSavedMovies} ${props.index >= props.amountMovies ? 'movie_hidden' : ''}`}
      onMouseOver={props.currentUrl === '/saved-movies' ? handleMouseOver : undefined}
      onMouseOut={props.currentUrl === '/saved-movies' ? props.onMouseOut : undefined}
    >
      <Link to={{ pathname: props.trailerLink }} target="_blank" className="movie__trailer-link">
        <img src={props.image} alt={props.nameRU} className="movie__img" id={props.movieId} />
      </Link>
      <h3 className="movie__name">{props.nameRU}</h3>
      <p className="movie__duration">{props.durationInCard}</p>
      <button
        type="button"
        className={movieLikeClassName}
        aria-label="кнопка лайк"
        onClick={handleClickLike}
      >
      </button>
      <button
        type="button"
        className={`movie__delete ${classNameDeleteButton} ${classNameDeleteButtonDesktop}`}
        aria-label="кнопка удалить из сохраненных"
        onClick={handleClickDelete}
      >
      </button>
    </li>
  );
}

export default MoviesCard;
