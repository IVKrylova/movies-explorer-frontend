import './Navigation.css';
import burgerMenu from '../../images/header-icon-menu.svg';
import { Link } from 'react-router-dom';
import ButtonToAccount from '../ButtonToAccount/ButtonToAccount';

const Navigation = props => {
  return (
    <section className={`navigation ${props.currentUrl === '/' ? 'navigation_hidden' : ''}`}>
      {/* иконка бургерного меню */}
      <img src={burgerMenu} alt="меню навигации"
        className={`navigation__burger-menu ${props.isOpenMenu ? 'navigation__burger-menu_hidden' : ''}`}
        onClick={props.onClickMenu} />
      {/* выпадающее меню */}
      <div className={`navigation__drop-down-menu ${props.isOpenMenu ? '' : 'navigation__drop-down-menu_hidden'}`}>
        <button type="button" className="navigation__button-close" aria-label="кнопка закрыть"
          onClick={props.onClickButtonClose}></button>
        <ul className="navigation__list">
          <li>
            <Link to="/" className={`navigation__link ${props.currentUrl === '/' ? 'navigation__link_active' : ''}`}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/movies" className={`navigation__link ${props.currentUrl === '/movies' ? 'navigation__link_active' : ''}`}>
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className={`navigation__link ${props.currentUrl === '/saved-movies' ? 'navigation__link_active' : ''}`}>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="navigation__link-to-account">
          <ButtonToAccount />
        </Link>
      </div>
      {/* меню для десктопа */}
      <div className="navigation__desktop-menu">
        <ul className="navigation__desktop-list">
          <li>
            <Link to="/movies" className={`navigation__link ${props.currentUrl === '/movies' ? 'navigation__link_active' : ''}`}>
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className={`navigation__link ${props.currentUrl === '/saved-movies' ? 'navigation__link_active' : ''}`}>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="navigation__link-to-account navigation__link-to-account_place_desktop-menu">
          <ButtonToAccount />
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
