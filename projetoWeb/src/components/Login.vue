<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
    <button class="btn btn-secondary" @click="gotoCadastro">Cadastre-se</button>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import userStore from "../armazenamento.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    handleLogin() {
      const user = userStore.authenticate(this.email, this.password);

      if (user) {
        localStorage.setItem("auth", true);
        this.$router.push("/dashboard");
      } else {
        this.error = "E-mail ou senha inválidos.";
      }
    },
    gotoCadastro() {
      this.$router.push("/Cadastro");
    }
  },
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
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

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}

@media (max-width: 480px) {
  .login-page {
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
