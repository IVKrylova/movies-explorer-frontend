import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovies from '../SearchMovies/SearchMovies';

const SavedMovies = props => {
  return (
    <main className="saved-movies">
      <SearchMovies />
      <Preloader />
      <MoviesCardList movies={props.movies}
        currentUrl={props.currentUrl}
        idCardHovered={props.idCardHovered}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut} />
    </main>
  );
}

export default SavedMovies;
