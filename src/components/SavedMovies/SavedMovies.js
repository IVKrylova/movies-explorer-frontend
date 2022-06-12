import { useEffect, useContext, useState } from 'react';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovies from '../SearchMovies/SearchMovies';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SavedMovies = props => {
  // стейт массива сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  // подписываемся на контекст CurrentUserContext
  const currentUser = useContext(CurrentUserContext);

  // установка массива сохраненных фильмов
  useEffect(_ => {
    const token = localStorage.getItem('token');

    props.setErrorMessage('');
    mainApi.getSavedMovies(token)
     .then(data => {
        const savedMovies = data.data
          .filter(movie => movie.owner === currentUser._id);

        setSavedMovies(savedMovies);
      })
     .catch(err => {
      console.log(err);
      props.setErrorMessage('Произошла ошибка')
    })
  }, [])

  return (
    <main className="saved-movies">
      <SearchMovies />
      <Preloader />
      <MoviesCardList movies={savedMovies}
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
