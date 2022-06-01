import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { movies } from '../../utils/constants';
import { useLocation } from 'react-router';

function App() {
  // стейты бургерного меню
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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

  return (
    <div className="app-page">
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
          <Movies movies={movies} />
          <Footer />
        </Route>
        <Route path="/saved-movies"> {/* ToDo ProtectedRoute */}
          <Header currentUrl={currentUrl}
            isOpenMenu={isOpenMenu}
            onClickMenu={openMenu}
            onClickButtonClose={closeMenu} />
          <SavedMovies />
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
