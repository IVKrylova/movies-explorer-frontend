import './MoviesCard.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import { useState } from 'react';

const MoviesCard = props => {
  // стейты лайка карточки
  const [isLiked, setIsLiked] = useState(false);

  // получаем ширину экрана
  const screenWidth = useWindowWidth();
  // className для кнопки лайка
  const movieLikeClassName = (
    `movie__like ${props.currentUrl === '/movies' ? '' : 'movie__like_hidden'} ${isLiked ? 'movie__like_active' : ''}`
  );

  // обработчик наведения на карточку
  function handleMouseOver() {
    props.onMouseOver(props);
  }

  // обработчик клика по лайку
  const handleClickLike = _ => {
    props.onMovieLike(props);
    setIsLiked(true);
  }

  const handleClickDelete = _ => {
    props.onDeleteMovie(props);

  }

  return (
    <li className={`movie ${props.currentUrl === '/saved-movies' ? 'movie_place_saved-movies' : ''}
      ${props.index >= props.amountMovies ? 'movie_hidden' : ''}`}
      onMouseOver={props.currentUrl === '/saved-movies' ? handleMouseOver : undefined}
      onMouseOut={props.currentUrl === '/saved-movies' ? props.onMouseOut : undefined}>
      <img src={props.image} alt={props.nameRU} className="movie__img" id={props.movieId} />
      <h3 className="movie__name">{props.nameRU}</h3>
      <p className="movie__duration">{props.durationInCard}</p>
      <button type="button"
        className={movieLikeClassName}
        aria-label="кнопка лайк"
        onClick={handleClickLike}>
      </button>
      <button type="button"
        className={`movie__delete ${props.currentUrl === '/saved-movies' ? '' : 'movie__delete_hidden'} ${props.idCardHovered === props.movieId && screenWidth >= 768 ? 'movie__delete_visible' : ''}`}
        aria-label="кнопка удалить из сохраненных"
        onClick={handleClickDelete}>
      </button>
    </li>
  );
}

export default MoviesCard;
