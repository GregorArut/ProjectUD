"Use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один з останніх переглянутих фільмів?");
    const b = prompt("На скільки оціните його?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      console.log("done");
      personalMovieDB.movies[a] = b;
    } else {
      console.log("error");
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто занадто мало фільмів");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
  } else {
    console.log("Виникла помилка");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (i = 1; i <= 3; i++) {
    const a = prompt(`Ваш улюблений жанр під номеом ${i}`);
    personalMovieDB.genres[i - 1] = a;
  }
}
writeYourGenres();
