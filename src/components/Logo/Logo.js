import './Logo.css';
import logo from '../../images/logo.svg';

const Logo = props => {
  return (
    <img className={`logo ${props.classModifier ? props.classModifier : ''}`}
      src={logo} alt="Логотип" />
  );
}

export default Logo;
