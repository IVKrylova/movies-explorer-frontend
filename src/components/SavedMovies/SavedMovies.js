import { useEffect, useContext } from 'react';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovies from '../SearchMovies/SearchMovies';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Message from '../Message/Message';

const SavedMovies = props => {
  // подписываемся на контекст CurrentUserContext
  const currentUser = useContext(CurrentUserContext);
  // получаем функцию установки сообщения об ошибке
  const setErrorMessage = props.setErrorMessage;
  // получаем функцию установки массива сохраненных карточек
  const setSavedMovies = props.setSavedMovies;
  // получаем функцию установки стейта начала поиска
  const setIsSearchStarted = props.setIsSearchStarted;

  // установка массива сохраненных фильмов
  useEffect(_ => {
    const token = localStorage.getItem('token');

    setIsSearchStarted(false);
    setErrorMessage('');
    mainApi.getSavedMovies(token)
     .then(data => {
        const savedMovies = data.data
          .filter(movie => movie.owner === currentUser._id);

        setSavedMovies(savedMovies);
      })
     .catch(err => {
      console.log(err);
      setErrorMessage('Произошла ошибка')
    })
  }, []);

  // установка массива сохраненных фильмов после поиска
  const listMovies = props.isSearchStarted ? props.foundSavedMovies : props.savedMovies;

  return (
    <main className="saved-movies">
      <SearchMovies sendProperty={props.sendProperty} />
      <Preloader isLoading={props.isLoading} />
      <MoviesCardList movies={listMovies}
        currentUrl={props.currentUrl}
        idCardHovered={props.idCardHovered}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
        onDeleteMovie={props.onDeleteMovie} />
      <ErrorMessage errorMessage={props.errorMessage} />
    </main>
  );
}

export default SavedMovies;
