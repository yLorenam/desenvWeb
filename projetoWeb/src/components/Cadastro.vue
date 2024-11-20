<template>
    <div class="register-form">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Nome de Usuário:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
  
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Cadastrar</button>
        <button class="btn btn-secondary" @click="gotoLogin">Voltar</button>
      </form>
    </div>
  </template>
  
  <script>
  import userStore from "../armazenamento.js";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        users: userStore.getUsers(), 
      };
    },
    methods: {
      registerUser() {
        if (this.username && this.password) {
          userStore.addUser({ username: this.username, password: this.password });
          this.users = userStore.getUsers(); 
          this.username = "";
          this.password = "";
          alert("Usuário cadastrado com sucesso!");
          this.$router.push('/');
          
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      },
      gotoLogin(){
        this.$router.go(-1);
      }
    },
  };
  </script>
  
  <style scoped>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  .btn-secondary {
    background-color: #007bff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background-color: #0056b3;
  }
  
  .user-list {
    margin-top: 20px;
  }
  
  .user-list ul {
    list-style: none;
    padding: 0;
  }
  
  .user-list li {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>