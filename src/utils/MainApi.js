import { mainOptions, MAIN_URL } from './constants';
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
}

// создание экземпляра класса MainApi
export const mainApi = new MainApi(mainOptions);
