import './SearchMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchMovies() {
  return(
    <section className="search-movies">
      <SearchForm />
      <FilterCheckbox />
    </section>
  );
}

export default SearchMovies;
