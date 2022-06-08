import Button from '../Button/Button';
import './ButtonMore.css';

const ButtonMore = props => {
  return (
    <Button buttonText={props.buttonText}
      buttonClassName={`button-more ${props.classModifier}
        ${props.classModifier === 'button-more__place_movies' && props.movies.length <= props.amountMovies ? 'button-more_hidden' : ''}`}
      onClick={props.onClick}
      currentUrl={props.currentUrl} />
  );
}

export default ButtonMore;
