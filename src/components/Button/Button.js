import './Button.css';

const Button = props => {
  return (
    <button type="button" className={`button ${props.buttonClassName}`}>
      {props.buttonText}
    </button>
  );
}

export default Button;
