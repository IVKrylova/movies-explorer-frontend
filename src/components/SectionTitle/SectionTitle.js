import './SectionTitle.css';
import '../../hooks/useWindowWidth';
import useWindowWidth from '../../hooks/useWindowWidth';

const SectionTitle = props => {
  // получаем ширину экрана
  const screenWidth = useWindowWidth();
  // className для цвета линии
  const titleLineColor = props.colorLine && screenWidth <= 768 ? props.colorLine : '';
  // className для ширины линии
  const titleLineWidth = props.sizeMaxWidtx && screenWidth >= 768 ? props.sizeMaxWidtx : '';

  return (
    <h2 className={`section-title ${titleLineColor} ${titleLineWidth}`}>
      {props.titleText}
    </h2>
  );
}

export default SectionTitle;
