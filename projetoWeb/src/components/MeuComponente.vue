<template>
  <div class="container">
    <h2>Cadastrar Série</h2>
    <div class="input-group">
      <!-- Inputs para nome, gênero e ano -->
      <input
        type="text"
        placeholder="Nome da série"
        v-model="nome"
        class="input-field"
      />
      <input
        type="text"
        placeholder="Gênero"
        v-model="genero"
        class="input-field"
      />
      <input
        type="number"
        placeholder="Ano"
        v-model="ano"
        class="input-field"
      />
      <!-- Botão para cadastrar -->
      <button @click="addSeries" class="btn">Cadastrar Série</button>
    </div>

    <!-- Exibe a mensagem se a lista estiver vazia -->
    <div v-if="seriesList.length === 0" class="empty-message">
      <p>Nenhuma série cadastrada ainda.</p>
    </div>

    <!-- Exibe a lista de séries com botão para deletar -->
    <div v-else class="card-container">
      <div v-for="(series, index) in seriesList" :key="index" class="card">
        <h3>{{ series.nome }}</h3>
        <p><strong>Gênero:</strong> {{ series.genero }}</p>
        <p><strong>Ano:</strong> {{ series.ano }}</p>
        <button @click="deleteSeries(index)" class="delete-btn">Deletar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      genero: '',
      ano: '',
      seriesList: [],
      currentYear: new Date().getFullYear(), // Ano atual dinamicamente
    };
  },
  methods: {
    // Função para adicionar uma série à lista
    addSeries() {
      // Validação: todos os campos são obrigatórios
      if (this.nome.trim() === '' || this.genero.trim() === '' || this.ano === '') {
        alert('Todos os campos são obrigatórios!');
        return;
      }

      // Validação: ano não pode ser negativo
      if (this.ano < 0) {
        alert('Ano não pode ser negativo!');
        return;
      }

      // Validação: ano não pode ser maior que o ano atual
      if (this.ano > this.currentYear) {
        alert(`Ano não pode ser maior que ${this.currentYear}`);
        return;
      }

      // Criar objeto da série
      const newSeries = {
        nome: this.nome,
        genero: this.genero,
        ano: this.ano,
      };

      // Adicionar série à lista
      this.seriesList.push(newSeries);

      // Limpar campos após cadastro
      this.nome = '';
      this.genero = '';
      this.ano = '';
    },
    // Função para deletar série da lista
    deleteSeries(index) {
      this.seriesList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
  /* Estilos do container principal */
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Estilos para o grupo de inputs */
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  /* Estilos para os inputs */
  .input-field {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  /* Estilos para os botões */
  .btn {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #45a049;
  }

  /* Estilos para a mensagem de lista vazia */
  .empty-message {
    text-align: center;
    font-style: italic;
    color: #777;
  }

  /* Estilos dos cartões de séries */
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card h3 {
    margin-top: 0;
  }

  .card p {
    margin: 5px 0;
  }

  /* Estilo para o botão de deletar */
  .delete-btn {
    padding: 8px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  }

  .delete-btn:hover {
    background-color: #ff1a1a;
  }
</style>
