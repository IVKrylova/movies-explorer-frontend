import { moviesOptions } from './constants';
import { checkResponse } from './utils';

class MoviesApi {
  constructor(moviesOptions) {
    this.baseUrl = moviesOptions.baseUrl;
    this.headers = moviesOptions.headers;
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
