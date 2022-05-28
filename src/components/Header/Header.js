import './Header.css';
import logo from '../../images/logo.svg';
import iconMenu from '../../images/header-icon-menu.svg';
import { Link } from 'react-router-dom';
import ButtonInHeader from '../ButtonInHeader/ButtonInHeader';
import ButtonToAccount from '../ButtonToAccount/ButtonToAccount';
import { useLocation } from 'react-router';

function Header() {
  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <header className={`header ${currentUrl === '/' ? 'header_place_landing' : 'header_place_app'}`}>
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className={`header__landing-menu ${currentUrl === '/' ? '' : 'header__landing-menu_hidden'}`}>
        <Link to="/signup" className="header__link">Регистрация</Link>
        <ButtonInHeader />
      </div>
      <div className={`header__app-menu ${currentUrl === '/' ? 'header__app-menu_hidden' : ''}`}>
        <img className="header__icon-menu header__icon-menu_hidden" src={iconMenu} alt="Иконка меню" />
        <ButtonToAccount />
      </div>
    </header>
  );
}

export default Header;
