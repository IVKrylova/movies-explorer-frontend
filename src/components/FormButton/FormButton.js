import './FormButton.css';

const FormButton = props => {
  // определяем className для неактивной кнопки в формах регистрации/авторизации
  const classNameDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ?
    'authorization__form-button_disabled' : '';
  // определяем className для неактивной кнопки в форме редактирования профиля
  const classNameDisabledInProfile = (!props.isValid && props.currentUrl === '/profile') ?
    'profile__form-button_disabled' : '';
  // определяем активность/неактивность кнопки
  const buttonDisabled = (!props.isValid && props.currentUrl === '/signup') ||
    (!props.isValid && props.currentUrl === '/signin') ||
    (!props.isValid && props.currentUrl === '/profile') ?
    true : false;

  return (
    <button
      type="submit"
      disabled={buttonDisabled}
      className={`form-button ${props.classNameButton} ${classNameDisabled} ${classNameDisabledInProfile}`}
    >
      {props.buttonText}
    </button>
  );
}

export default FormButton;
