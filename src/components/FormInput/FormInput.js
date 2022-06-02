import './FormInput.css';

const FormInput = props => {
  // ToDo: перенести обработчик в хук валидации формы
  // обработчик изменения инпута
  const handleChange = _ => {

  }

  return (
    <input type={props.type}
      className={`form-input ${props.classModirier}`}
      id={`${props.formName}-name`}
      name={props.name}
      minLength={props.minLength}
      maxLength={props.maxLength}
      value={props.value}
      required
      onChange={handleChange} />
  );
}

export default FormInput;
