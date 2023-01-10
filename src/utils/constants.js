// URL для обращения к собственной БД
export const MAIN_URL = 'https://api.ivkrylova-movies.fun';
// объект с настройками для собственной API
export const mainOptions = {
  baseUrl: MAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  }
}

// URL для обращения к БД с фильмами beatfilm-movies
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
// URL для изображений фильмов
export const IMAGE_URL = 'https://api.nomoreparties.co/.';
// объект с настройками для API beatfilm-movies
export const moviesOptions = {
  baseUrl: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json',
  }
}

// начальное количество фильмов на странице
export const AMOUNT_320 = 5;
export const AMOUNT_768 = 8;
export const AMOUNT_1280 = 12;
// число фильмов, добавленных кнопкой Еще
export const AMOUNT_ADDED_MOVIES_320_768 = 2;
export const AMOUNT_ADDED_MOVIES_1280 = 3;
