import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  // рассчет длительности фильма
  const calcDuration = movie => {
    return parseInt(movie.duration / 60) > 0 ?
      `${parseInt(movie.duration / 60)}ч ${movie.duration % 60}м` :
      `${movie.duration % 60}м`;
  }

  return (
    <section className="movies-cards" aria-label="Блок с фильмами">
      <ul className="movies-list">
        {props.movies.map(movie => {
              return ( /* ToDo: разное количество карточек для разной ширины экрана */
                <MoviesCard key={movie.movieId} /* ToDo: заменить на _id на следующем этапе */
                  id={movie.movieId} /* ToDo: заменить на _id на следующем этапе */
                  nameRU={movie.nameRU}
                  duration={calcDuration(movie)}
                  image={movie.image}

                  classModifier="movie_hidden"/>
              );
            })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
