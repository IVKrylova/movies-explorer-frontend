import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <main className="movies">
      <section className="search-films">
        <SearchForm />
        <FilterCheckbox />
      </section>
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </main>
  );
}

export default Movies;
