import './FormButton.css';

function FormButton(props) {
  return (
    <button type="submit" className={`form-button ${props.classNameButton}`}>{props.buttonText}</button>
  );
}

export default FormButton;
