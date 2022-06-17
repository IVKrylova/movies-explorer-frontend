// функция фильтрации фильмов по имени
export const filterByName = (movies, movieName) => {
  return movies.filter(movie =>
    movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
  );
}

// функция фильтрации короткометражек
export const filterByDuration = movies => {
  return movies.filter(movie => movie.duration <= 40);
}

// функция проверки ошибок запроса к API
export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// функция получения кода ошибки
export const getErrorCode = err => {
  return err.split(' ')[1];
}
