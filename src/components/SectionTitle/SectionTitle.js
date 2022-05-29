import './SectionTitle.css';

function SectionTitle(props) {
  return (
    /* ToDo белая линия при зазрешении > 768px в techs */
    <h2 className={`section-title ${props.classModifier}`}>{props.titleText}</h2>
  );
}

export default SectionTitle;
