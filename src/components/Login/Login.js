import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

const Login = _ => {
  return (
    <Auth titleText="Рады видеть!"
      nameForm="login"
      buttonText="Войти"
      authorizationText="Ещё не зарегистрированы?"
      authorizationLink="Регистрация"
      authorizationPatch="/signup">
      {/* Поле для email */}
      <label className="authorization__form-label">E-mail</label>
        <FormInput type="email"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="email"
          id="login-form-email" />
        <FormErrorMessage />
        {/* Поле для пароля */}
        <label className="authorization__form-label">Пароль</label>
        <FormInput type="password"
          classModifier="form-input_place_auth"
          formName="login-form"
          name="password"
          id="login-form-password" />
        <FormErrorMessage />
    </Auth>
  );
}

export default Login;
