import './SearchForm.css';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useState, useEffect } from 'react';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

const SearchForm = props => {
  // запускаем валидацию формы
  const { values, handleChange, isValid, setValues } = useFormAndValidation();
  // стейт кнопки в форме поиска
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

  // устанавливаем значение в форме из localstorage для страницы movies
  useEffect(_ => {
    if (props.currentUrl === '/movies') {
      setValues({ movie: localStorage.searchRequest });
    }
  }, []);

  return (
    <form
      className="form search-form"
      name="search-form"
      id="search-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input className="search-form__input"
        type="text"
        name="movie"
        id="movie"
        placeholder="Фильм"
        required
        value={values.movie || ''}
        onChange={handleChange}
      />
      <FormErrorMessage
        errorMessage='Нужно ввести ключевое слово'
        isValid={isValid}
        isPressed={isPressed}
        currentUrl={props.currentUrl}
      />
      <FormButton
        buttonText='Поиск'
        classNameButton='search-form__button'
        currentUrl={props.currentUrl}
      />
    </form>
  );
}

export default SearchForm;
