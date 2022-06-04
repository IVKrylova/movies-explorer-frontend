import './FormErrorMessage.css';

const FormErrorMessage = props => {
  return (
    <span className={`input-error`}>
      {props.errorMessage}
    </span>
  );
}

export default FormErrorMessage;
