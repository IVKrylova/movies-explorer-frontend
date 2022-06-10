import './FormButton.css';

const FormButton = props => {
  const classNameDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ?
    'authorization__form-button_disabled' : '';
  const buttonDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ?
    true : false;

  return (
    <button type="submit" disabled={buttonDisabled}
      className={`form-button ${props.classNameButton} ${classNameDisabled}`}>
      {props.buttonText}
    </button>
  );
}

export default FormButton;
