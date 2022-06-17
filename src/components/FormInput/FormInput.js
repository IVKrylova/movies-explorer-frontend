import './FormInput.css';

const FormInput = props => {
  return (
    <input
      type={props.type}
      className={`form-input ${props.classModifier}`}
      id={props.id}
      name={props.name}
      minLength={props.minLength}
      maxLength={props.maxLength}
      value={props.value}
      required
      onChange={props.onChange}
      pattern={props.pattern}
    />
  );
}

export default FormInput;
