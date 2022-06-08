import './Movies.css';
import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';

const Movies = props => {
  return (
    <main className="movies">
      <SearchMovies />
      <Preloader />
      {props.isFirstOpen &&
        <Message />
      }
      {!props.isFirstOpen &&
        <>
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
