import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory, Redirect } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { filterByName, filterByDuration, getErrorCode } from '../../utils/utils';
import { mainApi } from '../../utils/MainApi';

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
  const [loggedIn, setLoggedIn] = useState(false /* true */);
  // стейт данных о пользователе
  const [currentUser, setCurrentUser] = useState({ _id: '', email: '', name: ''});
  // стейт кнопки Редактировать
  const [isButtonEditPressed, setIsButtonEditPressed] = useState(false);
  // стейт массива сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  // стейт фильмов, найденных в сохраненных
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  // стейт поиска на странице сохраненных фильмов
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  // стейт обновления профиля
  const [isSuccessfulUpdate, setIsSuccessfulUpdate] = useState(false);
  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;
  // получаем доступ к объекту history
  const history = useHistory();

  // функция проверки токена
  const tokenCheck = _ => {
    if (localStorage.token) {
      // проверяем данные о пользователе по токену
      mainApi.sendToken(localStorage.token)
        .then(data => {
          const email = data.data.email;

          if (email === localStorage.getItem('email')) {
            setLoggedIn(true);
          }
        })
        .catch(err => {
          console.log(err);

          setErrorMessage('Произошла ошибка');
        })
    }
  }

  // проверяем токен при загрузке приложения
  useEffect(_ => tokenCheck(), []);

  // установка начальных значений из localStorage для страницы с поиском фильмов
  useEffect(_ => {
    if (localStorage.movies) setMovies(JSON.parse(localStorage.movies));
    if (localStorage.isShortFilm === 'true') setIsShortFilm(true);
    if (localStorage.isShortFilm === 'false') setIsShortFilm(false);
  }, []);

  // установка значения чекбокса из localStorage при возвращении на страницу поиска фильмов
  useEffect(_ => {
    if (currentUrl === '/movies') {
      if (localStorage.isShortFilm === 'true') setIsShortFilm(true);
      if (localStorage.isShortFilm === 'false') setIsShortFilm(false);
    }
  }, [currentUrl]);

  // загрузка информации о пользователе с сервера
  useEffect(_ => {
    if (localStorage.token) {
      mainApi.getUserInfo(localStorage.token)
      .then(data => {
        // записываем информацию в контекст
        setCurrentUser({ _id: data.data._id, email: data.data.email, name: data.data.name });
        // добавляем email в localStorage
        localStorage.setItem('email', data.data.email);
      })
      .catch(err => {
        console.log(err);

        setErrorMessage('Произошла ошибка');
      })
    }
  }, [localStorage.token]);

  // функция авторизации пользователя
  const logInApp = (password, email) => {
    mainApi.authorize(password,email)
      .then(data => {
        // сохраняем токен в localStorage
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
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
    setIdCardHovered(card.movieId);
  }

  // обработчик снятия курсора с карточки фильма
  const handleMouseOutCard = _ => {
    setIdCardHovered('');
  }

  // обработчик формы поиска на странице фильмов
  const handleSearchForm = searchRequest => {
    setIsLoading(true);
    setMovies([]);
    setErrorMessage('');
    moviesApi.getMovies()
    .then(data => {
      const foundMovies = filterByName(data, searchRequest.movie);

      // проверяем, есть ли найденные фильмы в сохраненных
      if (savedMovies.length > 0) {
        savedMovies.forEach(savedMovie => {
          foundMovies.forEach(foundMovie => {
            if (savedMovie.movieId === foundMovie.id) foundMovie.isLikeActive = true;
          })
        });
      }

      setMovies(foundMovies);
      setIsFirstOpen(false);
      setIsShortFilm(false);
      localStorage.setItem('movies', JSON.stringify(foundMovies));
      localStorage.setItem('searchRequest', searchRequest.movie);
      localStorage.setItem('isShortFilm', false);
    })
    .catch(err => {
      console.log(err);
      setErrorMessage(err.message);
    })
    .finally(_ => setIsLoading(false));
  }

  // обработчик переключателя короткометражных фильмов на странице с фильмами
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
          const foundMovies = filterByName(data, localStorage.searchRequest);

          setMovies(foundMovies);
          localStorage.setItem('movies', JSON.stringify(foundMovies));
          localStorage.setItem('isShortFilm', false);
        })
        .catch(err => {
          console.log(err);
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(_ => setIsLoading(false));
    }
  }

  // обработчик клика по кнопке редактировать
  const handleClickEdit = _ => {
    setIsButtonEditPressed(true);
    setIsSuccessfulUpdate(false);
  }

  // изменение стейта редактирования профиля при переходе со страницы профиля
  useEffect(_ => {
    if (currentUrl === '/profile' && isSuccessfulUpdate) {
      setIsSuccessfulUpdate(false);
    }
  }, [currentUrl]);

  // обработчик формы редактирования профиля
  const handleEditProfile = props => {
    setErrorMessage('');
    mainApi.editProfileInfo(props.name, props.email, localStorage.token )
      .then(data => {
        setCurrentUser({ _id: data.data._id, email: data.data.email, name: data.data.name});
        localStorage.setItem('email', data.data.email);
        setIsButtonEditPressed(false);
        setIsSuccessfulUpdate(true);
      })
      .catch(err => {
        console.log(err);

        const errorCode = getErrorCode(err);
        errorCode === '409' ?
          setErrorMessage('Пользователь с таким email уже существует') :
          setErrorMessage('При обновлении профиля произошла ошибка');
      })
  }

  // функция удаления фильма из сохраненных
  const deleteSavedMovie = (selectedMovie, token) => {
    const deletedMovie = savedMovies.find(movie => selectedMovie.movieId === movie.movieId);

    mainApi.deleteMovie(deletedMovie._id, token)
      .then(data => {
        const newListSavedMovies = savedMovies.filter(movie => movie._id !== data.data._id);
        setSavedMovies(newListSavedMovies);

        movies.forEach(movie => {
          if (movie.id === data.data.movieId) {
            movie.isLikeActive = false;
          }
        });
        setMovies([...movies]);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Произошла ошибка');
      })
  }

  // обработчик клика по лайку
  const handleLikeMovie = props => {
    setErrorMessage('');
    if (!props.isLikeActive) {
      mainApi.saveMovie(props, localStorage.token)
        .then(data => {
          movies.forEach(movie => {
            if (movie.id === data.data.movieId) {
              movie.isLikeActive = true;
            }
          });

          setMovies([...movies]);
          localStorage.setItem('movies', JSON.stringify(movies));
          setSavedMovies([...savedMovies, data.data])
        })
        .catch(err => {
          console.log(err);

          setErrorMessage('При сохранении фильма произошла ошибка');
        })
    } else {
      deleteSavedMovie(props, localStorage.token);
    }
  }

  // обработчик клика по кнопке удалить
  const handleDeleteMovie = props => {
    setErrorMessage('');
    deleteSavedMovie(props, localStorage.token);
  }

  // обработчик формы поиска по сохраненным фильмам
  const handleSearchFormForSavedMovies = searchRequest => {
    setIsSearchStarted(true);
    setIsLoading(true);
    setFoundSavedMovies([]);
    setErrorMessage('');

    const foundMovies = filterByName(savedMovies, searchRequest.movie);

    if (foundMovies.length > 0) {
      setIsLoading(false);
      setFoundSavedMovies(foundMovies);
    }
    if (foundMovies.length === 0) {
      setIsLoading(false);
      setErrorMessage('Ничего не найдено');
    }
  }

  // обработчик переключателя короткометражных фильмов на странице с сохраненными фильмами
  const handleClickCheckboxOnSavedMovies = _ => {
    if (savedMovies.length === 0) return;

    if (!isShortFilm) {
      const shortFilm = filterByDuration(savedMovies);

      setIsShortFilm(true);
      setSavedMovies(shortFilm);
    } else {
      setIsShortFilm(false);
      setIsLoading(true);
      setSavedMovies([]);
      setErrorMessage('');

      mainApi.getSavedMovies(localStorage.token)
        .then(data => setSavedMovies(data.data))
        .catch(err => {
          console.log(err);
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(_ => setIsLoading(false));
    }
  }

  // обработчик выхода из приложения
  const handleExit = _ => {
    localStorage.clear();
    setCurrentUser({ _id: '', email: '', name: ''});
    setLoggedIn(false);
    setIsShortFilm(false);
    setIsFirstOpen(true);
    setErrorMessage('');
    setMovies([]);
    setSavedMovies([]);
    setIsSuccessfulUpdate(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app-page">
        <Helmet htmlAttributes={{ lang : 'ru' }} />
        <Switch>
          <Route exact path="/">
            <Header
              currentUrl={currentUrl}
              isOpenMenu={isOpenMenu}
              onClickMenu={openMenu}
              onClickButtonClose={closeMenu}
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={_ => setLoggedIn(loggedIn)}
            component={
              <>
                <Header
                  currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu}
                  loggedIn={loggedIn}
                />
                <Movies
                  movies={movies}
                  currentUrl={currentUrl}
                  isFirstOpen={isFirstOpen}
                  sendProperty={handleSearchForm}
                  onClick={handleClickCheckbox}
                  isShortFilm={isShortFilm}
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                  onMovieLike={handleLikeMovie}
                />
                <Footer />
              </>
            }
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={_ => setLoggedIn(loggedIn)}
            component={
              <>
                <Header
                  currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu}
                  loggedIn={loggedIn}
                />
                <SavedMovies
                  currentUrl={currentUrl}
                  idCardHovered={idCardHovered}
                  onMouseOver={handleMouseOverCard}
                  onMouseOut={handleMouseOutCard}
                  setErrorMessage={setErrorMessage}
                  errorMessage={errorMessage}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  sendProperty={handleSearchFormForSavedMovies}
                  isLoading={isLoading}
                  isSearchStarted={isSearchStarted}
                  foundSavedMovies={foundSavedMovies}
                  setIsSearchStarted={setIsSearchStarted}
                  onClick={handleClickCheckboxOnSavedMovies}
                  isShortFilm={isShortFilm}
                  setIsShortFilm={setIsShortFilm}
                  loggedIn={loggedIn}
                />
                <Footer />
              </>
            }
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={_ => setLoggedIn(loggedIn)}
            component={
              <>
                <Header
                  currentUrl={currentUrl}
                  isOpenMenu={isOpenMenu}
                  onClickMenu={openMenu}
                  onClickButtonClose={closeMenu}
                  loggedIn={loggedIn}
                />
                <Profile
                  sendProperty={handleEditProfile}
                  errorMessage={errorMessage}
                  currentUrl={currentUrl}
                  onClickEdit={handleClickEdit}
                  isButtonEditPressed={isButtonEditPressed}
                  onExit={handleExit}
                  isSuccessfulUpdate={isSuccessfulUpdate}
                />
              </>
            }
          />
          <Route path="/signup">
            {loggedIn &&
              <Redirect to="/movies" />
            }
            {!loggedIn &&
              <Register
                currentUrl={currentUrl}
                sendProperty={handleRegisterForm}
                errorMessage={errorMessage}
                isRegistred={isRegistred}
              />
            }
          </Route>
          <Route path="/signin">
            {loggedIn &&
              <Redirect to="/movies" />
            }
            {!loggedIn &&
              <Login
                currentUrl={currentUrl}
                sendProperty={handleLoginForm}
                errorMessage={errorMessage}
                loggedIn={loggedIn}
              />
            }
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
