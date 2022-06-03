import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = props => {
  return (
    <Link to="/" className={`logo ${props.classModifier ? props.classModifier : ''}`}>
      <img src={logo} alt="Логотип" />
    </Link>
  );
}

export default Logo;
