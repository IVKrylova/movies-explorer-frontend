import './Title.css';

const Title = props => {
  return (
    <h1 className={`title ${props.classModifier ? props.classModifier : ''}`}>
      {props.titleText}
    </h1>
  );
}

export default Title;
