<template>
  <div class="movie-form">
    <h2>Avaliar Filme</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="movieName">Nome do Filme:</label>
        <input type="text" id="movieName" v-model="movieName" required placeholder="Digite o nome do filme" />
      </div>

      <div class="form-group">
        <label for="directorName">Nome do Diretor:</label>
        <input type="text" id="directorName" v-model="directorName" required placeholder="Digite o nome do diretor" />
      </div>

      <div id="star-rating">
        <span class="star" data-value="1">&#9733;</span>
        <span class="star" data-value="2">&#9733;</span>
        <span class="star" data-value="3">&#9733;</span>
        <span class="star" data-value="4">&#9733;</span>
        <span class="star" data-value="5">&#9733;</span>
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
  mounted() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        this.stars = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));

        let currentStar = star;
        while (currentStar) {
          currentStar.classList.add('selected');
          currentStar = currentStar.previousElementSibling; // Vai para a estrela à esquerda
        }
      });
    });
  },
};
</script>

<style scoped>
.movie-form {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.movie-form h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
}

input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
}

#star-rating {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.star {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
  margin: 0 5px;
}

.star.selected {
  color: #ffcc00;
}

.star:hover {
  color: #f0a500;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:focus {
  outline: none;
}

@media (max-width: 600px) {
  .movie-form {
    padding: 15px;
  }

  .btn-primary {
    font-size: 16px;
  }
}
</style>
