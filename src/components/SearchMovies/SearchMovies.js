import './SearchMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchMovies = _ => {
  return(
    <section className="search-movies">
      <SearchForm />
      <FilterCheckbox />
    </section>
  );
}

export default SearchMovies;
