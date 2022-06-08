import './App.css';
import React, { useState } from 'react';
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

const App = _ => {
  // стейт бургерного меню
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // стейт id карточки с наведенным курсором
  const [idCardHovered, setIdCardHovered] = useState('');
  // стейт открытия страницы с поиском фильмов первый раз
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  // стейт массива фильмов на странице поиска
  const [movies, setMovies] = useState([]);
  // стейт переключателя короткометражек
  const [isShortFilm, setIsShortFilm] = useState(false);

  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;

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
    moviesApi.getMovies()
    .then(data => {
      const movies = data.filter(movie =>
        movie.nameRU.toLowerCase().includes(searchRequest.movie.toLowerCase())
      );

      setMovies(movies);
      setIsFirstOpen(false);
      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('searchRequest', searchRequest.movie);
      localStorage.setItem('isShortFilm', isShortFilm);
    })
    .catch(err => console.log(err));
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
            sendProperty={handleSearchForm} />
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
