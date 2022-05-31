import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <li className="movie">
      <img src={props.image} alt={props.nameRU} className="movie__img" />
      <h3 className="movie__name">{props.nameRU}</h3>
      <p className="movie__duration">{props.duration}</p>
      <button type="button" className="movie__like" aria-label="кнопка лайк"></button>
    </li>
  );
}

export default MoviesCard;
