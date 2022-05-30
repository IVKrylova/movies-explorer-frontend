import './SearchForm.css';
import FormButton from '../FormButton/FormButton';

function SearchForm() {
  return (
    <form className="search-form" name="search-form" id="search-form" >
      <input className="search-form__input" type="text" name="movie" id="movie" placeholder="Фильм" required />
      <FormButton buttonText='Поиск'
        classNameButton='search-form__button' />
    </form>
  );
}

export default SearchForm;
