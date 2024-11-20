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

const userStore = {
  users: [],
  addUser(user) {
    this.users.push(user);
  },
  getUsers() {
    return this.users;
  },
  authenticate(username, password) {
    return this.users.find(
      (user) => user.username === username && user.password === password
    );
  },
};

export default userStore;