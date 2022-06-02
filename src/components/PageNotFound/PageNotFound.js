import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

const PageNotFound = _ => {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <button type="button"
        className="page-not-found__button-go-back"
        onClick={_ => history.goBack()}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
