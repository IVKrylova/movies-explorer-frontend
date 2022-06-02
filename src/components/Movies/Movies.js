import './Movies.css';
import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';

function Movies(props) {
  return (
    <main className="movies">
      <SearchMovies />
      <Preloader />
      <MoviesCardList movies={props.movies}
        currentUrl={props.currentUrl} />
      <ButtonMore buttonText={'Ещё'}
        classModifier={'button-more__place_movies'} />
    </main>
  );
}

export default Movies;
