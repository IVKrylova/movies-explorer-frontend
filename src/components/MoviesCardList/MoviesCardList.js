import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

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
            <MoviesCard key={movie.id}
              id={movie.id}
              nameRU={movie.nameRU}
              duration={calcDuration(movie)}
              image={movie.image}
              currentUrl={props.currentUrl}
              idCardHovered={props.idCardHovered}
              onMouseOver={props.onMouseOver}
              onMouseOut={props.onMouseOut} />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
