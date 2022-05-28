import './Button.css';

function Button(props) {
  return (
    <button type="button" className={`button ${props.buttonClassName}`}>
      {props.buttonText}
    </button>
  );
}

export default Button;
