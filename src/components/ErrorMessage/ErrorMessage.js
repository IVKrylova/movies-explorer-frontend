import './ErrorMessage.css';

const ErrorMessage = props => {
  return (
    <p className="error-message">
      {props.errorMessage ? props.errorMessage : ''}
    </p>
  );
}

export default ErrorMessage;
