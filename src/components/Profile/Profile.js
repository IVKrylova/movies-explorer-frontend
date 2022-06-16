import { useContext, useEffect } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import FormInpit from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import * as EmailValidator from 'email-validator';

const Profile = props => {
  // подписываемся на контекст CurrentUserContext
  const currentUser = useContext(CurrentUserContext);
  // запускаем валидацию формы
  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormAndValidation();
  // сообщение о некорректном email
  const emailErrorMessage = !EmailValidator.validate(values.email) && values.email !== undefined ? 'Hекорректный email' : '';

  // обраотчик формы изменения данных профиля
  const handleSubmit = evt => {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // передаём значения управляемых компонентов во внешний обработчик
      props.sendProperty({
        name: values.name,
        email: values.email,
    });
  }

  // устанавливаем данные пользователя в поля формы при загрузке страницы
  useEffect(_ => {
    setValues({ name: currentUser.name, email: currentUser.email});
    setErrors({});
    setIsValid(true);
  }, []);

  // устанавливаем данные пользователя в поля формы при изменении данных пользователя
  useEffect(_ => {
    setValues({ name: currentUser.name, email: currentUser.email});
    setErrors({});
    setIsValid(true);
  }, [currentUser]);



  return (
    <main className="profile">
      <Title titleText={`Привет, ${currentUser.name}!`} />
      <form className="profile__form" name="profile__form" onSubmit={handleSubmit} noValidate>
        {/* Поле для имени */}
        <fieldset className="profile__form-fieldset" disabled={!props.isButtonEditPressed}>
          <label className="profile__form-label">Имя</label>
          <FormInpit
            type="text"
            classModifier="form-input_place_profile"
            formName="profile-form"
            name="name"
            minLength="2"
            maxLength="30"
            id="profile-form-name"
            value={values.name || ''}
            onChange={handleChange}
          />
        </fieldset>
        <FormErrorMessage
          isValid={isValid}
          errorMessage={errors.name}
          currentUrl={props.currentUrl}
        />
        {/* Поле для email */}
        <fieldset className="profile__form-fieldset" disabled={!props.isButtonEditPressed}>
          <label className="profile__form-label">E-mail</label>
          <FormInpit
            type="email"
            classModifier="form-input_place_profile"
            formName="profile-form"
            name="email"
            id="profile-form-email"
            value={values.email || ''}
            onChange={handleChange}
          />
        </fieldset>
        <FormErrorMessage
          isValid={isValid}
          errorMessage={emailErrorMessage}
          currentUrl={props.currentUrl}
        />
        <ErrorMessage errorMessage={props.errorMessage} />
        <FormButton
          classNameButton={`profile__form-button ${props.isButtonEditPressed ? '' : 'profile__form-button_invisible'}`}
          buttonText="Сохранить"
          currentUrl={props.currentUrl}
          isValid={isValid}
        />
      </form>
      <ul className={`buttons-list ${props.isButtonEditPressed ? 'buttons-list_invisible' : ''}`}>
        <li>
          <button type="button" className="buttons-list__button" onClick={props.onClickEdit}>
            Редактировать
          </button>
        </li>
        <li>
          <button type="button" className="buttons-list__button buttons-list__button_color_red" onClick={props.onExit}>
            Выйти из аккаунта
          </button>
        </li>
      </ul>
    </main>
  );
}

export default Profile;
