import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <ul className="footer__links">
        <li>
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru">
            Яндекс.Практикум
          </a>
        </li>
        <li>
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/IVKrylova">
            Github
          </a>
        </li>
        <li>
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100081488482267">
            Facebook
          </a>
        </li>
      </ul>
      <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
