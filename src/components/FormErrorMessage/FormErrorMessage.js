import './FormErrorMessage.css';

const FormErrorMessage = props => {
  return (
    <span className={`input-error ${!props.isValid && props.isPressed ? 'input-error_active' : ''}`}>
      {!props.isValid && props.errorMessage}
    </span>
  );
}

export default FormErrorMessage;
