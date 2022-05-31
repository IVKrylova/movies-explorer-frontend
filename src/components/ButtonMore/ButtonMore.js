import Button from '../Button/Button';
import './ButtonMore.css';

function ButtonMore(props) {
  return (
    <Button buttonText={props.buttonText} buttonClassName={`button-more ${props.classModifier}`} />
  );
}

export default ButtonMore;
