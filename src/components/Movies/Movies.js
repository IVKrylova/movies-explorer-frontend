import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className="movies">
      <section className="search-films">
        <SearchForm />
        <FilterCheckbox />
      </section>
      <Preloader />
      <MoviesCardList  movies={props.movies}/>
    </main>
  );
}

export default Movies;
