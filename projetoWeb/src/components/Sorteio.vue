<template>
  <div class="random-movie">
    <h2>Descubra um Filme Aleatório</h2>
    <div v-if="selectedMovie" class="movie-display">
      <h3>{{ selectedMovie.movieName }}</h3>
      <p>Diretor: <strong>{{ selectedMovie.directorName }}</strong></p>
      <span>Nota da Crítica: ⭐ {{ selectedMovie.stars }}</span>
    </div>
    <button class="btn btn-primary random-btn" @click="getRandomMovie">Sortear Filme</button>
  </div>
</template>

<script>
import { movieSort } from "../armazenamento.js";

export default {
  data() {
    return {
      movies: movieSort, 
      selectedMovie: null, 
    };
  },
  methods: {
    getRandomMovie() {
      if (this.movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.movies.length);
        this.selectedMovie = this.movies[randomIndex];
      } else {
        this.selectedMovie = null;
        alert("Nenhum filme disponível para sortear!");
      }
    },
  },
  mounted() {
    this.getRandomMovie(); 
  },
};
</script>
  
  <style scoped>
  .random-movie {
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .random-movie h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .movie-display {
    margin: 20px 0;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .movie-display h3 {
    font-size: 24px;
    color: #007bff;
    margin-bottom: 10px;
  }
  
  .movie-display p {
    font-size: 18px;
    color: #555;
    margin-bottom: 5px;
  }
  
  .movie-display span {
    font-size: 20px;
    color: #ffcc00;
  }
  
  .random-btn {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;
  }
  
  .random-btn:hover {
    background-color: #0056b3;
  }
  </style>
  