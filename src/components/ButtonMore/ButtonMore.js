import Button from '../Button/Button';
import './ButtonMore.css';

const ButtonMore = props => {
  return (
    <Button buttonText={props.buttonText}
      buttonClassName={`button-more ${props.classModifier} ${props.movies ? '' : 'button-more_hidden'}`} />
  );
}

export default ButtonMore;
