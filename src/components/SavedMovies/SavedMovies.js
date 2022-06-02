import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovies from '../SearchMovies/SearchMovies';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <SearchMovies />
      <Preloader />
      <MoviesCardList movies={props.movies}
        currentUrl={props.currentUrl} />
    </main>
  );
}

export default SavedMovies;
