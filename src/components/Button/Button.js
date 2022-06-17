import './Button.css';

const Button = props => {
  return (
    <button type="button" className={`button ${props.buttonClassName}`}
      onClick={props.currentUrl === '/movies' ? props.onClick : undefined}>
      {props.buttonText}
    </button>
  );
}

export default Button;
