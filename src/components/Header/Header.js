import './Header.css';
import { Link } from 'react-router-dom';
import ButtonInHeader from '../ButtonInHeader/ButtonInHeader';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = props => {
  return (
    <header className={`header ${props.currentUrl === '/' ? 'header_place_landing' : 'header_place_app'}`}>
      <Logo />
      <div className={`header__landing-menu ${props.currentUrl === '/' && !props.loggedIn ? '' : 'header__landing-menu_hidden'}`}>
        <Link to="/signup" className="header__link">Регистрация</Link>
        <ButtonInHeader />
      </div>
      <Navigation
        currentUrl={props.currentUrl}
        isOpenMenu={props.isOpenMenu}
        onClickMenu={props.onClickMenu}
        onClickButtonClose={props.onClickButtonClose}
        loggedIn={props.loggedIn}
      />
    </header>
  );
}

export default Header;
