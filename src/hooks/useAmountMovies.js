import { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';
import {
  AMOUNT_320,
  AMOUNT_768,
  AMOUNT_1280,
  AMOUNT_ADDED_MOVIES_320_768,
  AMOUNT_ADDED_MOVIES_1280,
} from '../utils/constants';

const useAmountMovies = _ => {
  // функция определения начального количества фильмов на странице
  const getAmountMovies = screenWidth => {
    if (screenWidth < 768) {
      return AMOUNT_320;
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      return AMOUNT_768;
    } else {
      return AMOUNT_1280;
    }
  }

  // функция определения количества добавляемых фильмов
  const getAddedMovies = screenWidth => {
    if (screenWidth < 1280) {
      return AMOUNT_ADDED_MOVIES_320_768;
    } else {
      return AMOUNT_ADDED_MOVIES_1280;
    }
  }

  // получаем ширину экрана
  const screenWidth = useWindowWidth();
  // получаем количество добавляемых фильмов
  const amountAddedMovies = getAddedMovies(screenWidth);

  // стейт количества видимых фильмов на странице
  const [amountMovies, setAmountMovies] = useState(getAmountMovies(screenWidth));

  // установка количества фильмов в зависимости от ширины экрана
  useEffect(_ => {
    setAmountMovies(getAmountMovies(screenWidth));
  }, [screenWidth]);

  // обработчик клика по кнопке Еще
  const handleClick = _ => {
    setAmountMovies(amountMovies + amountAddedMovies);
  }

  return { amountMovies, handleClick }
}

export default useAmountMovies;
