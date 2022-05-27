import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <maim className="saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </maim>
  );
}

export default SavedMovies;
