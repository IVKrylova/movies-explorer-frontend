import Button from '../Button/Button';
import './ButtonMore.css';

const ButtonMore = props => {
  // определяем className для кнопки
  const buttonClassName = (props.classModifier === 'button-more__place_movies' && props.movies.length <= props.amountMovies) ?
    'button-more_hidden' : '';

  return (
    <Button
      buttonText={props.buttonText}
      buttonClassName={`button-more ${props.classModifier} ${buttonClassName}`}
      onClick={props.onClick}
      currentUrl={props.currentUrl}
    />
  );
}

export default ButtonMore;
