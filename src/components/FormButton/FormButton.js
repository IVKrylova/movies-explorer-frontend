import './FormButton.css';

const FormButton = props => {
  const classNameDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ?
    'authorization__form-button_disabled' : '';
  const buttonDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ||
    (!props.isValid && props.currentUrl === '/profile') ?
    true : false;

  return (
    <button type="submit" disabled={buttonDisabled}
      className={`form-button ${props.classNameButton} ${classNameDisabled} ${!props.isValid && props.currentUrl === '/profile' ? 'profile__form-button_disabled' : ''}`}>
      {props.buttonText}
    </button>
  );
}

export default FormButton;
