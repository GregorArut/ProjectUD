"use strict";
const numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

console.log(personalMovieDB);
