import { mainOptions } from './constants';
import { checkResponse } from './utils';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.contentType = this.headers['Content-Type'];
  }

  // регистрация нового пользователя
  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, email, password })
    })
    .then(checkResponse)
  }

  // авторизация пользователя
  authorize(password, email) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ password, email })
    })
    .then(checkResponse)
  }

  // запрос на роут аутентификации
  sendToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': this.contentType,
        'Authorization' : `Bearer ${token}`,
      }
    })
    .then(checkResponse)
  }

  // метод получения информации о пользователе
  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
    .then(checkResponse)
  }

  // метод для редактирования информации о пользователе
  editProfileInfo(name, email, token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': this.contentType,
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(checkResponse)
  }

  // метод сохранения карточки на сервере
  saveMovie(data, token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': this.contentType
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
    .then(res => {
      return res;
    })
    .then(checkResponse)
  }

  // метод получения массива сохраненных фильмов
  getSavedMovies(token) {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(checkResponse)
  }
}

// создание экземпляра класса MainApi
export const mainApi = new MainApi(mainOptions);
