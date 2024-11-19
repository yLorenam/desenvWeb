export const movieStore = {
    movies: [],
    addMovie(movie) {
      this.movies.push(movie);
    },
    getMovies() {
      return this.movies;
    },
  };