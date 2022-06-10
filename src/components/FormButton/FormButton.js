import './FormButton.css';

const FormButton = props => {
  return (
    <button type="submit" disabled={!props.isValid}
      className={`form-button ${props.classNameButton} ${props.isValid ? '' : 'authorization__form-button_disabled'}`}>
      {props.buttonText}
    </button>
  );
}

export default FormButton;
