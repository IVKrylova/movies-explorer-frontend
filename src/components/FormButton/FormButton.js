import './FormButton.css';

const FormButton = props => {
  return (
    <button type="submit" className={`form-button ${props.classNameButton}`}>{props.buttonText}</button>
  );
}

export default FormButton;
