import './Portfolio.css'
import linkIcon from '../../images/portfolio-link-icon.svg'

const Portfolio = _ => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" href="https://ivkrylova.github.io/how-to-learn/index.html" rel="noreferrer">
            Статичный сайт
          </a>
          <img src={linkIcon} alt="иконка-стрелка для ссылки на другой сайт" className="portfolio__icon" />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" href="https://ivkrylova.github.io/russian-travel/" rel="noreferrer">
            Адаптивный сайт
          </a>
          <img src={linkIcon} alt="иконка-стрелка для ссылки на другой сайт" className="portfolio__icon" />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" href="https://ivkrylova.github.io/react-mesto-auth/sign-in" rel="noreferrer">
            Одностраничное приложение
          </a>
          <img src={linkIcon} alt="иконка-стрелка для ссылки на другой сайт" className="portfolio__icon" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
