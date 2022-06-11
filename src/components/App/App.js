import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { moviesApi } from '../../utils/MoviesApi';
import { filterByName, filterByDuration, getErrorCode } from '../../utils/utils';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = _ => {
  // стейт бургерного меню
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // стейт id карточки с наведенным курсором
  const [idCardHovered, setIdCardHovered] = useState('');
  // стейт открытия страницы с поиском фильмов первый раз
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  // стейт массива фильмов на странице поиска
  const [movies, setMovies] = useState([]);
  // стейт переключателя короткометражек на странице поиска
  const [isShortFilm, setIsShortFilm] = useState(false);
  // стейт сообщения об ошибке
  const [errorMessage, setErrorMessage] = useState('');
  // стейт загрузки ответа на запрос
  const [isLoading, setIsLoading] = useState(false);
  // стейт регистрации нового пользователя
  const [isRegistred, setIsRegistred] = useState(false);
  // стейт авторизации пользователя
  const [loggedIn, setLoggedIn] = useState(false);
  // стейт данных о пользователе
  const [currentUser, setCurrentUser] = useState({ _id: '', email: '', name: ''});

  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;
  // получаем доступ к объекту history
  const history = useHistory();

  // установка начальных значений из localStorage для страницы с поиском фильмов
  useEffect(_ => {
    if (currentUrl === '/movies' && localStorage.movies) {
      setMovies(JSON.parse(localStorage.movies));

      if (localStorage.isShortFilm === 'true') setIsShortFilm(true);
      if (localStorage.isShortFilm === 'false') setIsShortFilm(false);
    }
  }, []);

  // функция получения данных о пользователе
  const getUserInfo = token => {
    mainApi.getUserInfo(token)
      .then(data => setCurrentUser({ _id: data._id, email: data.email, name: data.name }))
      .catch(err => {
        console.log(err);

        setErrorMessage('Произошла ошибка');
      })
  }

  // функция авторизации пользователя
  function logInApp(password, email) {
    mainApi.authorize(password,email)
      .then(data => {
        // сохраняем токен в localStorage
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        getUserInfo(data.token);
      })
      .catch(err => {
        console.log(err);

        const errorCode = getErrorCode(err);
        if (errorCode === '404') {
          setErrorMessage('Вы ввели неправильный логин или пароль');
        } else if (errorCode === '401') {
          setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
        } else if (errorCode === '403') {
          setErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен');
        } else {
          setErrorMessage('При авторизации произошла ошибка');
        }
      })
  }

  // обработчик формы регистрации
  const handleRegisterForm = props => {
    setErrorMessage('');
    mainApi.register(props.name, props.email, props.password)
      .then(data => {
        setIsRegistred(true);
        logInApp(props.password, data.email);
      })
      .catch(err => {
        console.log(err);

        const errorCode = getErrorCode(err);
        errorCode === '409' ?
          setErrorMessage('Пользователь с таким email уже существует') :
          setErrorMessage('При регистрации пользователя произошла ошибка');
      })
  }

  // обработчик формы авторизации
  const handleLoginForm = props => {
    setErrorMessage('');
    logInApp(props.password, props.email);
  }

  // настройка переадресации на страницу фильмов после удачной регистрации или авторизации
  useEffect(_ => {
    if (isRegistred || loggedIn) {
      history.push('/movies');
    }
  }, [isRegistred, loggedIn]);

  // функция открытия бургерного меню
  const openMenu = _ => {
    setIsOpenMenu(true);
  }

  // функция закрытия бургерного меню
  const closeMenu = _ => {
    setIsOpenMenu(false);
  }

  // обработчик наведения курсора на карточку фильма
  const handleMouseOverCard = card => {
    setIdCardHovered(card.id);
  }

  // обработчик снятия курсора с карточки фильма
  const handleMouseOutCard = _ => {
    setIdCardHovered('');
  }

  // обработчик формы поиска
  const handleSearchForm = searchRequest => {
    setIsLoading(true);
    setMovies([]);
    setErrorMessage('');
    moviesApi.getMovies()
    .then(data => {
      const searchMovies = filterByName(data, searchRequest.movie);

      setMovies(searchMovies);
      setIsFirstOpen(false);
      setIsShortFilm(false);

      localStorage.setItem('movies', JSON.stringify(searchMovies));
      localStorage.setItem('searchRequest', searchRequest.movie);
      localStorage.setItem('isShortFilm', false);
    })
    .catch(err => {
      console.log(err);
      setErrorMessage(err.message);
    })
    .finally(_ => setIsLoading(false));
  }

  // обработчик переключателя короткометражных фильмов
  const handleClickCheckbox = _ => {
    if (movies.length === 0) return;

    if (!isShortFilm) {
      const shortFilm = filterByDuration(movies);

      setIsShortFilm(true);
      setMovies(shortFilm);

      localStorage.setItem('isShortFilm', true);
      localStorage.setItem('movies', JSON.stringify(shortFilm));
    } else {
      setIsShortFilm(false);
      setIsLoading(true);
      setMovies([]);
      setErrorMessage('');

      moviesApi.getMovies()
        .then(data => {
          const searchMovies = filterByName(data, localStorage.searchRequest);

          setMovies(searchMovies);
          localStorage.setItem('movies', JSON.stringify(searchMovies));
          localStorage.setItem('isShortFilm', false);
        })
        .catch(err => {
          console.log(err);
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(_ => setIsLoading(false));
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app-page">
        <Helmet htmlAttributes={{ lang : 'ru' }} />
        <Switch>
          <Route exact path="/">
            <Header currentUrl={currentUrl}
              isOpenMenu={isOpenMenu}
              onClickMenu={openMenu}
              onClickButtonClose={closeMenu} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute path="/movies"
            loggedIn={loggedIn}
            component={
              <>
                <Header currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu} />
                <Movies movies={movies}
                  currentUrl={currentUrl}
                  isFirstOpen={isFirstOpen}
                  sendProperty={handleSearchForm}
                  onClick={handleClickCheckbox}
                  isShortFilm={isShortFilm}
                  errorMessage={errorMessage}
                  isLoading={isLoading} />
                <Footer />
              </>
            }
          />
          <ProtectedRoute path="/saved-movies"
            loggedIn={loggedIn}
            component={
              <>
                <Header currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu} />
                <SavedMovies /* movies={movies} */
                  currentUrl={currentUrl}
                  idCardHovered={idCardHovered}
                  onMouseOver={handleMouseOverCard}
                  onMouseOut={handleMouseOutCard} />
                <Footer />
              </>
            }
          />
          <ProtectedRoute path="/profile"
            loggedIn={loggedIn}
            component={
              <>
                <Header currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu} />
                <Profile />
              </>
            }
          />
          <Route path="/signup">
            <Register currentUrl={currentUrl}
              sendProperty={handleRegisterForm}
              errorMessage={errorMessage}
              isRegistred={isRegistred} />
          </Route>
          <Route path="/signin">
            <Login currentUrl={currentUrl}
              sendProperty={handleLoginForm}
              errorMessage={errorMessage}
              loggedIn={loggedIn} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
