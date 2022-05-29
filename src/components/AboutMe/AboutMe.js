import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import myPhoto from '../../images/my-photo.png';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle titleText="Студент"
        classModifier="section-title_width_max" />
      <img alt="фото Ирина Крылова" className="about-me__photo" src={myPhoto} />
      <div className="about-me__content">
        <h3 className="about-me__name">Ирина</h3>
        <ul className="about-me__description">
          <li className="about-me__text">
            Фронтенд-разработчик, 30 лет
          </li>
          <li className="about-me__text">
            Я живу в Нижнем Новгороде, закончила химический факультет ННГУ
            им. Лобачевского. С 2015 г. работала младшим научным сотрудником
            в НИИ, затем перешла в коммерческую лабораторию. С 2018 г. интересуюсь
            веб-разработкой. Для меня курс в Яндекс.Практикуме - возможность
            превтарить свое увлечение в постоянную работу.
          </li>
        </ul>
        <ul className="about-me__links">
          <li>
            <a className="about-me__link" rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100081488482267">
              Facebook
            </a>
          </li>
          <li className="about-me__link">
            <a className="about-me__link" rel="noreferrer" target="_blank" href="https://github.com/IVKrylova">
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
