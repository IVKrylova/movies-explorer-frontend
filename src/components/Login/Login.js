import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import * as EmailValidator from 'email-validator';

const Login = props => {
  // запускаем валидацию формы
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  // сообщение о некорректном email
  const emailErrorMessage = !EmailValidator.validate(values.email) && values.email !== undefined ? 'Hекорректный email' : '';

  // обраотчик формы авторизации
  const handleSubmit = evt => {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // передаём значения управляемых компонентов во внешний обработчик
      props.sendProperty({
        email: values.email,
        password: values.password,
    });
  }

  return (
    <Auth titleText="Рады видеть!"
      nameForm="login"
      buttonText="Войти"
      authorizationText="Ещё не зарегистрированы?"
      authorizationLink="Регистрация"
      authorizationPatch="/signup"
      onSubmitLogin={handleSubmit}
      currentUrl={props.currentUrl}
      isValid={isValid}
      errorMessage={props.errorMessage}
      loggedIn={props.loggedIn}
      onResetForm={resetForm}>
      {/* Поле для email */}
      <label className="authorization__form-label">E-mail</label>
        <FormInput type="email"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="email"
          id="login-form-email"
          value={values.email || ''}
          onChange={handleChange} />
        <FormErrorMessage isValid={isValid}
          errorMessage={emailErrorMessage} />
        {/* Поле для пароля */}
        <label className="authorization__form-label">Пароль</label>
        <FormInput type="password"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="password"
          id="login-form-password"
          value={values.password || ''}
          onChange={handleChange} />
        <FormErrorMessage isValid={isValid}
          errorMessage={errors.password} />
    </Auth>
  );
}

export default Login;
