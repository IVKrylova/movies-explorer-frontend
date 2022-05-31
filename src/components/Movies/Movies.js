import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';

function Movies(props) {
  return (
    <main className="movies">
      <section className="search-films">
        <SearchForm />
        <FilterCheckbox />
      </section>
      <Preloader />
      <MoviesCardList  movies={props.movies}/>
      <ButtonMore buttonText={'Ещё'}
        classModifier={'button-more__place_movies'} />
    </main>
  );
}

export default Movies;
