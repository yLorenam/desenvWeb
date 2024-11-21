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
      (user) => user.username === username && user.password === password);
  },
};

export default userStore;

export const movieSort = [
  { movieName: "O Poderoso Chefão", directorName: "Francis Ford Coppola", stars: 5 },
  { movieName: "Pulp Fiction", directorName: "Quentin Tarantino", stars: 4.5 },
  { movieName: "Forrest Gump", directorName: "Robert Zemeckis", stars: 5 },
  { movieName: "A Origem", directorName: "Christopher Nolan", stars: 4.7 },
  { movieName: "O Senhor dos Anéis: O Retorno do Rei", directorName: "Peter Jackson", stars: 5 },
  { movieName: "Gladiador", directorName: "Ridley Scott", stars: 4.8 },
  { movieName: "Matrix", directorName: "Lana Wachowski, Lilly Wachowski", stars: 4.9 },
  { movieName: "Clube da Luta", directorName: "David Fincher", stars: 4.7 },
  { movieName: "Coringa", directorName: "Todd Phillips", stars: 4.6 },
  { movieName: "Titanic", directorName: "James Cameron", stars: 4.8 },
  { movieName: "A Vida é Bela", directorName: "Roberto Benigni", stars: 5 },
  { movieName: "Interestelar", directorName: "Christopher Nolan", stars: 4.9 },
  { movieName: "Os Bons Companheiros", directorName: "Martin Scorsese", stars: 4.8 },
  { movieName: "O Lobo de Wall Street", directorName: "Martin Scorsese", stars: 4.5 },
  { movieName: "Um Sonho de Liberdade", directorName: "Frank Darabont", stars: 5 },
  { movieName: "Parasita", directorName: "Bong Joon-ho", stars: 4.9 },
  { movieName: "Django Livre", directorName: "Quentin Tarantino", stars: 4.8 },
  { movieName: "Os Vingadores: Ultimato", directorName: "Anthony e Joe Russo", stars: 4.7 },
  { movieName: "Harry Potter e a Pedra Filosofal", directorName: "Chris Columbus", stars: 4.5 },
  { movieName: "O Rei Leão", directorName: "Roger Allers, Rob Minkoff", stars: 4.8 },
];