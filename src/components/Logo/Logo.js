import './Logo.css';
import logo from '../../images/logo.svg';

const Logo = _ => {
  return (
    <img className="logo" src={logo} alt="Логотип" />
  );
}

export default Logo;
