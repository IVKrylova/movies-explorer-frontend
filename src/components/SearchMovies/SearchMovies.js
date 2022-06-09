import './SearchMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchMovies = props => {
  return(
    <section className="search-movies">
      <SearchForm sendProperty={props.sendProperty}
        currentUrl={props.currentUrl} />
      <FilterCheckbox onClick={props.onClick}
        isShortFilm={props.isShortFilm}
        currentUrl={props.currentUrl} />
    </section>
  );
}

export default SearchMovies;
