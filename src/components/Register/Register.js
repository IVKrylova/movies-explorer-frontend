import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';

const Register = _ => {
  return (
    <Auth titleText="Добро пожаловать!"
      nameForm="register"
      buttonText="Зарегистрироваться"
      authorizationText="Уже зарегистрированы?"
      authorizationLink="Войти"
      authorizationPatch="/signin">
      {/* Поле для имени */}
      <label className="authorization__form-label">Имя</label>
      <FormInput type="text"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="name"
        minLength="2"
        maxLength="30" />
      {/* Поле для email */}
      <label className="authorization__form-label">E-mail</label>
      <FormInput type="email"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="email" />
      {/* Поле для пароля */}
      <label className="authorization__form-label">Пароль</label>
      <FormInput type="password"
        classModifier="form-input_place_auth"
        formName="register-form"
        name="password" />
    </Auth>
    );
  }

export default Register;
