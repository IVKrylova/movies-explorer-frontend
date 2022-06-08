import { moviesOptions } from './constants.js';

class MoviesApi {
  constructor(moviesOptions) {
    this.baseUrl = moviesOptions.baseUrl;
    this.headers = moviesOptions.headers;
  }

  // метод проверки ошибок
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // метод получения массива с результатами поиска
  getMovies() {
    return fetch(`${this.baseUrl}`, {
      headers: this.headers,
    })
    .then(this._checkResponse)
  }
}

export const moviesApi = new MoviesApi(moviesOptions);
