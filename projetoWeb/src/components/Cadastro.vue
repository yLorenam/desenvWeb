<template>
    <div class="register-form">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Email:</label>
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
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

button {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
  margin-top: 10px;
}

.btn-secondary:hover {
  background-color: #495057;
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

@media (max-width: 480px) {
  .register-form {
    padding: 15px;
    margin: 20px;
  }

  h2 {
    font-size: 20px;
  }

  button {
    font-size: 14px;
  }
}
</style>
