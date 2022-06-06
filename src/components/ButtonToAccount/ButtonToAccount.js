import Button from '../Button/Button';
import './ButtonToAccount.css';

const ButtonToAccount = props => {
  return (
    <Button buttonText={'Аккаунт'} buttonClassName={`button__account ${props.classModifier ? props.classModifier : ''}`} />
  );
}

export default ButtonToAccount;
