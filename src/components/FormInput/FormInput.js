import './FormInput.css';

const FormInput = props => {
  // обработчик изменения инпута
  const handleChange = _ => {
    // ToDo: перенести обработчик в хук валидации формы
  }

  return (
    <input type={props.type}
      className={`form-input ${props.classModifier}`}
      id={props.id}
      name={props.name}
      minLength={props.minLength}
      maxLength={props.maxLength}
      value={props.value}
      required
      onChange={handleChange} />
  );
}

export default FormInput;
