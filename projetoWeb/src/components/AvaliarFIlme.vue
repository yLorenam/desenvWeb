<template>
  <div class="movie-form">
    <h2>Avaliar Filme</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="movieName">Nome do Filme:</label>
        <input type="text" id="movieName" v-model="movieName" required />
      </div>

      <div class="form-group">
        <label for="directorName">Nome do Diretor:</label>
        <input type="text" id="directorName" v-model="directorName" required />
      </div>

      <div class="form-group">
        <label>Quantidade de Estrelas:</label>
        <div class="stars">
          <i
            class="fa-star"
            :class="stars >= 1 ? 'fas' : 'far'"
            @click="setStars(1)"
          ></i>
          <i
            class="fa-star"
            :class="stars >= 2 ? 'fas' : 'far'"
            @click="setStars(2)"
          ></i>
          <i
            class="fa-star"
            :class="stars >= 3 ? 'fas' : 'far'"
            @click="setStars(3)"
          ></i>
          <i
            class="fa-star"
            :class="stars >= 4 ? 'fas' : 'far'"
            @click="setStars(4)"
          ></i>
          <i
            class="fa-star"
            :class="stars >= 5 ? 'fas' : 'far'"
            @click="setStars(5)"
          ></i>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Adicionar Filme</button>
    </form>
  </div>
</template>

<script>
import { movieStore } from "../armazenamento";

export default {
  data() {
    return {
      movieName: "",
      directorName: "",
      stars: 0, 
    };
  },
  methods: {
    setStars(star) {
      this.stars = star; 
    },
    submitForm() {
      if (this.stars === 0) {
        alert("Por favor, selecione uma quantidade de estrelas!");
        return;
      }

      movieStore.addMovie({
        movieName: this.movieName,
        directorName: this.directorName,
        stars: this.stars,
      });

      this.movieName = "";
      this.directorName = "";
      this.stars = 0;

      alert("Filme adicionado com sucesso!");
    },
  },
};
</script>

<<style scoped>
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

.stars {
  display: flex;
  gap: 5px;
  font-size: 24px;
  cursor: pointer;
}

.stars .fas {
  color: #ffcc00; 
}

.stars .far {
  color: #ccc; 
}

.stars i:hover,
.stars i:hover ~ i {
  color: #ffcc00; 
}
</style>