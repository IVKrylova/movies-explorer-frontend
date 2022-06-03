import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = _ => {
  return (
    <mail className="login">
      <Logo classModifier="logo_place_auth" />
      <Title titleText="Рады видеть!"
        classModifier="title_place_auth" />
      <form className="login__form" name="login-form">
        {/* Поле для email */}
        <label className="login__form-label">E-mail</label>
        <FormInput type="email"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="email" />
        {/* Поле для пароля */}
        <label className="login__form-label">Пароль</label>
        <FormInput type="password"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="password" />
        <FormButton classNameButton="login__form-button"
          buttonText="Войти" />
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?{'\u00A0'}
        <Link to="/signup" className="register__link">Регистрация</Link>
      </p>
    </mail>
  );
}

export default Login;
