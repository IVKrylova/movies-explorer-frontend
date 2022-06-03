import './ButtonInHeader.css';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const ButtonInHeader = _ => {
  return (
    <Link to="/signin" className="header__link-button">
      <Button buttonText={'Войти'} buttonClassName={'button__header'} />
    </Link>
  );
}

export default ButtonInHeader;
