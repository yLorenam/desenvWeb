let movies = [
];

export const movieStore = {
  getMovies() {
    return movies;
  },
  addMovie(movie) {
    movies.push(movie);
  },
  removeMovie(index) {
    movies.splice(index, 1);
  },
};