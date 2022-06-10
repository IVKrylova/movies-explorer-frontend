import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import * as EmailValidator from 'email-validator';

const Register = props => {
  // запускаем валидацию формы
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  // сообщение о некорректном email
  const emailErrorMessage = !EmailValidator.validate(values.email) && values.email !== undefined ? 'Hекорректный email' : '';

  // обраотчик формы регистрации
  const handleSubmit = evt => {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // передаём значения управляемых компонентов во внешний обработчик
      props.sendProperty({
        name: values.name,
        email: values.email,
        password: values.password,
    });
  }

  return (
    <Auth titleText="Добро пожаловать!"
      nameForm="register"
      buttonText="Зарегистрироваться"
      authorizationText="Уже зарегистрированы?"
      authorizationLink="Войти"
      authorizationPatch="/signin"
      onSubmitRegister={handleSubmit}
      currentUrl={props.currentUrl}
      isValid={isValid}
      errorMessage={props.errorMessage}
      isRegistred={props.isRegistred}
      onResetForm={resetForm}>
      {/* Поле для имени */}
      <label className="authorization__form-label">Имя</label>
      <FormInput type="text"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="name"
        minLength="2"
        maxLength="30"
        id="register-form-name"
        value={values.name || ''}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я\s-]+$" />
      <FormErrorMessage isValid={isValid}
        errorMessage={errors.name} />
      {/* Поле для email */}
      <label className="authorization__form-label">E-mail</label>
      <FormInput type="email"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="email"
        id="register-form-email"
        value={values.email || ''}
        onChange={handleChange} />
      <FormErrorMessage isValid={isValid}
        errorMessage={emailErrorMessage} />
      {/* Поле для пароля */}
      <label className="authorization__form-label">Пароль</label>
      <FormInput type="password"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="password"
        id="register-form-password"
        value={values.password || ''}
        onChange={handleChange} />
      <FormErrorMessage isValid={isValid}
        errorMessage={errors.password} />
    </Auth>
    );
  }

export default Register;
