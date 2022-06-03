import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = _ => {
  return (
    <main className="register">
      <Logo />
      <Title titleText="Добро пожаловать!"
        classModirier="title_place_auth" />
      <form className="register__form" name="register__form">
        {/* Поле для имени */}
        <label className="register__form-label">Имя</label>
        <FormInput type="text"
          classModirier="form-input_place_auth"
          formName="profile-form"
          name="name"
          minLength="2"
          maxLength="30" />
        {/* Поле для email */}
        <label className="register__form-label">E-mail</label>
        <FormInput type="email"
          classModirier="form-input_place_auth"
          formName="profile-form"
          name="email" />
        {/* Поле для пароля */}
        <label className="register__form-label">Пароль</label>
        <FormInput type="password"
          classModirier="form-input_place_auth"
          formName="profile-form"
          name="password" />
        <FormButton classNameButton="register__form-button"
          buttonText="Зарегистрироваться" />
      </form>
      <p className="register__text">
        Уже зарегистрированы?{'\u00A0'}
        <Link to="/signin" className="register__link">Войти</Link>
      </p>
    </main>
  );
}

export default Register;
