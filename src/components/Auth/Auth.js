import Logo from '../Logo/Logo';
import FormButton from '../FormButton/FormButton';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import './Auth.css';

const Auth = props => {
  return (
    <mail className="authorization">
      <Logo classModifier="logo_place_auth" />
      <Title titleText={props.titleText}
        classModifier="title_place_auth" />
      <form className="authorization__form" name={`${props.nameForm}-form`}>
        {props.children}
        <FormButton classNameButton="authorization__form-button"
          buttonText={props.buttonText} />
      </form>
      <p className="authorization__text">
        {props.authorizationText}{'\u00A0'}
        <Link to={props.authorizationPatch} className="authorization__link">{props.authorizationLink}</Link>
      </p>
    </mail>
  );
}

export default Auth;
