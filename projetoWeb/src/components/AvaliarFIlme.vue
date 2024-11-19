<template>
  <div class="movie-form">
    <h2>Avaliar Filme</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="movieName">Nome do Filme:</label>
        <input type="text" id="movieName" v-model="movieName" required>
      </div>

      <div class="form-group">
        <label for="directorName">Nome do Diretor:</label>
        <input type="text" id="directorName" v-model="directorName" required>
      </div>

      <div class="form-group">
        <label for="stars">Quantidade de Estrelas (1-5):</label>
        <input type="number" id="stars" v-model.number="stars" min="1" max="5" required>
      </div>

      <button type="submit" class="btn btn-primary">Adicionar Filme</button>
    </form>
    
    <button class="btn btn-secondary" @click="goToList">Ver Lista de Filmes</button>
  </div>
</template>

<script>
import { movieStore } from "../movieStore"; 

export default {
  data() {
    return {
      movieName: "",
      directorName: "",
      stars: 1,
    };
  },
  methods: {
    submitForm() {
      movieStore.addMovie({
        movieName: this.movieName,
        directorName: this.directorName,
        stars: this.stars,
      });
      this.movieName = "";
      this.directorName = "";
      this.stars = 1;

      alert("Filme adicionado com sucesso!");
    },
    goToList() {
      this.$router.push("/FilmesAvaliados");
    },
  },
};
</script>

<style scoped>
.movie-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}
.movie-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.movie-details {
  flex-grow: 1;
  margin-right: 10px;
}

.remove-btn {
  background-color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  color: black;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c82333;
  padding: 10px;
}

.remove-btn i {
  font-size: 20px;
}
</style>