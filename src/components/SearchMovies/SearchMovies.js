import './SearchMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchMovies = props => {
  return(
    <section className="search-movies">
      <SearchForm sendProperty={props.sendProperty} />
      <FilterCheckbox onClick={props.onClick}
        isShortFilm={props.isShortFilm} />
    </section>
  );
}

export default SearchMovies;
