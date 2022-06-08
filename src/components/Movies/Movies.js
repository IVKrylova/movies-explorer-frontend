import './Movies.css';
import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';

const Movies = props => {
  return (
    <main className="movies">
      <SearchMovies sendProperty={props.sendProperty}
        onClick={props.onClick}
        isShortFilm={props.isShortFilm} />
      <Preloader />
      {props.isFirstOpen &&
        <Message message='Начните поиск'
          movies={props.movies} />
      }
      {!props.isFirstOpen &&
        <>
          <Message message='Ничего не найдено'
            movies={props.movies} />
          <MoviesCardList movies={props.movies}
          currentUrl={props.currentUrl} />
          <ButtonMore buttonText={'Ещё'}
          classModifier={'button-more__place_movies'}
          movies={props.movies} />
        </>
      }
    </main>
  );
}

export default Movies;
