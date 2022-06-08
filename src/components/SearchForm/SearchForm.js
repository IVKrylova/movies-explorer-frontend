import './SearchForm.css';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const SearchForm = props => {
  // запускаем валидацию формы
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  // обраотчик формы
  function handleSubmit(evt) {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // передаём значения управляемых компонентов во внешний обработчик
    props.sendProperty({
      movie: values.movie,
    });
  }

  return (
    <form className="form search-form" name="search-form" id="search-form" noValidate
      onSubmit={handleSubmit} >
      <input className="search-form__input" type="text" name="movie" id="movie" placeholder="Фильм" required
        value={values.movie || ''}
        onChange={handleChange} />
      <FormButton buttonText='Поиск'
        classNameButton='search-form__button' />
    </form>
  );
}

export default SearchForm;
