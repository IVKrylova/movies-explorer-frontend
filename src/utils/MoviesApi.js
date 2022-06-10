import { moviesOptions } from './constants';
import { checkResponse } from './utils';

class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // метод получения массива с результатами поиска
  getMovies() {
    return fetch(`${this.baseUrl}`, {
      headers: this.headers,
    })
    .then(checkResponse)
  }
}

export const moviesApi = new MoviesApi(moviesOptions);
