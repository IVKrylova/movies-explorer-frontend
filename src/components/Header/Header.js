import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import ButtonInHeader from '../ButtonInHeader/ButtonInHeader';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Link to="/signup" className="header__link">Регистрация</Link>
      <ButtonInHeader />
    </header>
  );
}

export default Header;
