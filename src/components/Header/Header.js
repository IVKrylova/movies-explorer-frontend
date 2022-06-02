import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import ButtonInHeader from '../ButtonInHeader/ButtonInHeader';
import Navigation from '../Navigation/Navigation';

const Header = props => {
  return (
    <header className={`header ${props.currentUrl === '/' ? 'header_place_landing' : 'header_place_app'}`}>
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className={`header__landing-menu ${props.currentUrl === '/' ? '' : 'header__landing-menu_hidden'}`}>
        <Link to="/signup" className="header__link">Регистрация</Link>
        <ButtonInHeader />
      </div>
      <Navigation currentUrl={props.currentUrl}
        isOpenMenu={props.isOpenMenu}
        onClickMenu={props.onClickMenu}
        onClickButtonClose={props.onClickButtonClose} />
    </header>
  );
}

export default Header;
