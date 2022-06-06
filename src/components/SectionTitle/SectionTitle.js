import './SectionTitle.css';
import '../../hooks/useWindowWidth';
import useWindowWidth from '../../hooks/useWindowWidth';

const SectionTitle = props => {
  // получаем ширину экрана
  const screenWidth = useWindowWidth();

  return (
    <h2 className={`section-title ${props.colorLine && screenWidth <= 768 ? props.colorLine : ''} ${props.sizeMaxWidtx && screenWidth >= 768 ? props.sizeMaxWidtx : ''}`}>
      {props.titleText}
    </h2>
  );
}

export default SectionTitle;
