import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = _ => {
  return (
    <section className="about-project">
      <SectionTitle titleText='О проекте' />
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__item-text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__item-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__timing timing">
        <li className="timing__item">
          <p className="timing__period timing__period_backend">1 неделя</p>
          <p className="timing__work">Back-end</p>
        </li>
        <li className="timing__item">
          <p className="timing__period timing__period_frontend">4 недели</p>
          <p className="timing__work">Front-end</p>
        </li>
      </ul>
    </section>
  );
}
export default AboutProject;
