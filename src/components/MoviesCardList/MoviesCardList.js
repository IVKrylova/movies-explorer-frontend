import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { IMAGE_URL } from '../../utils/constants';

const MoviesCardList = props => {
  // рассчет длительности фильма
  const calcDuration = movie => {
    return parseInt(movie.duration / 60) > 0 ?
      `${parseInt(movie.duration / 60)}ч ${movie.duration % 60}м` :
      `${movie.duration % 60}м`;
  }

  return (
    <section className={`movies-cards`}
      aria-label="Блок с фильмами">
      <ul className="movies-list">
        {props.movies && props.movies.map(movie => {
          return (
            <MoviesCard key={props.currentUrl === '/movies' ?
              movie.id : movie._id}
              _id={props.currentUrl === '/movies' ?
                movie.id : movie._id}
              movieId={props.currentUrl === '/movies' ?
                movie.id : movie.movieId}
              nameRU={movie.nameRU}
              durationInCard={calcDuration(movie)}
              image={props.currentUrl === '/movies' ?
                `${IMAGE_URL}${movie.image.url}` :
                movie.image}
              currentUrl={props.currentUrl}
              idCardHovered={props.idCardHovered}
              onMouseOver={props.onMouseOver}
              onMouseOut={props.onMouseOut}
              amountMovies={props.amountMovies}
              index={props.movies.indexOf(movie)}
              onMovieLike={props.onMovieLike}
              onDeleteMovie={props.onDeleteMovie}
              country={movie.country}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              trailerLink={movie.trailerLink}
              thumbnail={props.currentUrl === '/movies' ?
                `${IMAGE_URL}${movie.image.formats.thumbnail.url}` :
                movie.thumbnail}
              nameEN={movie.nameEN} />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
