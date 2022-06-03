import './SectionTitle.css';

const SectionTitle = props => {
  return (
    /* ToDo: белая линия при зазрешении > 768px в techs => resize */
    /* ToDo: добавть модификатор при разрешении > 768px about-me => resize */
    <h2 className={`section-title ${props.classModifier ? props.classModifier : ''}`}>
      {props.titleText}
    </h2>
  );
}

export default SectionTitle;
