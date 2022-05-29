import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <h2 className={`section-title ${props.classModifier}`}>{props.titleText}</h2>
  );
}

export default SectionTitle;
