<template>
    <div class="movie-list">
      <h2>Lista de Filmes</h2>
  
      <ul v-if="movies.length">
        <li v-for="(movie, index) in movies" :key="index" class="movie-item">
          <div>
            <strong>{{ movie.movieName }}</strong> - {{ movie.directorName }}
            <span>⭐ {{ movie.stars }}</span>
            <button class="btn btn-danger remove-btn" @click="removeMovie(index)">
            <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>
      </ul>
      <p v-else>Nenhum filme adicionado ainda.</p>
    </div>
  </template>
  
  <script>
  import { movieStore } from "../movieStore";
  
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
    max-width: 600px;
    margin: 0 auto;
    color: black;
  }
  .movie-item {
    background-color: #f8f9fa;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  </style>