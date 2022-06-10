import './FormErrorMessage.css';

const FormErrorMessage = props => {
  return (
    <>
      {(props.currentUrl === '/signin' || props.currentUrl === '/signup') &&
        <span className={`input-error ${!props.isValid ? 'input-error_active' : ''}`}>
          {!props.isValid && props.errorMessage}
        </span>
      }
      {(props.currentUrl === '/movies' || props.currentUrl === '/saved-movies') &&
        <span className={`input-error ${!props.isValid && props.isPressed ? 'input-error_active' : ''}`}>
          {!props.isValid && props.errorMessage}
        </span>
      }
    </>
  );
}

export default FormErrorMessage;
