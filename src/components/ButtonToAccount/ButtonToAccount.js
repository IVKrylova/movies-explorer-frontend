import Button from '../Button/Button';
import './ButtonToAccount.css';

function ButtonToAccount(props) {
  return (
    <Button buttonText={'Аккаунт'} buttonClassName={`button__account ${props.classModifier}`} />
  );
}

export default ButtonToAccount;
