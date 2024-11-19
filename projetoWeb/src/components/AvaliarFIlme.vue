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
    <button type="" class="">Voltar</button>
    
    <div v-if="submittedMovie">
      <h3>Filme Adicionado</h3>
      <p><strong>Filme:</strong> {{ submittedMovie.movieName }}</p>
      <p><strong>Diretor:</strong> {{ submittedMovie.directorName }}</p>
      <p><strong>Estrelas:</strong> {{ submittedMovie.stars }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieName: '',
      directorName: '',
      stars: 1,
      submittedMovie: null,
    };
  },
  methods: {
    submitForm() {
      this.submittedMovie = {
        movieName: this.movieName,
        directorName: this.directorName,
        stars: this.stars,
      };
      this.movieName = '';
      this.directorName = '';
      this.stars = 1;
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
</style>