import './SectionTitle.css';

const SectionTitle = props => {
  return (
    /* ToDo белая линия при зазрешении > 768px в techs */
    /* ToDo добавть модификатор при разрешении > 768px about-me*/
    <h2 className={`section-title ${props.classModifier}`}>{props.titleText}</h2>
  );
}

export default SectionTitle;
