import './Movies.css';
import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useAmountMovies from '../../hooks/useAmountMovies';

const Movies = props => {
  // запускаем обработчик определения количества и добавления фильмов на страницу
  const { amountMovies, handleClick } = useAmountMovies();

  return (
    <main className="movies">
      <SearchMovies
        sendProperty={props.sendProperty}
        onClick={props.onClick}
        isShortFilm={props.isShortFilm}
        currentUrl={props.currentUrl}
      />
      <Preloader isLoading={props.isLoading} />
      {(props.isFirstOpen && !localStorage.movies) &&
        <Message
          message='Начните поиск'
          movies={props.movies}
          isLoading={props.isLoading}
          currentUrl={props.currentUrl}
        />
      }
      {((props.isFirstOpen && localStorage.movies) || !props.isFirstOpen) &&
        <>
          <Message
            message='Ничего не найдено'
            movies={props.movies}
            errorMessage={props.errorMessage}
            isLoading={props.isLoading}
            currentUrl={props.currentUrl}
          />
          <ErrorMessage errorMessage={props.errorMessage} />
          <MoviesCardList
            movies={props.movies}
            currentUrl={props.currentUrl}
            amountMovies={amountMovies}
            onMovieLike={props.onMovieLike}
          />
          <ButtonMore
            buttonText={'Ещё'}
            classModifier={'button-more__place_movies'}
            movies={props.movies}
            amountMovies={amountMovies}
            onClick={handleClick}
            currentUrl={props.currentUrl}
          />
        </>
      }
    </main>
  );
}

export default Movies;
