import Logo from '../Logo/Logo';
import FormButton from '../FormButton/FormButton';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import './Auth.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Auth = props => {
  return (
    <main className="authorization">
      <Logo classModifier="logo_place_auth" />
      <Title titleText={props.titleText}
        classModifier="title_place_auth" />
      <form className="authorization__form" name={`${props.nameForm}-form`}>
        {props.children}
        <ErrorMessage errorMessage="" /> {/* ToDo: если есть ошибка, то выводим ошибку, если нет, то пустую строку */}
        <FormButton classNameButton="authorization__form-button"
          buttonText={props.buttonText} />
      </form>
      <p className="authorization__text">
        {props.authorizationText}{'\u00A0'}
        <Link to={props.authorizationPatch} className="authorization__link">{props.authorizationLink}</Link>
      </p>



    </main>
  );
}

export default Auth;
