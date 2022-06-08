import './SearchForm.css';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useState } from 'react';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

const SearchForm = props => {
  // запускаем валидацию формы
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();
  // стейт кнопки в форме поиска на странице с фильмами
  const [isPressed, setIsPressed] = useState(false);

  // обраотчик формы
  function handleSubmit(evt) {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    setIsPressed(true);
    // передаём значения управляемых компонентов во внешний обработчик
    isValid &&
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
      <FormErrorMessage errorMessage='Нужно ввести ключевое слово'
        isValid={isValid}
        isPressed={isPressed} />
      <FormButton buttonText='Поиск'
        classNameButton='search-form__button' />
    </form>
  );
}

export default SearchForm;
