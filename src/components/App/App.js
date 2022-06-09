import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { filterByName, filterByDuration } from '../../utils/utils';

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
  // стейт переключателя короткометражек на странице сохраненных фильмов
  const [isShortFilmSaved, setIsShortFilmSaved] = useState(false);

  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;

  // установка начальных значений из localStorage для страницы с поиском фильмов
  useEffect(_ => {
    if (currentUrl === '/movies' && localStorage.movies) {
      setMovies(JSON.parse(localStorage.movies));
      setIsShortFilm(localStorage.isShortFilm);
    }
  }, []);

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
      setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
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
    <div className="app-page">
      <Helmet htmlAttributes={{ lang : 'ru' }} />
      <Switch>
        <Route exact path="/"> {/* ToDo ProtectedRoute */}
          <Header currentUrl={currentUrl}
            isOpenMenu={isOpenMenu}
            onClickMenu={openMenu}
            onClickButtonClose={closeMenu} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies"> {/* ToDo ProtectedRoute */}
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
        </Route>
        <Route path="/saved-movies"> {/* ToDo ProtectedRoute */}
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
        </Route>
        <Route path="/profile"> {/* ToDo ProtectedRoute */}
         <Header currentUrl={currentUrl}
          isOpenMenu={isOpenMenu}
            onClickMenu={openMenu}
            onClickButtonClose={closeMenu} />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
