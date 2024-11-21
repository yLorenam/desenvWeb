<template>
  <div class="movie-list">
    <h2>Lista de Filmes</h2>

    <ul v-if="movies.length">
      <li v-for="(movie, index) in movies" :key="index" class="movie-item">
        <div class="movie-info">
          <strong>{{ movie.movieName }}</strong> - {{ movie.directorName }}
          <span>⭐ {{ movie.stars }}</span>
        </div>
        <button class="btn btn-danger remove-btn" @click="removeMovie(index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
    <p v-else>Nenhum filme adicionado ainda.</p>
  </div>
</template>

<script>
import { movieStore } from "../armazenamento";

export default {
  data() {
    return {
      movies: movieStore.getMovies(),
    };
  },
  methods: {
    removeMovie(index) {
      movieStore.removeMovie(index);
      this.movies = [...movieStore.getMovies()];
    },
  },
};
</script>

<style scoped>
.movie-list {
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.movie-list h2 {
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.movie-item {
  background-color: #ffffff;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.movie-item:hover {
  background-color: #f1f1f1;
}

.movie-info {
  font-size: 16px;
  color: #555;
}

.movie-info strong {
  color: #007bff;
  font-size: 18px;
}

.movie-item span {
  font-size: 1.2rem;
  color: #ffcc00;
  margin-left: 10px;
}

.remove-btn {
  background-color: #ff4d4d;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #d43f3a;
}

.remove-btn i {
  font-size: 18px;
}

.movie-item .remove-btn {
  padding: 6px 10px;
}

.movie-item .remove-btn i {
  font-size: 16px;
}

p {
  text-align: center;
  color: #777;
  font-size: 18px;
}

@media (max-width: 600px) {
  .movie-list {
    padding: 15px;
  }

  .movie-item {
    padding: 12px;
  }

  .remove-btn {
    padding: 6px 10px;
  }
}
</style>
