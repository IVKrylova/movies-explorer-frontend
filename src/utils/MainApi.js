import { mainOptions, MAIN_URL } from './constants';
import { checkResponse } from './utils';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
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
        'Content-Type': this.headers['Content-Type'],
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(checkResponse)
  }

  // метод получения информации о пользователе
  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(checkResponse)
  }
}

// создание экземпляра класса MainApi
export const mainApi = new MainApi(mainOptions);
